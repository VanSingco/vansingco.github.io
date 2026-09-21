<script setup lang="ts">
withDefaults(defineProps<{ url?: string }>(), { url: "" });
</script>

<template>
  <div
    class="overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-black/30"
    data-slot="browser-frame"
  >
    <!-- Title bar: traffic lights left, address pill centred, like macOS Safari. -->
    <div
      class="flex items-center gap-3 border-b border-border bg-muted/40 px-3 py-2.5 sm:px-4"
    >
      <div class="flex shrink-0 items-center gap-1.5" aria-hidden="true">
        <span class="size-3 rounded-full bg-[#ff5f57]" />
        <span class="size-3 rounded-full bg-[#febc2e]" />
        <span class="size-3 rounded-full bg-[#28c840]" />
      </div>

      <div class="flex min-w-0 flex-1 justify-center">
        <div
          class="max-w-full truncate rounded-md bg-background/70 px-3 py-1 text-[11px] text-muted-foreground"
        >
          {{ url }}
        </div>
      </div>

      <!-- Mirrors the traffic lights so the address pill stays optically centred. -->
      <div class="w-[52px] shrink-0" aria-hidden="true" />
    </div>

    <!-- The framed content supplies its own padding; the frame owns the border. -->
    <div
      class="[&>[data-slot=github-contributions]]:rounded-none [&>[data-slot=github-contributions]]:border-0 [&>[data-slot=github-contributions]]:bg-transparent [&>[data-slot=github-contributions]]:shadow-none"
    >
      <slot />
    </div>
  </div>
</template>
