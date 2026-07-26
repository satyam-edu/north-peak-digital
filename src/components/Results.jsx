import { Quote } from 'lucide-react'
import { results } from '../data/agencyData'

function Results() {
  return (
    <section id="results" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Results, not just deliverables
          </h2>
          <p className="mt-4 text-slate-600">
            A few of the teams we've shipped for, in their own words.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {results.map((result) => (
            <figure
              key={result.name}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <Quote size={20} className="text-accent" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                "{result.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-ink">{result.name}</p>
                <p className="text-xs text-slate-500">
                  {result.role}, {result.company}
                </p>
                <p className="mt-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {result.metric}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results
