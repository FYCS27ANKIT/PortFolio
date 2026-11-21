import { summary, contact } from '../data'

export default function HeroSection() {
  return (
    <section className="hero-section py-5 d-flex align-items-center" id="home">
      <div className="container py-lg-4">
        <div className="row align-items-center">
          <div className="col-lg-10 col-xl-9">
            <p className="eyebrow mb-2">Hi, I’m Ankit Pandey</p>
            <h1 className="hero-title mb-3">
              I build modern web apps with <span className="accent">MERN</span> and WordPress.
            </h1>
            <p className="hero-text fs-5 mb-4">{summary}</p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a
                className="btn btn-primary btn-lg d-inline-flex align-items-center gap-2"
                href={contact.resume}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-file-earmark-pdf-fill" />
                View Resume
              </a>
              <a
                className="btn btn-outline-info btn-lg d-inline-flex align-items-center gap-2"
                href={contact.resume}
                download="Ankit_Pandey_Resume.pdf"
              >
                <i className="bi bi-download" />
                Download Resume
              </a>
              <a
                className="btn btn-outline-light btn-lg d-inline-flex align-items-center gap-2"
                href={contact.github || 'https://github.com/FYCS27ANKIT'}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github" />
                GitHub
              </a>
            </div>

            <div className="social-icons d-flex gap-3 mt-4">
              <a
                href={contact.github || 'https://github.com/FYCS27ANKIT'}
                target="_blank"
                rel="noreferrer"
                className="text-light fs-4"
                title="GitHub"
              >
                <i className="bi bi-github" />
              </a>
              <a
                href={contact.linkedin || 'https://www.linkedin.com/in/ankit-pandey-633533284/'}
                target="_blank"
                rel="noreferrer"
                className="text-light fs-4"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin" />
              </a>
              <a
                href={contact.instagram || 'https://www.instagram.com/__ankitup44__/'}
                target="_blank"
                rel="noreferrer"
                className="text-light fs-4"
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
