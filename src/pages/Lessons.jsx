import { courses } from '../data'
import LessonCard from '../components/LessonCard'
import './Lessons.css'

export default function Lessons() {
  return (
    <div className="page">
      <div className="section-label">Course Notes</div>
      <h2>Lessons & Study Notes</h2>
      <p className="page-desc">
        Detailed breakdowns of every lesson, exam tips, and key takeaways.
        Click any lesson to expand it.
      </p>

      {courses.map(course => (
        <div key={course.id} className="course-section">
          <div className="course-header">
            <span className="course-name">{course.title}</span>
            <span className={`course-badge status-${course.status}`}>
              {course.status === 'in-progress' ? 'In Progress' : course.status}
            </span>
          </div>
          <div className="lessons-list">
            {course.lessons.map(lesson => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
