import { education } from '../data'

export default function EducationSection() {
  return (
    <section className="section-card py-5" id="education">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <p className="section-label">Education</p>
            <h2>Academic background</h2>
          </div>
        </div>
        <div className="row g-4">
          {education.map((item) => (
            <div key={item.degree} className="col-12 col-md-6">
              <div className="card card-custom bg-dark border-secondary h-100">
                <div className="card-body">
                  <h3 className="h5">{item.degree}</h3>
                  <p className="mb-1 text-muted">{item.institution}</p>
                  <span className="text-secondary">{item.date}</span>
                  {item.details ? <p className="mt-3 text-muted">{item.details}</p> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
