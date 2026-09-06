import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-abyss text-ink">
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
