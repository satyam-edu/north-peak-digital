import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Results from './components/Results'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
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
