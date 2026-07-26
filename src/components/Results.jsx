import { Quote, Star, BadgeCheck } from 'lucide-react'
import { resultsIntro, results } from '../data/agencyData'

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
          className={index < rating ? 'fill-amber-400 text-amber-400' : 'text-slate-700'}
        />
      ))}
    </div>
  )
}

function Results() {
  return (
    <section id="results" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-1.5 text-sm font-medium text-slate-300">
            {resultsIntro.badge}
          </span>
          <h2 className="mt-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
            {resultsIntro.headline}
          </h2>
          <p className="mt-4 text-slate-300">{resultsIntro.supporting}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-8 rounded-2xl border border-slate-800 bg-slate-900/40 px-6 py-10 sm:grid-cols-3 sm:divide-x sm:divide-slate-800">
          {results.map((result) => (
            <div key={result.id} className="text-center sm:px-6">
              <p className="text-3xl font-semibold text-white md:text-4xl">
                {result.metric}
              </p>
              <p className="mt-2 text-sm text-slate-300">{result.company}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {results.map((result) => (
            <article
              key={result.id}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-blue-500/40"
            >
              <div className="flex items-center justify-between">
                <Quote size={20} className="text-blue-400" aria-hidden="true" />
                <StarRating rating={result.rating} name={result.name} />
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                "{result.quote}"
              </p>

              <div className="mt-6 border-t border-slate-800 pt-4">
                <p className="text-sm font-semibold text-white">{result.name}</p>
                <p className="text-xs text-slate-400">
                  {result.role}, {result.company}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  <BadgeCheck size={14} aria-hidden="true" />
                  Verified Client
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results
