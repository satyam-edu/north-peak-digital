import { useEffect } from 'react'
import Lenis from 'lenis'

let lenisInstance = null

/**
 * Drives Lenis's inertia scroll via requestAnimationFrame. Lenis dispatches
 * real `scroll` events on scroll, so Motion's useScroll (Navbar progress bar,
 * useScrollScrub3D) keeps working unmodified on top of it.
 *
 * Skipped entirely under prefers-reduced-motion so the browser falls back to
 * plain native scrolling.
 */
export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    })
    lenisInstance = lenis

    let frameId
    function raf(time) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}

/**
 * Scrolls to a target (element or Y position), routed through the active
 * Lenis instance when one exists. Anchor-nav that bypasses Lenis and calls
 * window.scrollTo directly fights Lenis's own scroll loop — causing the
 * stutter/jump bugs on section-link clicks.
 */
export function scrollToTarget(target, { offset = 0 } = {}) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset })
    return
  }

  const top =
    typeof target === 'number'
      ? target + offset
      : target.getBoundingClientRect().top + window.scrollY + offset

  window.scrollTo({ top, behavior: 'smooth' })
}
