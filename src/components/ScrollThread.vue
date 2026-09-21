<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'
import { usePreferredReducedMotion } from '@vueuse/core'

import { navLinks } from '@/data/site'
import { scrollToSection, useScrollSpy } from '@/composables/useScrollSpy'

/** Hero first, then the nav sections — the order they appear down the page. */
const SECTIONS = [{ id: 'top', label: 'Top' }, ...navLinks]
const IDS = SECTIONS.map((section) => section.id)

/** Rail geometry, in the SVG's own pixel space. */
const WIDTH = 56
const LEFT = 14
const RIGHT = 42

interface Node {
  id: string
  label: string
  x: number
  y: number
  /** Where this section sits in the document, 0–1 — when the node lights up. */
  at: number
}

const host = useTemplateRef<HTMLElement>('host')
const path = useTemplateRef<SVGPathElement>('path')

const height = ref(0)
const nodes = ref<Node[]>([])
const length = ref(0)
const progress = ref(0)

const motion = usePreferredReducedMotion()
const still = computed(() => motion.value === 'reduce')
const { activeId } = useScrollSpy(IDS)

/** Cubic chain between the nodes: a snake rather than hard corners. */
const d = computed(() => {
  if (nodes.value.length < 2) return ''
  const [first, ...rest] = nodes.value
  let out = `M ${first.x} ${first.y}`
  let prev = first
  for (const node of rest) {
    const bend = (node.y - prev.y) * 0.45
    out += ` C ${prev.x} ${prev.y + bend}, ${node.x} ${node.y - bend}, ${node.x} ${node.y}`
    prev = node
  }
  return out
})

const drawn = computed(() => (still.value ? 1 : progress.value))
const offset = computed(() => length.value * (1 - drawn.value))
const reached = (node: Node) => drawn.value >= node.at

/**
 * The rail is a miniature of the page: each section keeps its relative place in
 * the document, mapped onto the rail's height.
 */
function measure() {
  const h = host.value?.clientHeight ?? 0
  height.value = h
  if (!h) return

  const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)

  nodes.value = SECTIONS.flatMap((section, i) => {
    const el = document.getElementById(section.id)
    if (!el) return []
    const centre = el.getBoundingClientRect().top + window.scrollY + el.offsetHeight / 2
    const at = Math.min(Math.max((centre - window.innerHeight / 2) / scrollable, 0), 1)
    return [
      {
        id: section.id,
        label: section.label,
        x: i % 2 === 0 ? LEFT : RIGHT,
        y: 8 + at * (h - 16),
        at
      }
    ]
  })

  // getTotalLength() needs the new `d` on the element, so wait for Vue to patch.
  requestAnimationFrame(() => {
    length.value = path.value?.getTotalLength() ?? 0
  })
}

function update() {
  const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
  progress.value = Math.min(Math.max(window.scrollY / scrollable, 0), 1)
}

let frame = 0
function onScroll() {
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = 0
    update()
  })
}

function onResize() {
  measure()
  update()
}

let observer: ResizeObserver | undefined

onMounted(() => {
  onResize()
  if (still.value) return

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
  // Images and the Work slider change the page height as they settle.
  observer = new ResizeObserver(onResize)
  observer.observe(document.body)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  observer?.disconnect()
  if (frame) cancelAnimationFrame(frame)
})
</script>

<template>
  <nav
    class="fixed left-3 top-1/2 z-30 hidden -translate-y-1/2 lg:block xl:left-6"
    aria-label="Sections"
  >
    <div ref="host" class="relative h-[62vh] w-14">
      <svg class="absolute inset-0 size-full" :viewBox="`0 0 ${WIDTH} ${height}`" fill="none" aria-hidden="true">
        <!-- The whole route, ghosted, so the rail reads as a path not a stub. -->
        <path :d="d" stroke="var(--border)" stroke-width="1.5" stroke-linecap="round" />

        <!-- The travelled part, revealed as the page scrolls. -->
        <path
          ref="path"
          :d="d"
          stroke="var(--primary)"
          stroke-width="1.5"
          stroke-linecap="round"
          :stroke-dasharray="length || undefined"
          :stroke-dashoffset="length ? offset : undefined"
        />
      </svg>

      <button
        v-for="node in nodes"
        :key="node.id"
        type="button"
        class="group absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2"
        :style="{ left: `${node.x}px`, top: `${node.y}px` }"
        :aria-label="`Go to ${node.label}`"
        :aria-current="activeId === node.id ? 'true' : undefined"
        @click="scrollToSection(node.id)"
      >
        <span
          class="size-2.5 rounded-full border transition-all duration-300 group-hover:scale-125"
          :class="[
            reached(node) ? 'border-primary bg-primary' : 'border-border bg-background',
            activeId === node.id ? 'ring-2 ring-primary/30' : ''
          ]"
        />
        <span
          class="pointer-events-none whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          {{ node.label }}
        </span>
      </button>
    </div>
  </nav>
</template>
