<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { Menu } from '@/components/icons'

import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navLinks, site } from '@/data/site'
import { scrollToSection, useScrollSpy } from '@/composables/useScrollSpy'
import { cn } from '@/lib/utils'

const { activeId } = useScrollSpy(navLinks.map((link) => link.id))
const scrolled = ref(false)
const sheetOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

function go(id: string) {
  sheetOpen.value = false
  scrollToSection(id)
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
    <nav
      :class="
        cn(
          'flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-300',
          scrolled
            ? 'border-border bg-background/80 shadow-lg shadow-black/30 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        )
      "
    >
      <button
        type="button"
        class="rounded-full px-3 py-1.5 font-display text-sm font-bold tracking-tight transition-colors hover:text-primary"
        @click="scrollToSection('top')"
      >
        {{ site.shortName }}
        <span class="text-primary">.</span>
      </button>

      <!-- Desktop -->
      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="link in navLinks" :key="link.id">
          <button
            type="button"
            :aria-current="activeId === link.id ? 'true' : undefined"
            :class="
              cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                activeId === link.id
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )
            "
            @click="go(link.id)"
          >
            {{ link.label }}
          </button>
        </li>
      </ul>

      <Button
        size="sm"
        class="hidden rounded-full md:inline-flex"
        @click="scrollToSection('contact')"
      >
        Hire me
      </Button>

      <!-- Mobile -->
      <Sheet v-model:open="sheetOpen">
        <SheetTrigger as-child>
          <Button variant="ghost" size="icon" class="rounded-full md:hidden" aria-label="Open menu">
            <Menu class="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" class="w-72">
          <SheetTitle class="px-4 pt-4 font-display">Navigation</SheetTitle>
          <ul class="mt-4 flex flex-col gap-1 px-2 pb-4">
            <li v-for="link in navLinks" :key="link.id">
              <button
                type="button"
                :class="
                  cn(
                    'w-full rounded-lg px-4 py-3 text-left text-base font-medium transition-colors',
                    activeId === link.id
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                  )
                "
                @click="go(link.id)"
              >
                {{ link.label }}
              </button>
            </li>
            <li class="mt-3 px-2">
              <SheetClose as-child>
                <Button class="w-full" @click="go('contact')">Hire me</Button>
              </SheetClose>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  </header>
</template>
