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
          {lesson.keyPoints?.length > 0 && (
            <>
              <h4>Key Concepts</h4>
              {lesson.keyPoints.map(kp => (
                <div key={kp.term} className="key-point">
                  <strong>{kp.term}</strong> — {kp.def}
                </div>
              ))}
            </>
          )}

          {lesson.howItUnfolded?.length > 0 && (
            <>
              <h4>How It Unfolded</h4>
              <ul>
                {lesson.howItUnfolded.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </>
          )}

          {lesson.keyTerms?.length > 0 && (
            <>
              <h4>Key Terms</h4>
              <ul>
                {lesson.keyTerms.map(kt => (
                  <li key={kt.term}><strong>{kt.term}</strong> — {kt.def}</li>
                ))}
              </ul>
            </>
          )}

          {lesson.blueTeamTakeaways?.length > 0 && (
            <>
              <h4>Blue Team Takeaways</h4>
              <ul>
                {lesson.blueTeamTakeaways.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </>
          )}

          {lesson.examTips?.length > 0 && (
            <>
              <h4>Exam Tips</h4>
              {lesson.examTips.map((tip, i) => (
                <div key={i} className="exam-tip">{tip}</div>
              ))}
            </>
          )}

          {lesson.resources?.length > 0 && (
            <>
              <h4>Resources</h4>
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
