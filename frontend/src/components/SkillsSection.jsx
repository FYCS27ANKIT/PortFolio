import { useEffect, useRef, useState } from 'react'
import { skills } from '../data'
import ScrollReveal from './ScrollReveal'

export default function SkillsSection() {
  const sectionRef = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-card py-5" id="skills">
      <div className="container">
        <ScrollReveal>
          <div className="row mb-4">
            <div className="col">
              <p className="section-label">Skills & Stack</p>
              <h2>Tools and technologies I use</h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="row g-3 g-md-4">
          {skills.map((skill, idx) => (
            <div key={skill.name} className="col-12 col-md-6">
              <ScrollReveal delay={idx * 0.04}>
                <div className="skill-card p-3 rounded-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-semibold text-light skill-name">
                      {skill.name}
                    </span>
                    <span className="badge skill-level-badge">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="progress skill-progress-track" style={{ height: '8px' }}>
                    <div
                      className="progress-bar skill-progress-fill"
                      role="progressbar"
                      style={{
                        width: animated ? `${skill.level}%` : '0%',
                        transition: `width 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.04}s`,
                      }}
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
