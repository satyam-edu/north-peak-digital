import { useState } from 'react'
import { motion } from 'motion/react'
import { Menu, X, Mountain } from 'lucide-react'
import { company, navLinks } from '../data/agencyData'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900'

function scrollToSection(id) {
  const target = document.getElementById(id)
  if (!target) return

  const header = document.querySelector('header')
  const offset = header ? header.offsetHeight : 0
  const top = target.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({ top, behavior: 'smooth' })
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = (event, id) => {
    event.preventDefault()
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setIsOpen(false)
          }}
          aria-label={`${company.name} — back to top`}
          className={`flex items-center gap-2 rounded font-semibold text-white ${focusRing}`}
        >
          <Mountain size={22} className="text-blue-400" strokeWidth={2.25} aria-hidden="true" />
          {company.name}
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(event) => handleLinkClick(event, link.id)}
                className={`rounded transition-colors hover:text-white ${focusRing}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          onClick={(event) => handleLinkClick(event, 'contact')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 md:inline-block ${focusRing}`}
        >
          Get Started
        </motion.a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className={`rounded text-white md:hidden ${focusRing}`}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <ul
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-slate-800 bg-slate-900 px-6 py-4 text-sm font-medium text-slate-300 md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(event) => handleLinkClick(event, link.id)}
                className={`block rounded py-2 hover:text-white ${focusRing}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(event) => handleLinkClick(event, 'contact')}
              className={`mt-2 block rounded-full bg-white px-5 py-2 text-center text-slate-900 ${focusRing}`}
            >
              Get Started
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Navbar
