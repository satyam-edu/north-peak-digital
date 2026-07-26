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
import { use3DTilt } from '../hooks/use3DTilt'

const icons = {
  AppWindow,
  PenTool,
  Gauge,
  Server,
  ShoppingCart,
  TrendingUp,
}

const iconTileColors = {
  yellow: 'bg-accent/10 text-accent',
  blue: 'bg-ink/5 text-ink',
}

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

function ServiceCard({ service, index }) {
  const tilt = use3DTilt()
  const Icon = icons[service.icon]

  return (
    <motion.article
      ref={tilt.ref}
      variants={cardVariants}
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl border border-ink/10 bg-paper p-6 transition-colors duration-300 hover:border-ink/25"
    >
      <div className="flex items-start justify-between">
        <div className={`inline-flex rounded-xl p-3 ${iconTileColors[service.color]}`}>
          <Icon size={22} strokeWidth={2} aria-hidden="true" />
        </div>
        <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
      </div>

      <h3 className="mt-5 font-display text-lg text-ink">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {service.description}
      </p>

      <ul className="mt-5 space-y-2 border-t border-ink/10 pt-5">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-ink/80"
          >
            <Check
              size={16}
              className="mt-0.5 shrink-0 text-accent"
              strokeWidth={2.5}
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

function Services() {
  return (
    <section id="services" className="relative z-10 bg-white py-16 md:py-24">
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
            <span aria-hidden="true">01</span>
            {servicesIntro.badge}
          </span>
          <h2 className="mt-6 font-display text-3xl text-ink md:text-4xl">
            {servicesIntro.headline}
          </h2>
          <p className="mt-4 text-muted">{servicesIntro.supporting}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={gridVariants}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
