import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight, Activity } from 'lucide-react'
import { hero } from '../data/agencyData'
import { useScrollScrub3D } from '../hooks/useScrollScrub3D'
import { scrollToSection } from '../utils/scroll'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper'

const HIGHLIGHT_WORD = 'High-Performance'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, rotateX: 6 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const floatingPills = [
  { label: 'React + Vite', className: '-left-4 top-8', duration: 4, delay: 0, offset: -6 },
  { label: 'Tailwind CSS', className: '-right-3 top-1/2', duration: 5, delay: 0.5, offset: 6 },
]

function renderHighlightedHeadline(text) {
  const index = text.indexOf(HIGHLIGHT_WORD)
  if (index === -1) return text

  return (
    <>
      {text.slice(0, index)}
      <span className="italic text-accent">{HIGHLIGHT_WORD}</span>
      {text.slice(index + HIGHLIGHT_WORD.length)}
    </>
  )
}

function ProductEnginePreview() {
  return (
    <div
      className="rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_20px_60px_-25px_rgba(20,20,20,0.25)]"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-wider text-muted">
          Agency Product Engine
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Live
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-accent/[0.06] p-4">
          <p className="font-display text-2xl text-ink">99.8%</p>
          <p className="mt-1 text-xs font-medium text-muted">Speed Score</p>
        </div>
        <div className="rounded-xl border border-ink/10 p-4">
          <p className="font-display text-2xl text-ink">42ms</p>
          <p className="mt-1 text-xs font-medium text-accent">TTFB</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-xl border border-ink/10 p-4">
        <div>
          <p className="text-sm font-semibold text-ink">Lighthouse Score</p>
          <p className="text-xs text-muted">Performance · Accessibility · SEO</p>
        </div>
        <span className="rounded-full bg-ink px-3 py-1.5 text-sm font-medium text-paper">
          100/100
        </span>
      </div>

      {floatingPills.map((pill) => (
        <motion.span
          key={pill.label}
          animate={{ y: [0, pill.offset, 0] }}
          transition={{ duration: pill.duration, delay: pill.delay, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-medium text-ink shadow-sm ${pill.className}`}
        >
          {pill.label}
        </motion.span>
      ))}
    </div>
  )
}

function Hero() {
  const pin = useScrollScrub3D({
    offset: ['start start', 'end start'],
    rotateRange: [0, -3],
    yRange: [0, -50],
    scaleRange: [1, 0.95],
    opacityRange: [1, 0.65],
  })

  const shapeA = useScrollScrub3D({
    offset: ['start end', 'end start'],
    yRange: [30, -30],
  })

  const shapeB = useScrollScrub3D({
    offset: ['start end', 'end start'],
    yRange: [-60, 60],
  })

  return (
    <section
      ref={pin.ref}
      aria-labelledby="hero-heading"
      className="relative z-10 overflow-hidden bg-paper md:min-h-[130vh]"
    >
      <div
        ref={shapeA.ref}
        aria-hidden="true"
        style={shapeA.style}
        className="absolute left-[6%] top-[18%] hidden h-24 w-24 rounded-full border border-ink/10 md:block"
      />
      <div
        ref={shapeB.ref}
        aria-hidden="true"
        style={shapeB.style}
        className="absolute right-[8%] top-[58%] hidden h-36 w-36 rounded-full border border-accent/20 md:block"
      />

      <div className="relative px-4 pb-16 pt-24 sm:px-6 md:sticky md:top-20 md:pb-24 md:pt-0 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="text-center md:text-left"
          >
            <motion.span
              variants={itemVariants}
              style={{ transformPerspective: 800 }}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent"
            >
              <Activity size={14} aria-hidden="true" />
              {hero.badge}
            </motion.span>

            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              style={{ transformPerspective: 800 }}
              className="mt-6 font-display text-4xl leading-[1.1] tracking-tight text-ink md:text-6xl"
            >
              {renderHighlightedHeadline(hero.headline)}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              style={{ transformPerspective: 800 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-muted md:mx-0"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              style={{ transformPerspective: 800 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start"
            >
              <a
                href={hero.ctaPrimary.href}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection('services')
                }}
                aria-label={`${hero.ctaPrimary.label} — jump to services section`}
                className={`group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent ${focusRing}`}
              >
                {hero.ctaPrimary.label}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href={hero.ctaSecondary.href}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection('contact')
                }}
                aria-label={`${hero.ctaSecondary.label} — jump to contact form`}
                className={`group inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink ${focusRing}`}
              >
                {hero.ctaSecondary.label}
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </motion.div>

            <motion.dl
              variants={itemVariants}
              style={{ transformPerspective: 800 }}
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 divide-y divide-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:mx-0"
            >
              {hero.stats.map((stat) => (
                <div key={stat.label} className="px-0 py-3 first:pt-0 sm:px-6 sm:py-0 sm:first:pl-0">
                  <dd className="font-display text-2xl text-ink sm:text-3xl">{stat.value}</dd>
                  <dt className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <div className="hidden md:block">
            <motion.div style={pin.style}>
              <ProductEnginePreview />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
