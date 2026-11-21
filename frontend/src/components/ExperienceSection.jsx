import { experiences } from '../data'
import ScrollReveal from './ScrollReveal'

export default function ExperienceSection() {
  return (
    <section className="section-card py-5" id="work">
      <div className="container">
        <ScrollReveal>
          <div className="row mb-4">
            <div className="col">
              <p className="section-label">Experience</p>
              <h2>Professional experience</h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="timeline-wrapper position-relative">
          <div className="row g-4">
            {experiences.map((item, idx) => (
              <div key={item.role} className="col-12">
                <ScrollReveal delay={idx * 0.15}>
                  <div className="card card-custom timeline-card h-100">
                    <div className="card-body p-4">
                      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-3">
                        <div>
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <span className="timeline-node-dot" />
                            <h3 className="h5 mb-0 text-white">{item.role}</h3>
                          </div>
                          <p className="mb-0 text-info fw-medium">{item.company}</p>
                        </div>
                        <span className="badge timeline-date-badge px-3 py-2">
                          <i className="bi bi-calendar3 me-1" /> {item.date}
                        </span>
                      </div>
                      <ul className="timeline-bullets mb-0 ps-3">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="mb-2 text-light-subtle">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
