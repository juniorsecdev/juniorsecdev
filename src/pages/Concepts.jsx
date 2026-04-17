import { useState } from 'react'
import { getConcepts } from '../data'
import './Concepts.css'

export default function Concepts() {
  const concepts = getConcepts()
  const [search, setSearch] = useState('')

  const filtered = concepts.filter(c =>
    c.term.toLowerCase().includes(search.toLowerCase()) ||
    c.def.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="page">
      <div className="section-label">Quick Reference</div>
      <h2>Core Concepts Glossary</h2>
      <p className="page-desc">
        Every important term covered so far. Fast-access definitions for review and exam prep.
      </p>

      <div className="search-wrap">
        <span className="search-icon">⌕</span>
        <input
          className="search-input"
          type="text"
          placeholder="Search concepts..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="concepts-grid">
        {filtered.map(c => (
          <div key={c.term} className="concept-card">
            <div className="concept-term">{c.term}</div>
            <div className="concept-def">{c.def}</div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="no-results">No concepts match that search.</p>
        )}
      </div>
    </div>
  )
}
