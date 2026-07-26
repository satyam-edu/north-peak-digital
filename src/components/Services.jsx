import { motion } from 'motion/react'
import {
  AppWindow,
  PenTool,
  Gauge,
  Server,
  ShoppingCart,
  TrendingUp,
  Check,
} from 'lucide-react'
import { servicesIntro, services } from '../data/agencyData'

const icons = {
  AppWindow,
  PenTool,
  Gauge,
  Server,
  ShoppingCart,
  TrendingUp,
}

const iconColors = {
  blue: 'bg-blue-500/10 text-blue-400',
  violet: 'bg-violet-500/10 text-violet-400',
  emerald: 'bg-emerald-500/10 text-emerald-400',
  amber: 'bg-amber-500/10 text-amber-400',
  cyan: 'bg-cyan-500/10 text-cyan-400',
  rose: 'bg-rose-500/10 text-rose-400',
}

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

function Services() {
  return (
    <section id="services" className="bg-glow-radial bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={headerVariants}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-1.5 text-sm font-medium text-slate-300">
            {servicesIntro.badge}
          </span>
          <h2 className="mt-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text font-display text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
            {servicesIntro.headline}
          </h2>
          <p className="mt-4 text-slate-300">{servicesIntro.supporting}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={gridVariants}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                className="rounded-2xl border border-slate-700/60 bg-slate-800/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div
                  className={`inline-flex rounded-xl p-3 ${iconColors[service.color]}`}
                >
                  <Icon size={22} strokeWidth={2} aria-hidden="true" />
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-slate-700/60 pt-5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-blue-400"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
