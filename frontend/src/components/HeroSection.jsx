import { summary, contact } from '../data'
import ParticleCanvas from './ParticleCanvas'
import TextFlipper from './TextFlipper'

export default function HeroSection() {
  return (
    <section className="hero-section py-5 d-flex align-items-center position-relative overflow-hidden" id="home">
      {/* Interactive Constellation Particle Canvas */}
      <ParticleCanvas />

      <div className="container py-lg-5 position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">
          <div className="col-lg-10 col-xl-9">
            {/* Glowing Holographic Eyebrow */}
            <div className="hero-badge-wrapper mb-3 d-inline-block">
              <span className="hero-eyebrow-pill d-inline-flex align-items-center gap-2">
                <span className="hero-pulse-ring" />
                <span>Available for Opportunities</span>
              </span>
            </div>

            <h1 className="hero-title mb-4">
              I build modern web apps with{' '}
              <TextFlipper words={['MERN Stack', 'WordPress Plugins', 'REST APIs', 'Full-Stack Apps']} />
            </h1>

            <p className="hero-text fs-5 mb-4 text-light-subtle">
              {summary}
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4 hero-cta-group">
              <a
                className="btn btn-primary btn-lg hero-btn-glow d-inline-flex align-items-center gap-2"
                href={contact.resume}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-file-earmark-pdf-fill" />
                <span>View Resume</span>
              </a>
              <a
                className="btn btn-outline-info btn-lg hero-btn-outline d-inline-flex align-items-center gap-2"
                href={contact.resume}
                download="Ankit_Pandey_Resume.pdf"
              >
                <i className="bi bi-download" />
                <span>Download Resume</span>
              </a>
              <a
                className="btn btn-outline-light btn-lg hero-btn-outline d-inline-flex align-items-center gap-2"
                href={contact.github || 'https://github.com/FYCS27ANKIT'}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github" />
                <span>GitHub</span>
              </a>
            </div>

            <div className="social-icons d-flex gap-3 mt-4 pt-2">
              <a
                href={contact.github || 'https://github.com/FYCS27ANKIT'}
                target="_blank"
                rel="noreferrer"
                className="social-icon-box"
                title="GitHub"
              >
                <i className="bi bi-github" />
              </a>
              <a
                href={contact.linkedin || 'https://www.linkedin.com/in/ankit-pandey-633533284/'}
                target="_blank"
                rel="noreferrer"
                className="social-icon-box"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin" />
              </a>
              <a
                href={contact.instagram || 'https://www.instagram.com/__ankitup44__/'}
                target="_blank"
                rel="noreferrer"
                className="social-icon-box"
                title="Instagram"
              >
                <i className="bi bi-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
