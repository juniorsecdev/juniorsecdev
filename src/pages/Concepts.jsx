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
      <div className="section-label">My Definitions</div>
      <h2>Concepts & Terminology</h2>
      <p className="page-desc">
        Every term I have had to look up or really think through, written in my own words. 
        Searchable so I can actually use this for review.
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
          <p className="no-results">Nothing matches that search.</p>
        )}
      </div>
    </div>
  )
}
