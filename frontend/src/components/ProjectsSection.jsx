import { projects } from '../data'
import ScrollReveal from './ScrollReveal'
import TiltCard from './TiltCard'

export default function ProjectsSection() {
  return (
    <section className="section-card py-5" id="projects">
      <div className="container">
        <ScrollReveal>
          <div className="row mb-4">
            <div className="col">
              <p className="section-label">Projects</p>
              <h2>Selected work</h2>
            </div>
          </div>
        </ScrollReveal>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          {projects.map((project, idx) => (
            <div key={project.name} className="col">
              <ScrollReveal delay={idx * 0.12} className="h-100">
                <TiltCard className="h-100">
                  <article className="card card-custom h-100 project-card-interactive">
                    <div className="card-body d-flex flex-column gap-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="text-info text-uppercase fs-7 letter-spacing-1 fw-semibold">
                          <i className="bi bi-folder2 me-1" /> Project
                        </span>
                        <div className="project-card-arrow">
                          <i className="bi bi-arrow-up-right text-info" />
                        </div>
                      </div>
                      <h3 className="h5 mb-0 text-white project-card-title">{project.name}</h3>
                      <p className="mb-3 text-muted">{project.description}</p>
                      <div className="mt-auto d-flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="badge project-tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="d-flex flex-wrap gap-2 mt-3 pt-2 border-top border-secondary border-opacity-25">
                        {project.demo ? (
                          <a
                            href={project.demo}
                            className="btn btn-outline-info btn-sm project-action-btn"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bi bi-box-arrow-up-right me-1" /> Live Demo
                          </a>
                        ) : null}
                        {project.github ? (
                          <a
                            href={project.github}
                            className="btn btn-primary btn-sm project-action-btn"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bi bi-github me-1" /> Code
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
