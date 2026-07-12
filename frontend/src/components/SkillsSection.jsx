import { skills } from '../data'

export default function SkillsSection() {
  return (
    <section className="section-card py-5" id="skills">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <p className="section-label">Skills</p>
            <h2>Tools and languages I use every day</h2>
          </div>
        </div>
        <div className="row g-4">
          {skills.map((skill) => (
            <div key={skill.name} className="col-12 col-md-6">
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress" style={{ height: '1rem' }}>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
