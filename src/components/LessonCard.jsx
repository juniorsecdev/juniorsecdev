import { useState } from 'react'
import './LessonCard.css'

export default function LessonCard({ lesson }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`lesson-card ${open ? 'open' : ''}`}>
      <div className="lesson-header" onClick={() => setOpen(!open)}>
        <div className="lesson-header-left">
          <span className="lesson-num">{lesson.number}</span>
          <span className="lesson-title">{lesson.title}</span>
        </div>
        <div className="lesson-meta">
          {lesson.tags.map(t => (
            <span key={t.label} className={`tag tag-${t.color}`}>{t.label}</span>
          ))}
          <svg className="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {open && (
        <div className="lesson-body">

          {lesson.summary && (
            <p className="lesson-summary">{lesson.summary}</p>
          )}

          {lesson.whatIMeantToLearn?.length > 0 && (
            <>
              <h4>What this lesson was about</h4>
              <ul>
                {lesson.whatIMeantToLearn.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </>
          )}

          {lesson.myNotes?.length > 0 && (
            <>
              <h4>My notes</h4>
              {lesson.myNotes.map((note, i) => (
                <div key={i} className="my-note">
                  <strong>{note.term}</strong> — {note.def}
                </div>
              ))}
            </>
          )}

          {lesson.whatClicked?.length > 0 && (
            <>
              <h4>What clicked for me</h4>
              <ul>
                {lesson.whatClicked.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </>
          )}

          {lesson.keyTerms?.length > 0 && (
            <>
              <h4>Terms I needed to learn</h4>
              <ul>
                {lesson.keyTerms.map(kt => (
                  <li key={kt.term}><strong>{kt.term}</strong> — {kt.def}</li>
                ))}
              </ul>
            </>
          )}

          {lesson.rememberForExam?.length > 0 && (
            <>
              <h4>Things I need to remember for the exam</h4>
              {lesson.rememberForExam.map((tip, i) => (
                <div key={i} className="exam-tip">{tip}</div>
              ))}
            </>
          )}

          {lesson.resources?.length > 0 && (
            <>
              <h4>Resources I used</h4>
              <div className="resources-list">
                {lesson.resources.map(r => (
                  <a key={r.url} className="resource-link" href={r.url} target="_blank" rel="noreferrer">
                    {r.label}
                  </a>
                ))}
              </div>
            </>
          )}

        </div>
      )}
    </div>
  )
}
