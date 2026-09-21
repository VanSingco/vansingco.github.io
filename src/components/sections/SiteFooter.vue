<script setup lang="ts">
import { Github, Mail } from '@/components/icons'

import { Button } from '@/components/ui/button'
import { contact, site } from '@/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border px-4 py-10">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row"
    >
      <p class="text-sm text-muted-foreground">
        © {{ year }} {{ site.name }}. All rights reserved.
      </p>

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
  </footer>
</template>
