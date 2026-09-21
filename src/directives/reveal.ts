import type { Directive } from 'vue'

/**
 * v-reveal — fades an element in the first time it enters the viewport.
 *
 * Pairs with the .reveal / .reveal-in utilities in main.css, which already
 * no-op under prefers-reduced-motion.
 */
const observers = new WeakMap<HTMLElement, IntersectionObserver>()

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    const delay = binding.value ?? 0
    el.classList.add('reveal')
    if (delay) el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          el.classList.add('reveal-in')
          observer.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    )

    observer.observe(el)
    observers.set(el, observer)
  },
  unmounted(el) {
    observers.get(el)?.disconnect()
    observers.delete(el)
  }
}
