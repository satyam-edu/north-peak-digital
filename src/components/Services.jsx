import {
  LayoutTemplate,
  Code2,
  ShoppingCart,
  Gauge,
  Search,
  LineChart,
} from 'lucide-react'
import { services } from '../data/agencyData'

const icons = {
  LayoutTemplate,
  Code2,
  ShoppingCart,
  Gauge,
  Search,
  LineChart,
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          What we do
        </h2>
        <p className="mt-4 text-slate-600">
          Six services, one goal: a site that earns its place in your growth stack.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = icons[service.icon]
          return (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
            >
              <div className="inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                <Icon size={22} strokeWidth={2} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
