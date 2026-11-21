import { education } from '../data'
import ScrollReveal from './ScrollReveal'

export default function EducationSection() {
  return (
    <section className="section-card py-5" id="education">
      <div className="container">
        <ScrollReveal>
          <div className="row mb-4">
            <div className="col">
              <p className="section-label">Education</p>
              <h2>Academic background</h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="row g-4">
          {education.map((item, idx) => (
            <div key={item.degree} className="col-12 col-md-6">
              <ScrollReveal delay={idx * 0.15}>
                <div className="card card-custom timeline-card h-100 p-4">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <i className="bi bi-mortarboard-fill text-info fs-5" />
                    <h3 className="h5 mb-0 text-white">{item.degree}</h3>
                  </div>
                  <p className="mb-2 text-info fw-medium">{item.institution}</p>
                  <span className="badge timeline-date-badge align-self-start mb-3">
                    <i className="bi bi-calendar3 me-1" /> {item.date}
                  </span>
                  {item.details ? (
                    <div className="mt-auto pt-2 border-top border-secondary border-opacity-25">
                      <span className="badge bg-info-subtle text-info border border-info-subtle">
                        {item.details}
                      </span>
                    </div>
                  ) : null}
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
