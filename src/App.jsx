import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import Hero from './sections/Hero'
import Dashboard from './sections/Dashboard'
import About from './sections/About'
import TechStack from './sections/TechStack'
import Projects from './sections/Projects'
import Journey from './sections/Journey'
import BuildLog from './sections/BuildLog'
import Terminal from './sections/Terminal'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Navbar />
      <main className="flex-1 pt-16 md:pt-18">
        <Hero />
        <div className="section-divider" />
        <Dashboard />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <TechStack />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Journey />
        <div className="section-divider" />
        <BuildLog />
        <div className="section-divider" />
        <Terminal />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
