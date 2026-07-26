import { useRef } from 'react'
import { useMotionValue, useSpring, useTransform } from 'motion/react'

const TILT_RANGE = 10
const SPRING_CONFIG = { stiffness: 250, damping: 20 }

/**
 * Tracks pointer position over a card and returns motion values that
 * translate it into a subtle 3D tilt, plus the handlers/ref needed to
 * wire it up to a motion.* element.
 */
export function use3DTilt() {
  const ref = useRef(null)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [TILT_RANGE, -TILT_RANGE]),
    SPRING_CONFIG,
  )
  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-TILT_RANGE, TILT_RANGE]),
    SPRING_CONFIG,
  )

  const onMouseMove = (event) => {
    const node = ref.current
    if (!node) return
    const bounds = node.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  const onMouseLeave = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return {
    ref,
    style: { perspective: 1000, rotateX, rotateY },
    onMouseMove,
    onMouseLeave,
  }
}
