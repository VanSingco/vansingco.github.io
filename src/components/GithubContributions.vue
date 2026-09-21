<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { Github } from '@/components/icons'
import { contact } from '@/data/site'

interface Day {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface ApiResponse {
  total: Record<string, number>
  contributions: Day[]
}

const props = withDefaults(defineProps<{ username?: string; endDate?: string }>(), {
  username: contact.githubHandle,
  /** Last day the graph shows; the window is the twelve months ending here. */
  endDate: '2026-05-31'
})

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** Tailwind classes per contribution level — all derived from the theme tokens. */
const LEVEL_CLASS = [
  'bg-muted',
  'bg-primary/25',
  'bg-primary/50',
  'bg-primary/75',
  'bg-primary'
] as const

const days = ref<Day[]>([])
const total = ref(0)
const status = ref<'loading' | 'ready' | 'error'>('loading')

/**
 * The API returns a flat run of days. Pad the front so the first column starts
 * on a Sunday, then chunk into weeks — the same shape GitHub renders.
 */
const weeks = computed<(Day | null)[][]>(() => {
  if (!days.value.length) return []
  const lead = new Date(`${days.value[0].date}T00:00:00Z`).getUTCDay()
  const cells: (Day | null)[] = [...Array<null>(lead).fill(null), ...days.value]
  const out: (Day | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) {
    const week = cells.slice(i, i + 7)
    while (week.length < 7) week.push(null)
    out.push(week)
  }
  return out
})

/** One label per week column, shown only where a new month starts. */
const monthLabels = computed(() =>
  weeks.value.map((week, index) => {
    const first = week.find((day): day is Day => day !== null)
    if (!first) return ''
    const date = new Date(`${first.date}T00:00:00Z`)
    if (index === 0) return ''
    const prev = weeks.value[index - 1]?.find((day): day is Day => day !== null)
    if (!prev) return ''
    const prevMonth = new Date(`${prev.date}T00:00:00Z`).getUTCMonth()
    return date.getUTCMonth() === prevMonth ? '' : MONTHS[date.getUTCMonth()]
  })
)

function label(day: Day) {
  const date = new Date(`${day.date}T00:00:00Z`)
  const when = `${WEEKDAYS[date.getUTCDay()]}, ${MONTHS[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`
  return `${day.count === 0 ? 'No' : day.count} contribution${day.count === 1 ? '' : 's'} on ${when}`
}

/** Twelve months ending on `endDate`, inclusive, as YYYY-MM-DD bounds. */
const windowEnd = computed(() => props.endDate)
const windowStart = computed(() => {
  const end = new Date(`${windowEnd.value}T00:00:00Z`)
  const start = new Date(end)
  start.setUTCFullYear(start.getUTCFullYear() - 1)
  start.setUTCDate(start.getUTCDate() + 1)
  return start.toISOString().slice(0, 10)
})

const rangeLabel = computed(() => {
  const from = new Date(`${windowStart.value}T00:00:00Z`)
  const to = new Date(`${windowEnd.value}T00:00:00Z`)
  return `${MONTHS[from.getUTCMonth()]} ${from.getUTCFullYear()} – ${MONTHS[to.getUTCMonth()]} ${to.getUTCFullYear()}`
})

onMounted(async () => {
  try {
    // The window can straddle two calendar years, so ask for each one it touches.
    const years = [...new Set([windowStart.value.slice(0, 4), windowEnd.value.slice(0, 4)])]
    const query = years.map((year) => `y=${year}`).join('&')
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(props.username)}?${query}`
    )
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const data = (await res.json()) as ApiResponse
    if (!Array.isArray(data.contributions) || !data.contributions.length) {
      throw new Error('empty payload')
    }

    const windowDays = data.contributions.filter(
      (day) => day.date >= windowStart.value && day.date <= windowEnd.value
    )
    if (!windowDays.length) throw new Error('no days in window')

    days.value = windowDays
    // Per-year totals cover whole calendar years, so count the window itself.
    total.value = windowDays.reduce((sum, day) => sum + day.count, 0)
    status.value = 'ready'
  } catch (error) {
    console.warn('GitHub contributions unavailable', error)
    status.value = 'error'
  }
})

/** Placeholder grid so the hero does not reflow when the data lands. */
const skeletonWeeks = Array.from({ length: 53 })
</script>

<template>
  <div
    class="rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5"
    data-slot="github-contributions"
  >
    <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <p class="text-sm font-medium">
        <template v-if="status === 'ready'">
          <span class="text-primary">{{ total.toLocaleString() }}</span>
          contributions · {{ rangeLabel }}
        </template>
        <template v-else-if="status === 'loading'">Loading contributions…</template>
        <template v-else>GitHub contributions</template>
      </p>
      <a
        :href="contact.github"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
      >
        <Github class="size-3.5" />
        @{{ username }}
      </a>
    </div>

    <!-- Error: never leave a hole in the hero. -->
    <p v-if="status === 'error'" class="mt-4 text-sm leading-relaxed text-muted-foreground">
      Couldn't load the contribution graph right now —
      <a
        :href="contact.github"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary underline underline-offset-4"
      >
        view it on GitHub
      </a>
      instead.
    </p>

    <div v-else class="mt-4 overflow-x-auto pb-1">
      <div class="min-w-[560px]">
        <!-- Month labels -->
        <div
          v-if="status === 'ready'"
          class="mb-1 grid gap-[3px] pl-7 text-[10px] text-muted-foreground"
          :style="{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }"
          aria-hidden="true"
        >
          <span v-for="(month, index) in monthLabels" :key="index" class="truncate">
            {{ month }}
          </span>
        </div>

        <div class="flex gap-[3px]">
          <!-- Weekday labels: Mon / Wed / Fri, like GitHub -->
          <div
            class="grid w-6 shrink-0 grid-rows-7 gap-[3px] text-[10px] leading-none text-muted-foreground"
            aria-hidden="true"
          >
            <span v-for="(name, row) in WEEKDAYS" :key="name" class="flex items-center">
              {{ row % 2 === 1 ? name : '' }}
            </span>
          </div>

          <!-- Loaded grid -->
          <div
            v-if="status === 'ready'"
            class="grid flex-1 gap-[3px]"
            :style="{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }"
            role="img"
            :aria-label="`${total} GitHub contributions, ${rangeLabel}`"
          >
            <div v-for="(week, w) in weeks" :key="w" class="grid grid-rows-7 gap-[3px]">
              <div
                v-for="(day, d) in week"
                :key="d"
                class="aspect-square rounded-[2px]"
                :class="day ? LEVEL_CLASS[day.level] : 'bg-transparent'"
                :title="day ? label(day) : undefined"
              />
            </div>
          </div>

          <!-- Skeleton -->
          <div
            v-else
            class="grid flex-1 animate-pulse gap-[3px]"
            :style="{ gridTemplateColumns: `repeat(53, minmax(0, 1fr))` }"
            aria-hidden="true"
          >
            <div v-for="(_, w) in skeletonWeeks" :key="w" class="grid grid-rows-7 gap-[3px]">
              <div v-for="d in 7" :key="d" class="aspect-square rounded-[2px] bg-muted" />
            </div>
          </div>
        </div>

        <!-- Legend -->
        <div
          v-if="status === 'ready'"
          class="mt-3 flex items-center justify-end gap-1.5 text-[10px] text-muted-foreground"
          aria-hidden="true"
        >
          <span>Less</span>
          <span
            v-for="(cls, level) in LEVEL_CLASS"
            :key="level"
            class="size-[10px] rounded-[2px]"
            :class="cls"
          />
          <span>More</span>
        </div>
      </div>
    </div>
  </div>
</template>
