import { Mountain } from 'lucide-react'
import { footerData } from '../data/agencyData'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 font-semibold text-ink">
              <Mountain size={20} className="text-accent" strokeWidth={2.25} />
              {footerData.brand}
            </a>
            <p className="mt-3 max-w-xs text-sm text-slate-600">
              {footerData.tagline}
            </p>
          </div>

          {footerData.columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold text-ink">{column.heading}</h3>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {footerData.brand}. All rights reserved.</p>
          <a
            href={footerData.credit.href}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-500 transition-colors hover:text-ink"
          >
            {footerData.credit.text}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
