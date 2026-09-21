<script setup lang="ts">
import { ArrowRight, Github, Mail } from '@/components/icons'

import BrowserFrame from '@/components/BrowserFrame.vue'
import GithubContributions from '@/components/GithubContributions.vue'
import { Button } from '@/components/ui/button'
import { contact, site } from '@/data/site'
import { scrollToSection } from '@/composables/useScrollSpy'
</script>

<template>
  <section id="top" class="relative overflow-hidden px-4 pt-32 pb-16 sm:pt-40 sm:pb-24">
    <div class="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-8">
      <div>
        <div
          v-reveal
          class="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <span class="relative flex size-2">
            <span
              class="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70"
            />
            <span class="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Available for work
        </div>

        <h1
          v-reveal="80"
          class="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          {{ site.name }}
        </h1>

        <p v-reveal="140" class="mt-4 text-lg font-medium sm:text-xl">
          <span class="brush text-foreground">{{ site.role }}</span>
        </p>

        <p
          v-reveal="200"
          class="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {{ site.tagline }}
        </p>

        <div v-reveal="260" class="mt-9 flex flex-wrap items-center gap-3">
          <Button size="lg" class="group" @click="scrollToSection('contact')">
            Hire me
            <ArrowRight class="size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button size="lg" variant="outline" @click="scrollToSection('work')">View work</Button>
          <div class="flex items-center gap-1">
            <Button variant="ghost" size="icon" as-child aria-label="GitHub profile">
              <a :href="contact.github" target="_blank" rel="noopener noreferrer">
                <Github class="size-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" as-child aria-label="Send an email">
              <a :href="`mailto:${contact.email}`">
                <Mail class="size-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div v-reveal="160" class="relative w-full">
        <BrowserFrame :url="`github.com/${contact.githubHandle}`">
          <GithubContributions />
        </BrowserFrame>
      </div>
    </div>
  </section>
</template>
