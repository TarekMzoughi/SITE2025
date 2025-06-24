import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaHome,
  FaUsers,
  FaCalendarAlt,
  FaEdit,
  FaUserPlus,
  FaHistory,
  FaEnvelopeOpen
} from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="main-nav">
        <div className="container nav-content">
          <div className="partner-logos-left">
            <a
              href="https://isetbz.rnu.tn"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-logo-link"
            >
              <img
                src="/reseau-logo.png"
                alt="Réseau Logo"
                className="partner-logo"
              />
            </a>
            <a
              href="https://www.facebook.com/ADT.Bizerte"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-logo-link"
            >
              <img
                src="/adt-logo.png"
                alt="ADT Logo"
                className="partner-logo"
              />
            </a>
          </div>

          <div className="logo">
            <Link to="/">
              <div className="logo-container">
                <img
                  src="/site 2025 (5).png"
                  alt="SITE Logo"
                  className="logo-image"
                />
              </div>
            </Link>
          </div>

          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FaHome className="nav-icon" /> <span>Home</span>
              </Link>
              <ul className="dropdown">
                <li><Link to="/venue">Venue</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/committees" className="nav-link">
                <FaUsers className="nav-icon" /> <span>Committees</span>
              </Link>
              <ul className="dropdown">
                <li><Link to="/honorary-committee">Honorary Committee</Link></li>
                <li><Link to="/scientific-committee">Scientific Committee</Link></li>
                <li><Link to="/organizing-committee">Organizing Committee</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/program" className="nav-link">
                <FaCalendarAlt className="nav-icon" /> <span>Program</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/authors" className="nav-link">
                <FaEdit className="nav-icon" /> <span>Authors</span>
              </Link>
              <ul className="dropdown">
                <li><Link to="/call-for-papers">Call for papers</Link></li>
                <li><Link to="/call-for-special-sessions">Call for special sessions</Link></li>
                <li><Link to="/submission-guidelines">Submission Guidelines</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/registration" className="nav-link">
                <FaUserPlus className="nav-icon" /> <span>Registration</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/previous-editions" className="nav-link">
                <FaHistory className="nav-icon" /> <span>Previous Editions</span>
              </Link>
              <ul className="dropdown">
                <li><Link to="/site-2023">SITE 2023</Link></li>
                <li><Link to="/site-2024">SITE 2024</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link">
                <FaEnvelopeOpen className="nav-icon" /> <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;
