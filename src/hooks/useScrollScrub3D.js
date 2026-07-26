import { useRef } from 'react'
import { useReducedMotion, useScroll, useTransform } from 'motion/react'

/**
 * Continuous scroll-scrubbed 3D transform for one element: pass any of
 * rotateRange/yRange/scaleRange/opacityRange as [start, end] pairs and this
 * maps scroll progress across `offset` to a live transform/opacity style.
 *
 * Raw scroll-linked motion values are NOT covered by MotionConfig's
 * reducedMotion="user" (that only neutralizes animate/whileInView/whileHover).
 * So this hook resolves its own guard: when the user prefers reduced motion,
 * every value is pinned to its resting end-state instead of tracking scroll.
 */
export function useScrollScrub3D({
  offset = ['start end', 'end start'],
  rotateRange,
  yRange,
  scaleRange,
  opacityRange,
} = {}) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset })

  // Always call useTransform (same order every render) even when a given
  // range isn't requested — conditionally calling hooks violates the rules
  // of hooks. Unrequested values are simply left out of the returned style.
  const rotateX = useTransform(scrollYProgress, [0, 1], rotateRange ?? [0, 0])
  const y = useTransform(scrollYProgress, [0, 1], yRange ?? [0, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange ?? [1, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], opacityRange ?? [1, 1])

  const style = prefersReducedMotion
    ? {
        rotateX: rotateRange ? rotateRange[1] : undefined,
        y: yRange ? yRange[1] : undefined,
        scale: scaleRange ? scaleRange[1] : undefined,
        opacity: opacityRange ? opacityRange[1] : undefined,
        transformPerspective: 800,
      }
    : {
        rotateX: rotateRange ? rotateX : undefined,
        y: yRange ? y : undefined,
        scale: scaleRange ? scale : undefined,
        opacity: opacityRange ? opacity : undefined,
        transformPerspective: 800,
      }

  return { ref, style }
}
