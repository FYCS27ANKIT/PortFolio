import { summary, contact } from '../data'

export default function AboutSection() {
  return (
    <section className="section-card py-5" id="about">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-lg-7">
            <p className="section-label">About</p>
            <h2 className="mb-3">Building web solutions that are secure, scalable, and easy to maintain.</h2>
            <p>{summary}</p>
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
          </div>

          <div className="col-lg-5">
            <div className="card card-custom mb-4">
              <div className="card-body">
                <h5 className="card-title">Contact</h5>
                <p className="mb-1">{contact.phone}</p>
                <p className="mb-1">{contact.email}</p>
                <p className="mb-0">{contact.location}</p>
              </div>
            </div>
            <div className="card card-custom">
              <div className="card-body">
                <h5 className="card-title">Technical focus</h5>
                <p className="mb-0">
                  WordPress plugin development, REST APIs, MERN stack apps, PHP backend systems, and React
                  interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
