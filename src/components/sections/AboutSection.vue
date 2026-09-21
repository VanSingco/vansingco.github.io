<script setup lang="ts">
import SectionHeading from '@/components/SectionHeading.vue'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { experience } from '@/data/experience'
import { site } from '@/data/site'
</script>

<template>
  <section id="about" class="scroll-mt-28 px-4 py-20 sm:py-28">
    <div class="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div>
        <SectionHeading index="02" eyebrow="About Me" title="Hello!" />
        <div class="mt-6 space-y-4">
          <p
            v-for="(paragraph, index) in site.intro"
            :key="index"
            v-reveal="index * 60"
            class="text-base leading-relaxed text-muted-foreground"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>

      <div>
        <h3
          v-reveal
          class="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          What I've worked on
        </h3>

        <ol class="mt-8 space-y-8">
          <li
            v-for="(entry, index) in experience"
            :key="entry.title"
            v-reveal="index * 80"
            class="relative pl-8"
          >
            <span
              class="absolute left-0 top-1.5 size-3 rounded-full border-2 border-primary bg-background"
              aria-hidden="true"
            />
            <span
              v-if="index < experience.length - 1"
              class="absolute left-[5px] top-6 h-[calc(100%+1rem)] w-px bg-border"
              aria-hidden="true"
            />

            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h4 class="font-display text-base font-bold">{{ entry.title }}</h4>
              <span v-if="entry.meta" class="font-mono text-xs text-primary">{{ entry.meta }}</span>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
              {{ entry.description }}
            </p>
            <div class="mt-3 flex flex-wrap gap-1.5">
              <Badge v-for="item in entry.focus" :key="item" variant="outline">{{ item }}</Badge>
            </div>
          </li>
        </ol>

        <Separator class="mt-10" />
      </div>
    </div>
  </section>
</template>
