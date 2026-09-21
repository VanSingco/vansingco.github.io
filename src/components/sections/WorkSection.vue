<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useElementHover, useFocusWithin, usePreferredReducedMotion, useSwipe } from '@vueuse/core'
import { ChevronLeft, ChevronRight, ExternalLink } from '@/components/icons'

import BrowserFrame from '@/components/BrowserFrame.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { projects } from '@/data/projects'
import { techLabel } from '@/data/tech'

const AUTOPLAY_MS = 6000

const slider = ref<HTMLElement | null>(null)
const index = ref(0)
/** 1 = moving forward, -1 = back; picks which way the slide transition runs. */
const direction = ref(1)

const current = computed(() => projects[index.value])

const hovered = useElementHover(slider)
const { focused } = useFocusWithin(slider)
const motion = usePreferredReducedMotion()

let timer: ReturnType<typeof setInterval> | undefined

/** Autoplay never competes with someone reading or tabbing through the slide. */
function paused() {
  return hovered.value || focused.value || document.hidden || motion.value === 'reduce'
}

function schedule() {
  clearInterval(timer)
  timer = setInterval(() => {
    if (!paused()) go(index.value + 1, 1)
  }, AUTOPLAY_MS)
}

function go(to: number, dir = to > index.value ? 1 : -1) {
  direction.value = dir
  index.value = (to + projects.length) % projects.length
  // Any move — manual or automatic — restarts the clock, so a click never
  // leaves a half-spent interval behind it.
  schedule()
}

const next = () => go(index.value + 1, 1)
const prev = () => go(index.value - 1, -1)

useSwipe(slider, {
  onSwipeEnd(_event, swipe) {
    if (swipe === 'left') next()
    else if (swipe === 'right') prev()
  },
})

/** The frame's address bar reads better as a host than a full URL. */
function hostOf(link: string) {
  try {
    return new URL(link).host.replace(/^www\./, '')
  } catch {
    return link
  }
}

onMounted(schedule)
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section id="work" class="scroll-mt-28 px-4 py-20 sm:py-28">
    <div class="mx-auto max-w-6xl">
      <SectionHeading
        index="01"
        eyebrow="Portfolio"
        title="Selected work"
        description="Products I've built or helped carry — ecommerce, a school portal, fintech tooling and real-time video."
      />

      <Card v-reveal="80" class="mt-12 overflow-hidden p-0">
        <CardContent class="p-6 sm:p-8">
          <div
            ref="slider"
            class="rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            role="group"
            aria-roledescription="carousel"
            aria-label="Selected work"
            tabindex="0"
            @keydown.left.prevent="prev()"
            @keydown.right.prevent="next()"
          >
            <Transition :name="direction === 1 ? 'slide-next' : 'slide-prev'" mode="out-in">
              <div
                :key="current.slug"
                class="grid items-center gap-10 md:grid-cols-[1fr_1.15fr] lg:gap-14"
                aria-live="polite"
                :aria-label="`${index + 1} of ${projects.length}`"
              >
                <!-- Copy -->
                <div>
                  <div class="flex items-center gap-3">
                    <img
                      v-if="current.logo"
                      :src="current.logo"
                      :alt="`${current.title} logo`"
                      width="48"
                      height="48"
                      loading="lazy"
                      decoding="async"
                      class="size-12 shrink-0 rounded-xl border border-border bg-secondary object-contain p-2"
                    />
                    <!-- No logo file yet: a letter-mark keeps the row intact. -->
                    <span
                      v-else
                      aria-hidden="true"
                      class="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary font-display text-lg font-bold text-primary"
                    >
                      {{ current.title.charAt(0) }}
                    </span>
                    <div class="min-w-0">
                      <h3 class="font-display text-xl font-bold leading-tight sm:text-2xl">
                        {{ current.title }}
                      </h3>
                      <p class="mt-0.5 text-xs text-muted-foreground">
                        {{ current.role }}
                        <template v-if="current.period"> · {{ current.period }}</template>
                      </p>
                    </div>
                  </div>

                  <p class="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {{ current.description }}
                  </p>

                  <div class="mt-5 flex flex-wrap gap-1.5">
                    <Badge v-for="slug in current.stack" :key="slug" variant="secondary">
                      {{ techLabel(slug) }}
                    </Badge>
                  </div>

                  <Button class="mt-7" as-child>
                    <a :href="current.link" target="_blank" rel="noopener noreferrer">
                      Visit site
                      <ExternalLink class="size-4" />
                    </a>
                  </Button>
                </div>

                <!-- Screenshot, in the macOS window -->
                <div class="group">
                  <BrowserFrame :url="hostOf(current.link)">
                    <div class="h-[240px] overflow-hidden bg-muted sm:h-[320px]">
                      <img
                        v-if="current.shot"
                        :src="current.shot"
                        :alt="`Full page screenshot of ${current.title}`"
                        loading="lazy"
                        decoding="async"
                        class="w-full transition-transform duration-[7000ms] ease-linear motion-safe:group-hover:translate-y-[calc(-100%+240px)] sm:motion-safe:group-hover:translate-y-[calc(-100%+320px)]"
                      />
                      <!-- No capture yet: the frame shows the address instead of a hole. -->
                      <a
                        v-else
                        :href="current.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex size-full flex-col items-center justify-center gap-2 text-center"
                      >
                        <span class="font-mono text-sm text-muted-foreground">
                          {{ hostOf(current.link) }}
                        </span>
                        <span class="text-xs text-primary">Open the live site</span>
                      </a>
                    </div>
                  </BrowserFrame>
                </div>
              </div>
            </Transition>

            <!-- Controls -->
            <div class="mt-8 flex items-center justify-between gap-4">
              <div class="flex items-center gap-2">
                <Button variant="outline" size="icon" aria-label="Previous project" @click="prev()">
                  <ChevronLeft class="size-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Next project" @click="next()">
                  <ChevronRight class="size-4" />
                </Button>
              </div>

              <div class="flex items-center gap-2">
                <button
                  v-for="(project, i) in projects"
                  :key="project.slug"
                  type="button"
                  class="h-2 rounded-full transition-all"
                  :class="
                    i === index ? 'w-6 bg-primary' : 'w-2 bg-border hover:bg-muted-foreground'
                  "
                  :aria-label="`Show ${project.title}`"
                  :aria-current="i === index"
                  @click="go(i)"
                />
              </div>

              <p class="font-mono text-xs text-muted-foreground tabular-nums">
                {{ String(index + 1).padStart(2, '0') }} /
                {{ String(projects.length).padStart(2, '0') }}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
