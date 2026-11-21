import { useEffect, useState } from 'react'
import './App.css'
import { contact } from './data'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const current = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0
      setScrollProgress(current)
      setIsScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="portfolio-app">
      {/* Top Luminous Scroll Progress Indicator */}
      <div
        className="scroll-progress-line"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header className={`site-header navbar navbar-expand-lg navbar-dark py-3 ${isScrolled ? 'is-scrolled' : ''}`}>
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
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a
                className="btn btn-outline-info btn-sm nav-resume-btn d-inline-flex align-items-center gap-1 px-3 py-1"
                href={contact.resume}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                <i className="bi bi-file-earmark-pdf" />
                <span>View Resume</span>
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
          <p className="mb-0 text-muted small">
            Designed for clear technical storytelling and direct contact.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
