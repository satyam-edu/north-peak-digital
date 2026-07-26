import Navbar from './components/Navbar'
import Hero from './components/Hero'
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
        <Services />
        <Results />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
