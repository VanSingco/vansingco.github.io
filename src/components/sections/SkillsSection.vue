<script setup lang="ts">
import SectionHeading from '@/components/SectionHeading.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { skillGroups } from '@/data/skills'
import { hasIcon, skillIcon, techLabel } from '@/data/tech'
</script>

<template>
  <section id="skills" class="scroll-mt-28 px-4 py-20 sm:py-28">
    <div class="mx-auto max-w-6xl">
      <SectionHeading
        index="03"
        eyebrow="Skills"
        title="The stack I reach for"
        description="Grouped by where it sits in the app, not by how well I know it — everything here has shipped to production."
        align="center"
      />

      <div class="mt-12 grid gap-5 sm:grid-cols-2">
        <Card
          v-for="(group, index) in skillGroups"
          :key="group.title"
          v-reveal="index * 70"
          class="transition-colors hover:border-primary/40"
        >
          <CardHeader>
            <CardTitle class="font-display text-lg">{{ group.title }}</CardTitle>
            <CardDescription>{{ group.description }}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul class="flex flex-wrap gap-2.5">
              <li
                v-for="slug in group.items"
                :key="slug"
                class="flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-2.5 py-1.5"
              >
                <img
                  v-if="hasIcon(slug)"
                  :src="skillIcon(slug)"
                  :alt="''"
                  width="18"
                  height="18"
                  loading="lazy"
                  decoding="async"
                  class="size-[18px]"
                />
                <!-- No upstream icon: a dot keeps the chip's rhythm. -->
                <span v-else class="size-[6px] rounded-full bg-primary/60" aria-hidden="true" />
                <span class="text-xs font-medium">{{ techLabel(slug) }}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
