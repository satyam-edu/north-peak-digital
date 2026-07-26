import { trustedBy } from '../data/agencyData'

const marqueeItems = [...trustedBy, ...trustedBy]

function TrustedBy() {
  return (
    <div className="pb-10 pt-12">
      <p className="text-center font-mono text-xs uppercase tracking-wider text-muted">
        Trusted by growing teams
      </p>
      <p className="sr-only">Trusted by {trustedBy.join(', ')}</p>

      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div aria-hidden="true" className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {marqueeItems.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="font-display text-xl italic text-ink/40"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustedBy
