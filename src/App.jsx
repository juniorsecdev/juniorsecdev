import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CoursePage from './pages/CoursePage'
import Concepts from './pages/Concepts'
import Cases from './pages/Cases'
import About from './pages/About'
import './App.css'

export default function App() {
  return (
    <BrowserRouter basename="/juniorsecdev">
      <Nav />
      <Routes>
        <Route path="/"                    element={<Home />} />
        <Route path="/courses"             element={<Courses />} />
        <Route path="/courses/:courseId"   element={<CoursePage />} />
        <Route path="/concepts"            element={<Concepts />} />
        <Route path="/cases"               element={<Cases />} />
        <Route path="/about"               element={<About />} />
      </Routes>
      <footer className="site-footer">
        <span>// juniorsecdev</span> &nbsp;·&nbsp; Updated live as lessons progress &nbsp;·&nbsp; Built for learning, shared for the community
      </footer>
    </BrowserRouter>
  )
}
