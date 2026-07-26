import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Check, X } from 'lucide-react'
import { pricing } from '../data/agencyData'
import { use3DTilt } from '../hooks/use3DTilt'
import { scrollToSection } from '../utils/scroll'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper'

const headerVariants = {
  hidden: { opacity: 0, y: 20, rotateX: 6 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, rotateX: 6 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

function formatPrice(amount) {
  return amount.toLocaleString('en-US')
}

function PricingTierCard({ tier, isAnnual }) {
  const tilt = use3DTilt()

  return (
    <motion.article
      ref={tilt.ref}
      variants={cardVariants}
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      whileHover={{ scale: 1.02 }}
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-8 text-ink ${
        tier.isPopular ? 'border-accent shadow-[0_20px_45px_-25px_rgba(33,69,183,0.35)]' : 'border-ink/10'
      }`}
    >
      {tier.isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-medium text-white">
          Most Popular
        </span>
      )}

      <h3 className="font-display text-lg text-ink">{tier.name}</h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">{tier.target}</p>
      <p className="mt-3 text-sm text-muted">{tier.tagline}</p>

      <div className="mt-6 flex items-baseline gap-2">
        {tier.isCustom && (
          <span className="font-display text-4xl text-ink">Custom</span>
        )}
        {!tier.isCustom && (
          <AnimatePresence mode="wait">
            <motion.span
              key={isAnnual ? 'annual' : 'monthly'}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="font-display text-4xl text-ink"
            >
              ${formatPrice(isAnnual ? tier.annual : tier.monthly)}
            </motion.span>
          </AnimatePresence>
        )}
        <span className="text-sm text-muted">/mo</span>
      </div>

      {tier.isCustom ? (
        <p className="mt-1 text-xs text-muted">
          From ${formatPrice(isAnnual ? tier.annual : tier.monthly)}/mo
        </p>
      ) : (
        isAnnual && <p className="mt-1 text-xs font-medium text-emerald-600">Billed annually</p>
      )}

      <ul className="mt-6 flex-1 space-y-3 border-t border-ink/10 pt-6 text-sm">
        {tier.features.map((feature) => (
          <li key={feature.label} className="flex items-start gap-2">
            {feature.included ? (
              <Check
                size={16}
                className="mt-0.5 shrink-0 text-accent"
                strokeWidth={2.5}
                aria-hidden="true"
              />
            ) : (
              <X
                size={16}
                className="mt-0.5 shrink-0 text-ink/20"
                aria-hidden="true"
              />
            )}
            <span className={feature.included ? 'text-ink/80' : 'text-ink/40'}>
              {feature.label}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        onClick={(event) => {
          event.preventDefault()
          scrollToSection('contact')
        }}
        className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-medium transition-colors ${
          tier.isPopular
            ? 'bg-accent text-white hover:bg-ink'
            : 'border border-ink/15 text-ink hover:border-ink'
        } ${focusRing}`}
      >
        {tier.cta}
      </a>
    </motion.article>
  )
}

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <motion.section
      id="pricing"
      initial={{ opacity: 0, y: 80, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="mb-12 rounded-[32px] border border-ink/10 bg-white p-8 shadow-xl md:p-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={headerVariants}
          style={{ transformPerspective: 800 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
            <span aria-hidden="true">03</span>
            {pricing.intro.badge}
          </span>
          <h2 className="mt-6 font-display text-3xl text-ink md:text-4xl">
            {pricing.intro.headline}
          </h2>
          <p className="mt-4 text-muted">{pricing.intro.subtext}</p>
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <span
            id="billing-monthly-label"
            className={`text-sm font-medium ${isAnnual ? 'text-muted' : 'text-ink'}`}
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
              isAnnual ? 'bg-accent' : 'bg-ink/15'
            } ${focusRing}`}
          >
            <span
              aria-hidden="true"
              className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
                isAnnual ? 'translate-x-8' : 'translate-x-1'
              }`}
            />
          </button>

          <span
            id="billing-annual-label"
            className={`text-sm font-medium ${isAnnual ? 'text-ink' : 'text-muted'}`}
          >
            Annual <span className="text-emerald-600">(Save 20%)</span>
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
            <PricingTierCard key={tier.id} tier={tier} isAnnual={isAnnual} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Pricing
