import { Link } from 'react-router-dom'
import { courses, getAllLessons, getConcepts, getCaseStudies } from '../data'
import './Home.css'

export default function Home() {
  const lessons  = getAllLessons()
  const concepts = getConcepts()
  const cases    = getCaseStudies()

  return (
    <div className="home">
      <div className="hero-grid" />
      <div className="hero-glow" />

      <div className="hero-content fade-up">
        <div className="hero-tag">Cybersecurity Portfolio</div>
        <h1>Documenting the<br />path into <span>security</span>.</h1>
        <p className="hero-sub">
          A living record of my cybersecurity journey. Every course, lesson, concept, and case study logged as I learn — useful for anyone on the same path.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-val">{courses.length}</span>
            <span className="stat-label">Courses</span>
          </div>
          <div className="stat">
            <span className="stat-val">{lessons.length}</span>
            <span className="stat-label">Lessons Logged</span>
          </div>
          <div className="stat">
            <span className="stat-val">{concepts.length}</span>
            <span className="stat-label">Concepts</span>
          </div>
          <div className="stat">
            <span className="stat-val">{cases.length}</span>
            <span className="stat-label">Case Studies</span>
          </div>
        </div>
        <div className="hero-actions">
          <Link to="/courses" className="btn-primary">Browse Courses</Link>
          <Link to="/concepts" className="btn-ghost">Concepts Glossary</Link>
        </div>
      </div>

      <div className="home-courses">
        <div className="section-label">Training Path</div>
        <div className="courses-list">
          {courses.map(c => {
            const done     = c.subcourses.filter(s => s.status === 'complete').length
            const total    = c.subcourses.length
            const pct      = Math.round((done / total) * 100)
            const lessonsLogged = c.subcourses.reduce((acc, sc) => acc + sc.lessons.length, 0)
            return (
              <Link key={c.id} to={`/courses/${c.id}`} className="course-row">
                <div className="course-row-left">
                  <div className="course-row-provider">{c.provider}</div>
                  <div className="course-row-title">{c.title}</div>
                  <div className="course-row-meta">
                    <span>{c.duration}</span>
                    <span>{c.level}</span>
                    <span>{lessonsLogged} lesson{lessonsLogged !== 1 ? 's' : ''} logged</span>
                  </div>
                </div>
                <div className="course-row-right">
                  <div className="course-row-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="progress-text">{done}/{total} courses</span>
                  </div>
                  <span className={`course-status-badge status-${c.status}`}>
                    {c.status === 'in-progress' ? 'In Progress' : c.status}
                  </span>
                </div>
              </Link>
            )
          })}

          <div className="course-row course-row-placeholder">
            <div className="course-row-left">
              <div className="course-row-provider">CompTIA</div>
              <div className="course-row-title">Security+</div>
              <div className="course-row-meta"><span>Coming next</span></div>
            </div>
            <div className="course-row-right">
              <span className="course-status-badge status-upcoming">Up Next</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
