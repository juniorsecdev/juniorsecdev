import { courses } from '../data'
import './About.css'

export default function About() {
  return (
    <div className="page">
      <div className="section-label">The Journey</div>
      <h2>About This Path</h2>

      <div className="about-grid">
        <div className="about-text">
          <p>
            This site is a living document of my journey into cybersecurity. Not a highlight reel — the actual process. Every lesson I study, every concept I break down, every case study I analyze gets logged here so others on the same path can use it too.
          </p>
          <p>
            The goal is to work in security defense — detection, response, and protecting infrastructure. The focus is building real analyst skills, not just passing tests.
          </p>
          <p>
            If you're also trying to break into cybersecurity, use these notes. That's why they're public.
          </p>
          <div className="about-note">
            <span className="about-note-label">// note</span>
            This site updates automatically as I progress through lessons. Everything here reflects where I actually am, not where I want to appear to be.
          </div>
        </div>

        <div className="about-right">
          <div className="cert-section-label">Certifications & Courses</div>
          <div className="cert-list">
            {courses.map(c => (
              <div key={c.id} className="cert-item">
                <div className="cert-info">
                  <span className="cert-name">{c.title}</span>
                  <span className="cert-lessons">{c.lessons.length} lessons logged</span>
                </div>
                <span className={`cert-status status-${c.status}`}>
                  {c.status === 'in-progress' ? 'In Progress' : c.status}
                </span>
              </div>
            ))}
            <div className="cert-item cert-upcoming">
              <div className="cert-info">
                <span className="cert-name">More coming...</span>
                <span className="cert-lessons">Next certifications TBD</span>
              </div>
              <span className="cert-status status-upcoming">Up Next</span>
            </div>
          </div>

          <div className="focus-areas">
            <div className="cert-section-label" style={{marginTop: '2rem'}}>Focus Areas</div>
            <div className="focus-tags">
              <span className="focus-tag">Threat Detection</span>
              <span className="focus-tag">Incident Response</span>
              <span className="focus-tag">SIEM & UEBA</span>
              <span className="focus-tag">Insider Threats</span>
              <span className="focus-tag">Ransomware Defense</span>
              <span className="focus-tag">Blue Team Ops</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
