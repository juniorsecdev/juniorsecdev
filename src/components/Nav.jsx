import { NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-logo">// juniorsecdev</NavLink>
      <ul className="nav-links">
        <li><NavLink to="/lessons" className={({ isActive }) => isActive ? 'active' : ''}>Lessons</NavLink></li>
        <li><NavLink to="/concepts" className={({ isActive }) => isActive ? 'active' : ''}>Concepts</NavLink></li>
        <li><NavLink to="/cases" className={({ isActive }) => isActive ? 'active' : ''}>Cases</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
      </ul>
    </nav>
  )
}
