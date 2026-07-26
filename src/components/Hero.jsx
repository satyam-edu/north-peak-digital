import { motion } from 'motion/react'
import { ArrowRight, Phone } from 'lucide-react'
import { hero } from '../data/agencyData'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
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

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-glow-radial bg-slate-900 px-6 pb-24 pt-20 text-center md:pt-28"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="mx-auto max-w-4xl"
      >
        <motion.span
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-1.5 text-sm font-medium text-slate-300"
        >
          {hero.badge}
        </motion.span>

        <motion.h1
          id="hero-heading"
          variants={itemVariants}
          className="mt-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text font-display text-4xl font-semibold tracking-tight text-transparent md:text-6xl"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href={hero.ctaPrimary.href}
            onClick={(event) => {
              event.preventDefault()
              scrollToSection('services')
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`${hero.ctaPrimary.label} — jump to services section`}
            className={`inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 ${focusRing}`}
          >
            {hero.ctaPrimary.label}
            <ArrowRight size={16} aria-hidden="true" />
          </motion.a>
          <motion.a
            href={hero.ctaSecondary.href}
            onClick={(event) => {
              event.preventDefault()
              scrollToSection('contact')
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`${hero.ctaSecondary.label} — jump to contact form`}
            className={`inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-slate-500 ${focusRing}`}
          >
            <Phone size={16} aria-hidden="true" />
            {hero.ctaSecondary.label}
          </motion.a>
        </motion.div>

        <motion.dl
          variants={itemVariants}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 border-t border-slate-800 pt-10 sm:grid-cols-3"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-3xl font-semibold text-white sm:text-4xl">{stat.value}</dd>
              <dt className="mt-1 text-sm text-slate-400">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  )
}

export default Hero
