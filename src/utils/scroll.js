import { scrollToTarget } from '../hooks/useLenis'

export function scrollToSection(id) {
  const target = document.getElementById(id)
  if (!target) return

  const header = document.querySelector('header')
  const offset = header ? -header.offsetHeight : 0

  scrollToTarget(target, { offset })
}

export function scrollToTop() {
  scrollToTarget(0)
}
