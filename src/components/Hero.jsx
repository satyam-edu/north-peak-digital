import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { hero } from '../data/agencyData'

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 text-center md:pt-24">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm font-semibold uppercase tracking-wide text-accent"
      >
        {hero.eyebrow}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink md:text-6xl"
      >
        {hero.headline}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-6 max-w-xl text-lg text-slate-600"
      >
        {hero.subheadline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <a
          href={hero.ctaPrimary.href}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
        >
          {hero.ctaPrimary.label}
          <ArrowRight size={16} />
        </a>
        <a
          href={hero.ctaSecondary.href}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          {hero.ctaSecondary.label}
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
