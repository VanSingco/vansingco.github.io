<script setup lang="ts">
import { ref } from 'vue'
import { Download, ExternalLink, FileText } from '@/components/icons'

import SectionHeading from '@/components/SectionHeading.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { paper } from '@/data/site'

const previewOpen = ref(false)
</script>

<template>
  <section id="research" class="scroll-mt-28 px-4 py-20 sm:py-28">
    <div class="mx-auto max-w-6xl">
      <SectionHeading
        index="04"
        eyebrow="Published"
        title="Research"
        description="Peer-reviewed work on making long documents readable faster."
      />

      <Card v-reveal class="mt-12 overflow-hidden">
        <CardContent class="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <Badge>{{ paper.role }}</Badge>
              <Badge variant="secondary">{{ paper.venue }}</Badge>
              <Badge variant="outline">{{ paper.year }}</Badge>
            </div>

            <h3
              class="mt-5 font-display text-xl font-bold leading-snug text-balance sm:text-2xl"
            >
              {{ paper.title }}
            </h3>

            <p class="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {{ paper.abstract }}
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <Button as-child>
                <a :href="paper.link" target="_blank" rel="noopener noreferrer">
                  Read on ResearchGate
                  <ExternalLink class="size-4" />
                </a>
              </Button>
              <Button variant="outline" class="hidden sm:inline-flex" @click="previewOpen = true">
                <FileText class="size-4" />
                Preview PDF
              </Button>
              <Button variant="ghost" as-child>
                <a :href="paper.pdf" download>
                  <Download class="size-4" />
                  Download
                </a>
              </Button>
            </div>
          </div>

          <button
            type="button"
            class="group hidden w-56 shrink-0 rounded-xl border border-border bg-secondary/50 p-6 text-left transition-colors hover:border-primary/50 lg:block"
            @click="previewOpen = true"
          >
            <FileText class="size-9 text-primary" />
            <p class="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              PDF
            </p>
            <p class="mt-1 text-sm font-medium group-hover:text-primary">
              Open the full paper
            </p>
          </button>
        </CardContent>
      </Card>
    </div>

    <Dialog v-model:open="previewOpen">
      <DialogContent class="h-[85vh] w-[calc(100vw-2rem)] max-w-5xl gap-0 p-0 sm:w-full">
        <DialogHeader class="border-b border-border px-6 py-4 text-left">
          <DialogTitle class="pr-8 font-display text-base leading-snug">
            {{ paper.title }}
          </DialogTitle>
          <DialogDescription class="sr-only">
            Embedded PDF preview of the published paper.
          </DialogDescription>
        </DialogHeader>
        <!-- Loaded only once the dialog opens, so the PDF never costs a page load. -->
        <iframe
          v-if="previewOpen"
          :src="paper.pdf"
          :title="paper.title"
          class="size-full min-h-0 flex-1 border-0 bg-muted"
        />
      </DialogContent>
    </Dialog>
  </section>
</template>
