import { contact, social } from '../data'

export default function ContactSection() {
  return (
    <section className="section-card py-5" id="contact">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="section-label">Contact</p>
            <h2>Let’s connect</h2>
            <p>Reach out to discuss a role, freelance project, or web development partner.</p>
            <a className="btn btn-primary" href={`mailto:${contact.email}`}>
              Email Ankit
            </a>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              {social.map((item) => (
                <div key={item.label} className="col-12">
                  <a className="btn btn-outline-light w-100 text-start" href={item.href}>
                    <span className="badge bg-info text-dark me-3">{item.short}</span>
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
