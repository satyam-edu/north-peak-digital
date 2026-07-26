export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Digital product studio',
  headline: 'Websites that pull their weight.',
  subheadline:
    'North Peak Digital designs and builds fast, conversion-focused websites for brands that have outgrown their template.',
  ctaPrimary: { label: 'Start a project', href: '#contact' },
  ctaSecondary: { label: 'See our work', href: '#results' },
}

export const services = [
  {
    icon: 'LayoutTemplate',
    title: 'Web Design',
    description:
      'Custom interfaces built around how your customers actually browse and buy, not a recycled theme.',
  },
  {
    icon: 'Code2',
    title: 'Development',
    description:
      'Hand-written, semantic front-end code that stays fast and maintainable long after launch.',
  },
  {
    icon: 'ShoppingCart',
    title: 'E-commerce',
    description:
      'Shopify and headless storefronts tuned for checkout speed and cart conversion.',
  },
  {
    icon: 'Gauge',
    title: 'Performance',
    description:
      'Lighthouse-driven optimization: image pipelines, lazy loading, and script discipline.',
  },
  {
    icon: 'Search',
    title: 'SEO Foundations',
    description:
      'Technical SEO baked in from the first commit, not bolted on after launch.',
  },
  {
    icon: 'LineChart',
    title: 'Growth & CRO',
    description:
      'Ongoing experiments on layout, copy, and flow to move the metrics that matter.',
  },
]

export const results = [
  {
    quote:
      "North Peak rebuilt our storefront in three weeks and our mobile conversion rate hasn't dropped below the new baseline since.",
    name: 'Priya Nair',
    role: 'Founder',
    company: 'Solace Skincare',
    metric: '+38% mobile conversion',
  },
  {
    quote:
      'They asked harder questions about our funnel than our last two agencies combined, then shipped something that actually answered them.',
    name: 'Daniel Reyes',
    role: 'Head of Growth',
    company: 'Fieldnote',
    metric: '2.1x demo requests',
  },
  {
    quote:
      'Our old site took nine seconds to load on 4G. The rebuild loads in under two, and support tickets about "the site being broken" basically disappeared.',
    name: 'Amaka Obi',
    role: 'Operations Lead',
    company: 'Harborline Logistics',
    metric: '78% faster load time',
  },
]

export const pricingTiers = [
  {
    name: 'Launch',
    price: '$2,400',
    period: 'one-time',
    description: 'A focused one-page site for teams validating a new offer.',
    features: [
      'Single-page responsive build',
      'Copy and structure guidance',
      'Basic on-page SEO',
      '2 rounds of revisions',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$5,800',
    period: 'one-time',
    description: 'Our most common engagement: a full marketing site built to convert.',
    features: [
      'Up to 6 custom page templates',
      'CMS setup for your team',
      'Performance and accessibility pass',
      'Analytics and event tracking',
      '4 rounds of revisions',
    ],
    highlighted: true,
  },
  {
    name: 'Partner',
    price: 'Custom',
    period: 'monthly retainer',
    description: 'Ongoing design, development, and CRO for teams shipping often.',
    features: [
      'Everything in Growth',
      'Dedicated engineer and designer',
      'Monthly experiment roadmap',
      'Priority turnaround on requests',
    ],
    highlighted: false,
  },
]

export const contactInfo = {
  heading: "Tell us what's not working.",
  subheading:
    "Send a few details about your project and we'll reply within one business day.",
  email: 'hello@northpeakdigital.com',
  budgetOptions: [
    'Under $3,000',
    '$3,000 - $6,000',
    '$6,000 - $12,000',
    '$12,000+',
  ],
}

export const footerData = {
  brand: 'North Peak Digital',
  tagline: 'A small studio building fast, focused web experiences.',
  columns: [
    {
      heading: 'Studio',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Results', href: '#results' },
        { label: 'Pricing', href: '#pricing' },
      ],
    },
    {
      heading: 'Connect',
      links: [
        { label: 'Contact', href: '#contact' },
        { label: 'Instagram', href: '#' },
        { label: 'LinkedIn', href: '#' },
      ],
    },
  ],
  credit: {
    text: 'Built for Digital Heroes Training Task',
    href: 'https://digitalheroesco.com',
  },
}
