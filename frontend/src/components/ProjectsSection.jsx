import { projects } from '../data'

export default function ProjectsSection() {
  return (
    <section className="section-card py-5" id="projects">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <p className="section-label">Projects</p>
            <h2>Selected work</h2>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          {projects.map((project) => (
            <div key={project.name} className="col">
              <article className="card card-custom h-100 bg-dark border-secondary">
                <div className="card-body d-flex flex-column gap-3">
                  <span className="text-info text-uppercase fs-7 letter-spacing-1">Project</span>
                  <h3 className="h5 mb-0">{project.name}</h3>
                  <p className="mb-3 text-muted">{project.description}</p>
                  <div className="mt-auto d-flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge bg-secondary text-light">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {project.demo ? (
                      <a
                        href={project.demo}
                        className="btn btn-outline-light btn-sm project-demo-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    ) : null}
                    {project.github ? (
                      <a
                        href={project.github}
                        className="btn btn-primary btn-sm project-github-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
