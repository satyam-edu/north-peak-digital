import { useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { Menu, X, ArrowRight, Compass } from 'lucide-react'
import { company, navLinks } from '../data/agencyData'
import { scrollToSection, scrollToTop } from '../utils/scroll'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper'

const ctaClasses =
  'group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  })

  const handleLinkClick = (event, id) => {
    event.preventDefault()
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault()
            scrollToTop()
            setIsOpen(false)
          }}
          aria-label={`${company.name} — back to top`}
          className={`flex items-center gap-2.5 font-display text-lg italic tracking-tight text-ink ${focusRing}`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-paper">
            <Compass size={16} strokeWidth={2} aria-hidden="true" />
          </span>
          {company.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(event) => handleLinkClick(event, link.id)}
                className={`font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-ink ${focusRing}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(event) => handleLinkClick(event, 'contact')}
          className={`hidden md:inline-flex ${ctaClasses} ${focusRing}`}
        >
          Get Started
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className={`rounded-full p-2 text-ink md:hidden ${focusRing}`}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="h-0.5 origin-left bg-accent"
      />

      {isOpen && (
        <ul
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-ink/10 bg-paper px-4 py-4 font-mono text-xs uppercase tracking-wider text-ink sm:px-6 md:hidden lg:px-8"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(event) => handleLinkClick(event, link.id)}
                className={`block py-2 text-muted hover:text-ink ${focusRing}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(event) => handleLinkClick(event, 'contact')}
              className={`mt-2 w-full justify-center ${ctaClasses} ${focusRing}`}
            >
              Get Started
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Navbar
