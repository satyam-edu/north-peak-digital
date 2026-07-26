# North Peak Digital

A marketing site for **North Peak Digital**, a fictional web design & development studio, built as the Web Development submission for the Digital Heroes internship task.

## Tech stack

- **React 19** + **Vite** — component architecture and dev/build tooling
- **Tailwind CSS** — utility-first styling
- **Motion** (`motion/react`) — scroll-linked reveals, entrance animations, and micro-interactions
- **Lenis** — smooth/inertia scrolling
- **Lucide React** — icon set
- **Oxlint** — linting

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL (defaults to `http://localhost:5173`).

### Other scripts

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint     # run oxlint against src/
```

## Project structure

```
src/
  components/   # Navbar, Hero, TrustedBy, Services, Results, Pricing, Contact, Footer
  data/          # agencyData.js — all site copy and content, in one place
  hooks/         # useLenis, use3DTilt, useScrollScrub3D
  utils/         # scroll.js — Lenis-aware scroll-to-section helper
```

## Features

- Responsive hero with a rotating headline word, scroll-linked parallax accents, and a live "trusted by" logo marquee
- Services grid (6 offerings), results/testimonials section, and a 3-tier pricing table with a monthly/annual billing toggle
- Contact form with client-side validation (name, email, budget, message) and a submit state machine (idle → submitting → success)
- Scroll-entrance animations throughout, all respecting `prefers-reduced-motion`
- Footer credit line linking back to the Digital Heroes training task, as required by the assignment brief

## Notes

All content in `src/data/agencyData.js` (company name, services, testimonials, pricing, contact details) is placeholder copy written for this assignment — North Peak Digital is not a real company.
