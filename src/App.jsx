import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import Results from './components/Results'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useLenis } from './hooks/useLenis'

function App() {
  useLenis()

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="relative z-20 -mt-10 overflow-hidden rounded-t-[36px] border-t border-ink/10 bg-paper shadow-2xl md:-mt-16">
          <TrustedBy />
        </div>
        <div className="relative z-20 bg-paper pt-4">
          <Services />
          <Results />
          <Pricing />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
