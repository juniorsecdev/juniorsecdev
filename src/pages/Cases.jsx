import { getCaseStudies } from '../data'
import './Cases.css'

export default function Cases() {
  const cases = getCaseStudies()

  return (
    <div className="page">
      <div className="section-label">Real Events</div>
      <h2>Case Studies</h2>
      <p className="page-desc">
        Real attacks I have studied in depth. Breaking them down myself is how they actually stick.
      </p>

      <div className="cases-list">
        {cases.map(c => (
          <div key={c.id} className="case-card">
            <div className="case-top">
              <div className="case-date">{c.date}</div>
              <div className="case-tags">
                {c.tags.map(t => (
                  <span key={t.label} className={`tag tag-${t.color}`}>{t.label}</span>
                ))}
              </div>
            </div>

            <h3 className="case-title">{c.title}</h3>
            <p className="case-summary">{c.summary}</p>

            <div className="case-grid">
              <div className="case-block">
                <h4>How it happened</h4>
                <ol className="attack-chain">
                  {c.attackChain.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="case-block">
                <h4>The damage</h4>
                <p className="case-impact">{c.impact}</p>

                <h4>Root cause</h4>
                <div className="root-cause">{c.rootCause}</div>

                <h4>What defenders should take from this</h4>
                <ul className="defense-lessons">
                  {c.defenseLessons.map((l, i) => <li key={i}>{l}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
