import { experiences } from '../data'

export default function ExperienceSection() {
  return (
    <section className="section-card py-5" id="work">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <p className="section-label">Experience</p>
            <h2>Professional experience</h2>
          </div>
        </div>
        <div className="row g-4">
          {experiences.map((item) => (
            <div key={item.role} className="col-12">
              <div className="card card-custom bg-dark border-secondary h-100">
                <div className="card-body">
                  <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-2">
                    <div>
                      <h3 className="h5 mb-1">{item.role}</h3>
                      <p className="mb-0 text-muted">{item.company}</p>
                    </div>
                    <span className="text-secondary">{item.date}</span>
                  </div>
                  <ul className="mb-0 ps-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
