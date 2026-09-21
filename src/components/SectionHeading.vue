<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Two-digit section index, e.g. "01". Decorative — hidden from assistive tech. */
    index?: string
    eyebrow?: string
    title: string
    description?: string
    align?: 'left' | 'center'
  }>(),
  { align: 'left' },
)
</script>

<template>
  <!--
    The section numeral sits at the end of the heading row rather than inline in
    the eyebrow: it reads as a marker for the whole section, and it stays clear
    of the left edge where the scroll rail lives.
  -->
  <div
    v-reveal
    class="flex items-start justify-between gap-6"
    :class="align === 'center' ? 'mx-auto max-w-2xl text-center' : ''"
  >
    <div class="max-w-2xl">
      <p
        v-if="eyebrow"
        class="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
        :class="align === 'center' ? 'justify-center' : ''"
      >
        <span v-if="index" aria-hidden="true" class="h-px w-6 bg-border" />
        {{ eyebrow }}
      </p>
      <h2 class="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {{ title }}
      </h2>
      <p v-if="description" class="mt-4 text-base leading-relaxed text-muted-foreground">
        {{ description }}
      </p>
    </div>

    <span
      v-if="index && align !== 'center'"
      aria-hidden="true"
      class="hidden shrink-0 font-display text-5xl font-bold leading-none text-primary/15 sm:block lg:text-6xl"
    >
      {{ index }}
    </span>
  </div>
</template>
