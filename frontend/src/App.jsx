import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="portfolio-app">
      <header className="site-header navbar navbar-expand-lg navbar-dark bg-transparent py-3">
        <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap">
          <a className="navbar-brand d-flex align-items-center gap-3 mb-0" href="#home">
            <span className="brand-mark">AP</span>
            <div>
              <p className="brand-name mb-0">Ankit Pandey</p>
              <p className="brand-role mb-0">Software Developer</p>
            </div>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work" onClick={() => setMenuOpen(false)}>
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills" onClick={() => setMenuOpen(false)}>
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education" onClick={() => setMenuOpen(false)}>
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <footer className="site-footer text-center py-4">
        <div className="container">
          <p className="mb-0">Designed for clear technical storytelling and direct contact.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

