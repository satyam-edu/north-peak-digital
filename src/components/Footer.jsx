import { Mountain } from 'lucide-react'
import { footerData } from '../data/agencyData'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900'

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a
              href="#"
              className={`flex items-center gap-2 rounded font-semibold text-white ${focusRing}`}
            >
              <Mountain size={20} className="text-blue-400" strokeWidth={2.25} aria-hidden="true" />
              {footerData.brand}
            </a>
            <p className="mt-3 max-w-xs text-sm text-slate-300">
              {footerData.tagline}
            </p>
          </div>

          {footerData.columns.map((column) => (
            <div key={column.heading}>
              <h3 className="font-display text-sm font-semibold text-white">{column.heading}</h3>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`rounded text-sm text-slate-300 transition-colors hover:text-white ${focusRing}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-300 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {footerData.brand}. All rights reserved.</p>
          <a
            href={footerData.credit.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded font-medium text-blue-400 transition-colors hover:underline ${focusRing}`}
          >
            {footerData.credit.text}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
