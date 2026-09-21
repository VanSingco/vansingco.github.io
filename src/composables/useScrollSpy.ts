import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * Tracks which section is currently in view so the nav can highlight it.
 *
 * The old site only updated the highlight on click, so scrolling left the nav
 * pointing at the wrong section.
 */
export function useScrollSpy(ids: readonly string[], rootMargin = '-45% 0px -50% 0px') {
  const activeId = ref<string>(ids[0] ?? '')
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) activeId.value = entry.target.id
        }
      },
      { rootMargin, threshold: 0 }
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { activeId }
}

/** Smooth-scrolls to a section, honouring prefers-reduced-motion via CSS. */
export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
