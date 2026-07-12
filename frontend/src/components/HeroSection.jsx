import { summary, contact, heroImgSrc } from '../data'

export default function HeroSection() {
  return (
    <section className="hero-section py-5" id="home">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7">
            <p className="eyebrow">Hi, I’m Ankit Pandey</p>
            <h1>
              I build modern web apps with <span className="accent">MERN</span> and WordPress.
            </h1>
            <p className="hero-text">{summary}</p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a className="btn btn-primary btn-lg" href={contact.resume} download>
                Download Resume
              </a>
              <a
                className="btn btn-outline-light btn-lg"
                href="https://github.com/FYCS27ANKIT"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="social-icons d-flex gap-3 mt-4">
              <a href="https://github.com/FYCS27ANKIT" target="_blank" rel="noreferrer" className="text-light fs-4">
                <i className="bi bi-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/ankit-pandey-633533284/"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-4"
              >
                <i className="bi bi-linkedin" />
              </a>
              <a
                href="https://www.instagram.com/__ankitup44__/"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-4"
              >
                <i className="bi bi-instagram" />
              </a>
            </div>
          </div>

          <div className="col-lg-5 d-flex justify-content-center">
            <div className="hero-media w-100 text-center">
              <img
                src={heroImgSrc}
                alt="Ankit Pandey profile"
                className="hero-img img-fluid rounded-circle shadow-lg border border-white border-opacity-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
