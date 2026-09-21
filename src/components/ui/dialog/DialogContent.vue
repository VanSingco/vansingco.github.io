<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogPortal,
  useForwardPropsEmits
} from 'reka-ui'

import { X } from '@/components/icons'
import { cn } from '@/lib/utils'
import DialogOverlay from './DialogOverlay.vue'

// withDefaults matters here: Vue casts an absent Boolean prop to `false`, so an
// undefaulted `showCloseButton` would silently suppress the close button.
const props = withDefaults(
  defineProps<DialogContentProps & { class?: HTMLAttributes['class']; showCloseButton?: boolean }>(),
  { showCloseButton: true }
)
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _class, showCloseButton: _showCloseButton, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay />
    <DialogContent
      data-slot="dialog-content"
      v-bind="forwarded"
      :class="
        cn(
          'bg-card data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border border-border p-6 shadow-2xl duration-200',
          props.class
        )
      "
    >
      <slot />

      <DialogClose
        v-if="showCloseButton"
        class="ring-offset-background focus:ring-ring data-[state=open]:bg-accent absolute top-4 right-4 z-10 rounded-sm bg-background/70 p-1 opacity-70 backdrop-blur transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
      >
        <X class="size-4" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
