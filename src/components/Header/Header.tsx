import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import Resume from '../../assets/Anuj_Resume.pdf'

export function Header() {
  const [isActive, setActive] = useState(false)

  // ✅ FIXED TOGGLE
  function toggleTheme() {
    document.body.classList.toggle('light')
  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<Anuj "}</span>
          <span>{" Kumar/>"}</span>
        </HashLink>

        {/* THEME TOGGLE */}
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>Home</NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>About me</NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>Project</NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>Contact</NavHashLink>

          <a href={Resume} download className="button">
            Resume
          </a>
        </nav>

        <div
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => setActive(!isActive)}
        />
      </Router>
    </Container>
  )
}