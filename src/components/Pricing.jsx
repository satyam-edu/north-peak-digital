import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Check, X } from 'lucide-react'
import { pricing } from '../data/agencyData'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900'

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function scrollToSection(id) {
  const target = document.getElementById(id)
  if (!target) return

  const header = document.querySelector('header')
  const offset = header ? header.offsetHeight : 0
  const top = target.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({ top, behavior: 'smooth' })
}

function formatPrice(amount) {
  return amount.toLocaleString('en-US')
}

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="bg-glow-radial bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={headerVariants}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-1.5 text-sm font-medium text-slate-300">
            {pricing.intro.badge}
          </span>
          <h2 className="mt-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text font-display text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
            {pricing.intro.headline}
          </h2>
          <p className="mt-4 text-slate-300">{pricing.intro.subtext}</p>
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <span
            id="billing-monthly-label"
            className={`text-sm font-medium ${isAnnual ? 'text-slate-300' : 'text-white'}`}
          >
            Monthly
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={isAnnual}
            aria-labelledby="billing-monthly-label billing-annual-label"
            onClick={() => setIsAnnual((prev) => !prev)}
            className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${
              isAnnual ? 'bg-blue-500' : 'bg-slate-700'
            } ${focusRing}`}
          >
            <span
              aria-hidden="true"
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                isAnnual ? 'translate-x-8' : 'translate-x-1'
              }`}
            />
          </button>

          <span
            id="billing-annual-label"
            className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-slate-300'}`}
          >
            Annual <span className="text-emerald-400">(Save 20%)</span>
          </span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={gridVariants}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {pricing.tiers.map((tier) => (
            <motion.article
              key={tier.id}
              variants={cardVariants}
              className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                tier.isPopular
                  ? 'border-blue-500 bg-slate-800/90 text-white shadow-xl shadow-blue-500/10'
                  : 'border-slate-700/60 bg-slate-800/40 text-slate-200'
              }`}
            >
              {tier.isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-lg font-semibold text-white">{tier.name}</h3>
              <p className="mt-1 text-xs font-medium text-blue-400">{tier.target}</p>
              <p className="mt-3 text-sm text-slate-300">{tier.tagline}</p>

              <div className="mt-6 flex items-baseline gap-2">
                {tier.isCustom && (
                  <span className="text-4xl font-semibold text-white">Custom</span>
                )}
                {!tier.isCustom && (
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isAnnual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="text-4xl font-semibold text-white"
                    >
                      ${formatPrice(isAnnual ? tier.annual : tier.monthly)}
                    </motion.span>
                  </AnimatePresence>
                )}
                <span className="text-sm text-slate-300">/mo</span>
              </div>

              {tier.isCustom ? (
                <p className="mt-1 text-xs text-slate-400">
                  From ${formatPrice(isAnnual ? tier.annual : tier.monthly)}/mo
                </p>
              ) : (
                isAnnual && (
                  <p className="mt-1 text-xs text-emerald-400">Billed annually</p>
                )
              )}

              <ul className="mt-6 flex-1 space-y-3 border-t border-slate-700/60 pt-6 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-cyan-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <X
                        size={16}
                        className="mt-0.5 shrink-0 text-slate-600"
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className={feature.included ? 'text-slate-200' : 'text-slate-400'}
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection('contact')
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-medium transition-colors ${
                  tier.isPopular
                    ? 'bg-blue-500 text-white hover:bg-blue-400'
                    : 'bg-white text-slate-900 hover:bg-slate-100'
                } ${focusRing}`}
              >
                {tier.cta}
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
