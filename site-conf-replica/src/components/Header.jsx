import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <span className="contact-item">
                <FaPhone /> <a href="tel:98954990">98 954990</a>
              </span>
              <span className="contact-item">
                <FaPhone /> <a href="tel:99909707">99 909707</a>
              </span>
              <span className="contact-item">
                <FaEnvelope /> <a href="mailto:contact@site-conf.com">contact@site-conf.com</a>
              </span>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100090234982911" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/company/107036663/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <Link to="/">
                <h1>SITE2025</h1>
              </Link>
            </div>
            
            <div className="mobile-menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
                <ul className="dropdown">
                  <li><Link to="/venue">Venue</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/committees" className="nav-link">Committees</Link>
                <ul className="dropdown">
                  <li><Link to="/honorary-committee">Honorary Committee</Link></li>
                  <li><Link to="/scientific-committee">Scientific Committee</Link></li>
                  <li><Link to="/organizing-committee">Organizing Committee</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/program" className="nav-link">Program</Link>
              </li>
              <li className="nav-item">
                <Link to="/authors" className="nav-link">Authors</Link>
                <ul className="dropdown">
                  <li><Link to="/call-for-papers">Call for papers</Link></li>
                  <li><Link to="/call-for-special-sessions">Call for special sessions</Link></li>
                  <li><Link to="/submission-guidelines">Submission Guidelines</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/registration" className="nav-link">Registration</Link>
              </li>
              <li className="nav-item">
                <Link to="/previous-editions" className="nav-link">Previous Editions</Link>
                <ul className="dropdown">
                  <li><Link to="/site-2023">SITE 2023</Link></li>
                  <li><Link to="/site-2024">SITE 2024</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
