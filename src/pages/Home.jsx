import { Link } from 'react-router-dom'
import { courses, getAllLessons, getConcepts, getCaseStudies } from '../data'
import './Home.css'

export default function Home() {
  const lessons  = getAllLessons()
  const concepts = getConcepts()
  const cases    = getCaseStudies()

  return (
    <div className="home">
      <div className="hero-content fade-up">
        <div className="hero-tag">juniorsecdev</div>
        <h1>Breaking into<br />cybersecurity,<br /><span>one lesson at a time.</span></h1>
        <p className="hero-sub">
          I'm working toward a career in security defense. This site is where I keep my notes — 
          every concept I learn, every case study I break down, every thing that finally clicked. 
          If you're on the same path, use whatever helps you.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-val">{courses.length}</span>
            <span className="stat-label">Course{courses.length !== 1 ? 's' : ''} in progress</span>
          </div>
          <div className="stat">
            <span className="stat-val">{lessons.length}</span>
            <span className="stat-label">Lessons logged</span>
          </div>
          <div className="stat">
            <span className="stat-val">{concepts.length}</span>
            <span className="stat-label">Concepts defined</span>
          </div>
          <div className="stat">
            <span className="stat-val">{cases.length}</span>
            <span className="stat-label">Case studies</span>
          </div>
        </div>
        <div className="hero-actions">
          <Link to="/courses" className="btn-primary">See my courses</Link>
          <Link to="/concepts" className="btn-ghost">Browse concepts</Link>
        </div>
      </div>

      <div className="home-divider" />

      <div className="home-courses">
        <p className="home-section-intro">What I'm studying right now</p>
        <div className="courses-list">
          {courses.map(c => {
            const done = c.subcourses.filter(s => s.status === 'complete').length
            const total = c.subcourses.length
            const pct = Math.round((done / total) * 100)
            const lessonsLogged = c.subcourses.reduce((acc, sc) => acc + sc.lessons.length, 0)
            return (
              <Link key={c.id} to={`/courses/${c.id}`} className="course-row">
                <div className="course-row-left">
                  <div className="course-row-provider">{c.provider}</div>
                  <div className="course-row-title">{c.title}</div>
                  <div className="course-row-meta">
                    <span>{c.duration}</span>
                    <span>{c.level}</span>
                    <span>{lessonsLogged} lesson{lessonsLogged !== 1 ? 's' : ''} in my notes</span>
                  </div>
                </div>
                <div className="course-row-right">
                  <div className="course-row-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="progress-text">{done}/{total} modules done</span>
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
              <div className="course-row-meta"><span>Up next after this one</span></div>
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
