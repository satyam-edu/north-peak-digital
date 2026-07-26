import { useState } from 'react'
import { Menu, X, Mountain } from 'lucide-react'
import { navLinks } from '../data/agencyData'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-semibold text-ink">
          <Mountain size={22} className="text-accent" strokeWidth={2.25} />
          North Peak Digital
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-ink px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent md:inline-block"
        >
          Start a project
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="text-ink md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-slate-200 bg-white px-6 py-4 text-sm font-medium text-slate-600 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 block rounded-full bg-ink px-5 py-2 text-center text-white"
            >
              Start a project
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Navbar
