import { Compass } from 'lucide-react'
import { footerData } from '../data/agencyData'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper'

function Footer() {
  return (
    <footer className="relative z-10 border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a
              href="#"
              className={`flex items-center gap-2.5 font-display italic text-ink ${focusRing}`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-paper">
                <Compass size={16} strokeWidth={2} aria-hidden="true" />
              </span>
              {footerData.brand}
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted">
              {footerData.tagline}
            </p>
          </div>

          {footerData.columns.map((column) => (
            <div key={column.heading}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted">{column.heading}</h3>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`text-sm text-ink/70 transition-colors hover:text-ink ${focusRing}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-6 text-xs text-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {footerData.brand}. All rights reserved.</p>
          <a
            href={footerData.credit.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-medium text-accent transition-colors hover:underline ${focusRing}`}
          >
            {footerData.credit.text}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
