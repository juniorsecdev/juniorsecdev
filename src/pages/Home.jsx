import { Link } from 'react-router-dom'
import { courses, getAllLessons, getConcepts, getCaseStudies } from '../data'
import './Home.css'

export default function Home() {
  const lessons   = getAllLessons()
  const concepts  = getConcepts()
  const cases     = getCaseStudies()

  return (
    <div className="home">
      <div className="hero-grid" />
      <div className="hero-glow" />

      <div className="hero-content fade-up">
        <div className="hero-tag">Cybersecurity Defense Analyst Training</div>
        <h1>Documenting the<br />path into <span>security</span>.</h1>
        <p className="hero-sub">
          A living record of my cybersecurity journey. Every lesson, concept, exam tip,
          and real-world case study — built in public, updated as I learn.
        </p>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-val">{lessons.length}</span>
            <span className="stat-label">Lessons Logged</span>
          </div>
          <div className="stat">
            <span className="stat-val">{concepts.length}</span>
            <span className="stat-label">Concepts Covered</span>
          </div>
          <div className="stat">
            <span className="stat-val">{cases.length}</span>
            <span className="stat-label">Case Studies</span>
          </div>
          <div className="stat">
            <span className="stat-val">{courses.length}</span>
            <span className="stat-label">Courses</span>
          </div>
        </div>

        <div className="hero-actions">
          <Link to="/lessons" className="btn-primary">View Lessons</Link>
          <Link to="/concepts" className="btn-ghost">Concepts Glossary</Link>
        </div>
      </div>

      <div className="home-courses">
        <div className="section-label">Current Training</div>
        {courses.map(c => (
          <div key={c.id} className="course-strip">
            <div className="course-strip-info">
              <span className="course-strip-title">{c.title}</span>
              <span className="course-strip-count">{c.lessons.length} lessons</span>
            </div>
            <span className={`course-status status-${c.status}`}>
              {c.status === 'in-progress' ? 'In Progress' : c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
