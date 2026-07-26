import { Check } from 'lucide-react'
import { pricingTiers } from '../data/agencyData'

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Simple, honest pricing
        </h2>
        <p className="mt-4 text-slate-600">
          Pick the scope that matches where you are. Every tier ends with a site you own.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-2xl border p-8 ${
              tier.highlighted
                ? 'border-ink bg-ink text-white shadow-lg'
                : 'border-slate-200 bg-white text-ink'
            }`}
          >
            <h3 className="text-lg font-semibold">{tier.name}</h3>
            <p
              className={`mt-2 text-sm ${
                tier.highlighted ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {tier.description}
            </p>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-3xl font-semibold">{tier.price}</span>
              <span
                className={`text-sm ${
                  tier.highlighted ? 'text-slate-300' : 'text-slate-500'
                }`}
              >
                {tier.period}
              </span>
            </div>

            <ul className="mt-6 flex-1 space-y-3 text-sm">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check
                    size={16}
                    className={`mt-0.5 shrink-0 ${
                      tier.highlighted ? 'text-white' : 'text-accent'
                    }`}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-medium transition-colors ${
                tier.highlighted
                  ? 'bg-white text-ink hover:bg-slate-100'
                  : 'bg-ink text-white hover:bg-accent'
              }`}
            >
              Get started
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
