export const company = {
  name: 'North Peak Digital',
}

export const navLinks = [
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'results', label: 'Results', href: '#results' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const hero = {
  badge: '⚡ Leading Digital Product Agency',
  headline: 'Engineering High-Performance Digital Experiences',
  subheadline:
    'North Peak Digital designs and engineers fast, conversion-focused websites and web apps for ambitious brands — built to hold up under real traffic, not just in a demo.',
  ctaPrimary: { label: 'Explore Our Services', href: '#services' },
  ctaSecondary: { label: 'Book a Call', href: '#contact' },
  stats: [
    { value: '150+', label: 'Projects Shipped' },
    { value: '3.2x', label: 'Avg. Conversion Boost' },
    { value: '99.9%', label: 'Uptime' },
  ],
}

export const servicesIntro = {
  badge: 'What We Build',
  headline: 'End-to-End Digital Engineering',
  supporting:
    'From the first wireframe to the backend that keeps up under load, every layer is built in-house.',
}

export const services = [
  {
    id: 'web-apps',
    icon: 'AppWindow',
    color: 'blue',
    title: 'Custom Web Application Development',
    description:
      'Fast, scalable web applications built on modern frameworks with architecture that stays maintainable as you grow.',
    features: [
      'React & Next.js builds',
      'Scalable component architecture',
      'Cross-browser QA testing',
    ],
  },
  {
    id: 'ui-ux',
    icon: 'PenTool',
    color: 'violet',
    title: 'UI/UX Interface & Product Design',
    description:
      'Interfaces designed around how people actually use your product — validated with research, not just taste.',
    features: [
      'User research & wireframing',
      'High-fidelity Figma prototypes',
      'Design systems & component libraries',
    ],
  },
  {
    id: 'performance',
    icon: 'Gauge',
    color: 'emerald',
    title: 'Performance & Speed Optimization',
    description:
      'Every millisecond counts. We tune load times and Core Web Vitals until they hold up under real traffic.',
    features: [
      'Core Web Vitals tuning',
      'Image & asset pipeline optimization',
      'Lighthouse audits & fixes',
    ],
  },
  {
    id: 'backend',
    icon: 'Server',
    color: 'amber',
    title: 'API & Backend Systems Architecture',
    description:
      'Robust APIs and backend systems designed to scale with your product instead of holding it back.',
    features: [
      'RESTful & GraphQL API design',
      'Database schema architecture',
      'Authentication & authorization',
    ],
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    color: 'cyan',
    title: 'E-Commerce Platforms & Shopify',
    description:
      'Custom Shopify builds and headless storefronts tuned for checkout speed and cart conversion.',
    features: [
      'Custom Shopify theme development',
      'Checkout & cart optimization',
      'Payment gateway integrations',
    ],
  },
  {
    id: 'seo-growth',
    icon: 'TrendingUp',
    color: 'rose',
    title: 'Technical SEO & Growth Engineering',
    description:
      'Technical SEO foundations and growth experiments that compound instead of resetting every quarter.',
    features: [
      'On-page & technical SEO audits',
      'Structured data & schema markup',
      'Conversion rate experimentation',
    ],
  },
]

export const resultsIntro = {
  badge: 'Proven Impact',
  headline: 'Real Results for Growing Brands',
  supporting:
    'Three teams who came to us with a slow, underperforming site — and left with a growth channel.',
}

export const results = [
  {
    id: 'solace-skincare',
    metric: '+240% Revenue Growth',
    name: 'Priya Nair',
    role: 'Founder',
    company: 'Solace Skincare',
    rating: 5,
    quote:
      "North Peak rebuilt our storefront in three weeks and our mobile conversion rate hasn't dropped below the new baseline since.",
  },
  {
    id: 'fieldnote',
    metric: '3.5x Faster Load Times',
    name: 'Daniel Reyes',
    role: 'Head of Growth',
    company: 'Fieldnote',
    rating: 5,
    quote:
      'They asked harder questions about our funnel than our last two agencies combined, then shipped something that actually answered them.',
  },
  {
    id: 'harborline',
    metric: '+180% Qualified Leads',
    name: 'Amaka Obi',
    role: 'Operations Lead',
    company: 'Harborline Logistics',
    rating: 5,
    quote:
      'Our old site took nine seconds to load on 4G. The rebuild loads in under two, and support tickets about "the site being broken" basically disappeared.',
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
