import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useLenis } from './hooks/useLenis'

// Below-the-fold sections are code-split into their own chunks so the
// critical path (Navbar + Hero) doesn't have to wait on their JS to parse.
const TrustedBy = lazy(() => import('./components/TrustedBy'))
const Services = lazy(() => import('./components/Services'))
const Results = lazy(() => import('./components/Results'))
const Pricing = lazy(() => import('./components/Pricing'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  useLenis()

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <div className="relative z-20 -mt-10 overflow-hidden rounded-t-[36px] border-t border-ink/10 bg-paper shadow-2xl md:-mt-16">
            <TrustedBy />
          </div>
          <div className="relative z-20 bg-paper pt-4">
            <Services />
            <Results />
            <Pricing />
            <Contact />
          </div>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
