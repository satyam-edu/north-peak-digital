# Optimization Changelog — Task B

## Starting point
- Mobile Performance: 84
- Desktop Performance: 98
- Accessibility: _pending — add your score here_

## Changes made

1. **Trimmed Google Fonts to only the weights actually in use.**
   Audited every `font-display` (Fraunces), `font-mono` (JetBrains Mono), and weight utility (`font-medium`, `font-semibold`, etc.) across every component before touching the font request.
   - Before: 10 font files (Fraunces 400/500/600 + 500 italic, Inter 400/500/600/700, JetBrains Mono 400/500)
   - After: 6 font files (Fraunces 400 + 500 italic, Inter 400/500/600, JetBrains Mono 400)
   - Bought: fewer render-blocking font requests before first paint.

2. **Code-split below-the-fold sections with `React.lazy` + `Suspense`.**
   `TrustedBy`, `Services`, `Results`, `Pricing`, `Contact`, and `Footer` now ship in their own chunks instead of one bundle with the critical path (`Navbar` + `Hero`).
   - Before: single 386KB JS bundle
   - After: main entry chunk 349.6KB, remainder split into ~9 small chunks (largest is 8.85KB)
   - Bought: less JS to parse/execute before the above-the-fold content can render.

3. **Self-hosted fonts via `@fontsource` instead of the Google Fonts CDN.**
   - Before: HTML → `fonts.googleapis.com` (CSS) → `fonts.gstatic.com` (font files) — a cross-origin request chain
   - After: font files ship from the same origin as everything else, latin-subset-only to avoid bundling unused unicode ranges
   - Bought: removes an external DNS/TLS handshake and a critical-request-chain penalty.

## Result
- Mobile Performance: 84 → 86 (measured before change #3; re-test pending on the live deployment)
- Desktop Performance: 98 (unaffected — desktop wasn't the bottleneck)
- Live URL: https://north-peak-digital-beige.vercel.app/
