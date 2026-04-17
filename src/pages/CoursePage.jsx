import { useParams, Link } from 'react-router-dom'
import { getCourseById } from '../data'
import LessonCard from '../components/LessonCard'
import './CoursePage.css'

export default function CoursePage() {
  const { courseId } = useParams()
  const course = getCourseById(courseId)

  if (!course) return (
    <div className="page">
      <p style={{ color: 'var(--text-dim)' }}>Course not found.</p>
    </div>
  )

  return (
    <div className="page">
      <Link to="/courses" className="back-link">← All Courses</Link>

      <div className="course-hero">
        <div className="course-hero-provider">
          <span>{course.provider}</span>
          <span className="course-hero-type">{course.type}</span>
        </div>
        <h1>{course.title}</h1>
        <p className="course-hero-tagline">{course.tagline}</p>

        <div className="course-hero-pills">
          <span className="hero-pill">{course.duration}</span>
          <span className="hero-pill">{course.level}</span>
          <span className={`course-status-badge status-${course.status}`}>
            {course.status === 'in-progress' ? 'In Progress' : course.status}
          </span>
        </div>

        <div className="cert-target">
          <span className="cert-target-label">Target Certification</span>
          <a href={course.certification.url} target="_blank" rel="noreferrer" className="cert-target-name">
            {course.certification.name} ↗
          </a>
        </div>
      </div>

      <div className="course-skills">
        <div className="section-label">Skills You'll Build</div>
        <div className="skills-grid">
          {course.skills.map(s => (
            <div key={s.label} className="skill-card">
              <div className="skill-label">{s.label}</div>
              <div className="skill-detail">{s.detail}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="course-subcourses">
        <div className="section-label">Course Outline & Lessons</div>
        <p className="page-desc" style={{ marginBottom: '2rem' }}>
          {course.subcourses.filter(s => s.lessons.length > 0).length} of {course.subcourses.length} courses have lesson notes logged so far.
        </p>
        <div className="subcourses-list">
          {course.subcourses.map(sc => (
            <div key={sc.id} className={`subcourse-block ${sc.status}`}>
              <div className="subcourse-header">
                <div className="subcourse-header-left">
                  <span className="subcourse-num">{sc.number}</span>
                  <div className="subcourse-info">
                    <span className="subcourse-title">{sc.title}</span>
                    <span className="subcourse-desc">{sc.description}</span>
                  </div>
                </div>
                <span className={`sc-status-badge sc-${sc.status}`}>
                  {sc.status === 'in-progress' ? 'In Progress'
                    : sc.status === 'complete' ? 'Complete'
                    : 'Upcoming'}
                </span>
              </div>

              {sc.lessons.length > 0 && (
                <div className="subcourse-lessons">
                  {sc.lessons.map(lesson => (
                    <LessonCard key={lesson.id} lesson={lesson} />
                  ))}
                </div>
              )}

              {sc.lessons.length === 0 && sc.status === 'upcoming' && (
                <div className="subcourse-empty">
                  Lesson notes will appear here once this course is started.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="course-jobs">
        <div className="section-label">Career Outcomes</div>
        <div className="jobs-grid">
          {course.jobs.map(j => (
            <div key={j} className="job-pill">{j}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
