import { courses } from '../data'
import './About.css'

export default function About() {
  return (
    <div className="page">
      <div className="section-label">About</div>
      <h2>Who I am and what I'm doing</h2>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm working toward a career in cybersecurity defense. This is not my first certification — 
            I have been building toward this for a while — but this is where I am documenting the journey properly for the first time.
          </p>
          <p>
            My focus is on the defensive side: detection, investigation, and response. 
            The kind of work that happens in a SOC — monitoring for threats, tracking attackers through logs, 
            protecting systems before and after something goes wrong.
          </p>
          <p>
            I built this site to keep my notes organized and shareable. If you are also trying to break into security, 
            feel free to use anything here. That is the whole point.
          </p>
          <div className="about-note">
            <span className="about-note-label">// note</span>
            This site updates automatically as I progress. It is a real record of where I am, 
            not a polished retrospective. Notes get added as I learn things, not after I've mastered them.
          </div>
        </div>

        <div className="about-right">
          <div className="cert-section-label">Where I am right now</div>
          <div className="cert-list">
            {courses.map(c => (
              <div key={c.id} className="cert-item">
                <div className="cert-info">
                  <span className="cert-name">{c.title}</span>
                  <span className="cert-lessons">
                    {c.subcourses.reduce((acc, sc) => acc + sc.lessons.length, 0)} lessons in my notes
                  </span>
                </div>
                <span className={`cert-status status-${c.status}`}>
                  {c.status === 'in-progress' ? 'In Progress' : c.status}
                </span>
              </div>
            ))}
            <div className="cert-item cert-upcoming">
              <div className="cert-info">
                <span className="cert-name">CompTIA Security+</span>
                <span className="cert-lessons">Up next</span>
              </div>
              <span className="cert-status status-upcoming">Up Next</span>
            </div>
          </div>

          <div className="focus-areas">
            <div className="cert-section-label" style={{marginTop: '2rem'}}>What I am focused on</div>
            <div className="focus-tags">
              <span className="focus-tag">Threat Detection</span>
              <span className="focus-tag">Incident Response</span>
              <span className="focus-tag">SIEM / Splunk</span>
              <span className="focus-tag">Insider Threats</span>
              <span className="focus-tag">Ransomware Defense</span>
              <span className="focus-tag">Blue Team</span>
              <span className="focus-tag">SOC Analyst Skills</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
