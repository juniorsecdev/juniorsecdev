import { Link } from 'react-router-dom'
import { courses } from '../data'
import './Courses.css'

export default function Courses() {
  return (
    <div className="page">
      <div className="section-label">Training Path</div>
      <h2>Courses & Certifications</h2>
      <p className="page-desc">
        Every course I am taking or have taken, with full lesson notes, exam tips, and resources inside each one.
      </p>

      <div className="courses-grid">
        {courses.map(c => {
          const done = c.subcourses.filter(s => s.status === 'complete').length
          const total = c.subcourses.length
          const pct = Math.round((done / total) * 100)
          const lessonsLogged = c.subcourses.reduce((acc, sc) => acc + sc.lessons.length, 0)

          return (
            <Link key={c.id} to={`/courses/${c.id}`} className="course-card">
              <div className="course-card-header">
                <div className="course-card-provider">{c.provider}</div>
                <span className={`course-status-badge status-${c.status}`}>
                  {c.status === 'in-progress' ? 'In Progress' : c.status}
                </span>
              </div>
              <div className="course-card-type">{c.type}</div>
              <h3 className="course-card-title">{c.title}</h3>
              <p className="course-card-tagline">{c.tagline}</p>
              <div className="course-card-pills">
                <span className="cpill">{c.duration}</span>
                <span className="cpill">{c.level}</span>
                <span className="cpill">{lessonsLogged} lessons logged</span>
              </div>
              <div className="course-card-bottom">
                <div className="course-card-cert">
                  <span className="cert-label">Target Cert</span>
                  <span className="cert-name">{c.certification.name}</span>
                </div>
                <div className="course-card-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="progress-text">{done}/{total}</span>
                </div>
              </div>
            </Link>
          )
        })}

        <div className="course-card course-card-upcoming">
          <div className="course-card-header">
            <div className="course-card-provider">CompTIA</div>
            <span className="course-status-badge status-upcoming">Up Next</span>
          </div>
          <div className="course-card-type">Certification</div>
          <h3 className="course-card-title">Security+</h3>
          <p className="course-card-tagline">Vendor-neutral foundational security certification covering core cybersecurity concepts and practices.</p>
        </div>
      </div>
    </div>
  )
}
