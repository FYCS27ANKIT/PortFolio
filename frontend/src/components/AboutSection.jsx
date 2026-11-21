import { summary, contact } from '../data'
import ScrollReveal from './ScrollReveal'

export default function AboutSection() {
  return (
    <section className="section-card py-5" id="about">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-lg-7">
            <ScrollReveal>
              <p className="section-label">About</p>
              <h2 className="mb-3">Building web solutions that are secure, scalable, and easy to maintain.</h2>
              <p className="lead fs-6 text-light-subtle mb-4">{summary}</p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a
                  className="btn btn-primary d-inline-flex align-items-center gap-2"
                  href={contact.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-file-earmark-pdf-fill" />
                  View Resume
                </a>
                <a
                  className="btn btn-outline-info d-inline-flex align-items-center gap-2"
                  href={contact.resume}
                  download="Ankit_Pandey_Resume.pdf"
                >
                  <i className="bi bi-download" />
                  Download
                </a>
                <a
                  className="btn btn-outline-light d-inline-flex align-items-center gap-2"
                  href="#contact"
                >
                  <i className="bi bi-envelope" />
                  Contact me
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="col-lg-5">
            <ScrollReveal delay={0.15}>
              <div className="card card-custom mb-4">
                <div className="card-body p-4">
                  <h5 className="card-title text-info mb-3">
                    <i className="bi bi-person-lines-fill me-2" />Quick Facts
                  </h5>
                  {contact.phone && <p className="mb-2"><i className="bi bi-telephone text-info me-2" />{contact.phone}</p>}
                  <p className="mb-2"><i className="bi bi-envelope text-info me-2" />{contact.email}</p>
                  <p className="mb-0"><i className="bi bi-geo-alt text-info me-2" />{contact.location}</p>
                </div>
              </div>
              <div className="card card-custom">
                <div className="card-body p-4">
                  <h5 className="card-title text-info mb-3">
                    <i className="bi bi-cpu-fill me-2" />Technical Focus
                  </h5>
                  <p className="mb-0 text-light-subtle">
                    WordPress plugin development, REST APIs, MERN stack apps, PHP backend systems, and React interfaces.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
