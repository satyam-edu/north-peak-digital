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

export const pricing = {
  intro: {
    badge: 'Flexible Plans',
    headline: 'Transparent Pricing Built for Scale',
    subtext:
      'Every plan includes a site you fully own — pick the level of ongoing engineering your growth stage needs.',
  },
  tiers: [
    {
      id: 'launch-sprint',
      name: 'Launch Sprint',
      target: 'Startups / MVPs',
      tagline: 'Everything you need to launch a credible site fast.',
      monthly: 2900,
      annual: 2320,
      isPopular: false,
      isCustom: false,
      cta: 'Start Building',
      features: [
        { label: 'Custom responsive design', included: true },
        { label: 'CMS / content management setup', included: true },
        { label: 'Performance & Core Web Vitals optimization', included: true },
        { label: 'API & backend integration', included: false },
        { label: 'Monthly growth & CRO experiments', included: false },
        { label: 'Dedicated engineer + priority support', included: false },
      ],
    },
    {
      id: 'growth-partner',
      name: 'Growth Partner',
      target: 'Scaling Products',
      tagline: 'Our most popular plan for products ready to compound growth.',
      monthly: 5800,
      annual: 4640,
      isPopular: true,
      isCustom: false,
      cta: 'Get Started',
      features: [
        { label: 'Custom responsive design', included: true },
        { label: 'CMS / content management setup', included: true },
        { label: 'Performance & Core Web Vitals optimization', included: true },
        { label: 'API & backend integration', included: true },
        { label: 'Monthly growth & CRO experiments', included: true },
        { label: 'Dedicated engineer + priority support', included: false },
      ],
    },
    {
      id: 'enterprise-architecture',
      name: 'Enterprise Architecture',
      target: 'High-volume Systems',
      tagline: 'Dedicated infrastructure and support for high-volume systems.',
      monthly: 11500,
      annual: 9200,
      isPopular: false,
      isCustom: true,
      cta: 'Talk to Sales',
      features: [
        { label: 'Custom responsive design', included: true },
        { label: 'CMS / content management setup', included: true },
        { label: 'Performance & Core Web Vitals optimization', included: true },
        { label: 'API & backend integration', included: true },
        { label: 'Monthly growth & CRO experiments', included: true },
        { label: 'Dedicated engineer + priority support', included: true },
      ],
    },
  ],
}

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
