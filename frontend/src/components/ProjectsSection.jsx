import { useState } from 'react'
import { projects } from '../data'
import ScrollReveal from './ScrollReveal'

export default function ProjectsSection() {
  const [expandedCards, setExpandedCards] = useState({})

  const toggleCard = (name) => {
    setExpandedCards((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  return (
    <section className="section-card py-5" id="projects">
      <div className="container">
        <ScrollReveal>
          <div className="row mb-4">
            <div className="col">
              <p className="section-label">Projects</p>
              <h2>Selected work & engineering</h2>
              <p className="text-muted small mb-0">
                Hover over any project card to reveal key technical highlights and architectural details.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {projects.map((project, idx) => {
            const isExpanded = !!expandedCards[project.name]

            return (
              <div key={project.name} className="col">
                <ScrollReveal delay={idx * 0.12} className="h-100">
                  <article
                    className={`card card-custom h-100 project-card-interactive ${isExpanded ? 'is-expanded' : ''}`}
                    onClick={() => toggleCard(project.name)}
                  >
                      {/* Project Preview Image */}
                      <div className="project-image-wrapper position-relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="project-cover-img w-100"
                          loading="lazy"
                        />
                        <div className="project-image-overlay" />
                        <span className="badge project-category-badge position-absolute top-0 start-0 m-3">
                          <i className="bi bi-code-slash me-1" /> Featured
                        </span>
                        <div className="project-expand-hint position-absolute bottom-0 end-0 m-3">
                          <span className="badge bg-dark bg-opacity-75 text-info border border-info-subtle">
                            <i className="bi bi-chevron-expand me-1" /> Hover for details
                          </span>
                        </div>
                      </div>

                      <div className="card-body d-flex flex-column gap-2 p-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3 className="h5 mb-0 text-white project-card-title">{project.name}</h3>
                          <div className="project-card-arrow">
                            <i className="bi bi-arrow-up-right text-info" />
                          </div>
                        </div>

                        <p className="mb-2 text-muted small project-desc">{project.description}</p>

                        {/* Hidden Points Container: Expands smoothly on hover or tap */}
                        {project.points && project.points.length > 0 && (
                          <div className="project-points-container">
                            <div className="project-points-divider my-2" />
                            <p className="text-info text-uppercase fw-semibold mb-2 points-header">
                              <i className="bi bi-stars me-1" /> Key Highlights
                            </p>
                            <ul className="project-points-list mb-3 ps-0 list-unstyled">
                              {project.points.map((pt, i) => (
                                <li key={i} className="d-flex align-items-start gap-2 mb-2 text-light-subtle small">
                                  <i className="bi bi-lightning-charge-fill text-info mt-1 flex-shrink-0" />
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tags */}
                        <div className="mt-auto d-flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="badge project-tag-pill">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="d-flex flex-wrap gap-2 mt-3 pt-3 border-top border-secondary border-opacity-25">
                          {project.demo ? (
                            <a
                              href={project.demo}
                              className="btn btn-outline-info btn-sm project-action-btn d-inline-flex align-items-center gap-1"
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <i className="bi bi-box-arrow-up-right" /> Live Demo
                            </a>
                          ) : null}
                          {project.github ? (
                            <a
                              href={project.github}
                              className="btn btn-primary btn-sm project-action-btn hero-btn-glow d-inline-flex align-items-center gap-1"
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <i className="bi bi-github" /> Source Code
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
