import { motion } from 'motion/react'
import { Quote, Star, BadgeCheck } from 'lucide-react'
import { resultsIntro, results } from '../data/agencyData'

const headerVariants = {
  hidden: { opacity: 0, y: 20, rotateX: 6 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const metricVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
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

function StarRating({ rating, name }) {
  return (
    <div
      role="img"
      aria-label={`${rating} out of 5 stars`}
      className="flex items-center gap-1"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={`${name}-star-${index}`}
          size={16}
          aria-hidden="true"
          className={index < rating ? 'fill-accent text-accent' : 'text-ink/15'}
        />
      ))}
    </div>
  )
}

function Results() {
  return (
    <section id="results" className="relative z-10 bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={headerVariants}
          style={{ transformPerspective: 800 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
            <span aria-hidden="true">02</span>
            {resultsIntro.badge}
          </span>
          <h2 className="mt-6 font-display text-3xl text-ink md:text-4xl">
            {resultsIntro.headline}
          </h2>
          <p className="mt-4 text-muted">{resultsIntro.supporting}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={metricVariants}
          className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-8 rounded-3xl bg-ink px-6 py-10 text-paper sm:grid-cols-3 sm:divide-x sm:divide-paper/15"
        >
          {results.map((result) => (
            <div key={result.id} className="text-center sm:px-6">
              <p className="font-display text-3xl md:text-4xl">
                {result.metric}
              </p>
              <p className="mt-2 text-sm text-paper/60">{result.company}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={gridVariants}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {results.map((result) => (
            <motion.article
              key={result.id}
              variants={cardVariants}
              style={{ transformPerspective: 800 }}
              className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <Quote size={20} className="text-accent" aria-hidden="true" />
                <StarRating rating={result.rating} name={result.name} />
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">
                "{result.quote}"
              </p>

              <div className="mt-6 border-t border-ink/10 pt-4">
                <p className="text-sm font-semibold text-ink">{result.name}</p>
                <p className="text-xs text-muted">
                  {result.role}, {result.company}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  <BadgeCheck size={14} aria-hidden="true" />
                  Verified Client
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Results
