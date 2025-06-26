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
  FaEnvelopeOpen,
  FaBars,
  FaTimes
} from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="main-nav">
        <div className="container nav-content">
          <div className="logo-group">
            <a href="https://isetbz.rnu.tn" target="_blank" rel="noopener noreferrer" className="partner-logo-link">
              <img src="/reseau-logo.png" alt="Réseau Logo" className="partner-logo" />
            </a>
            <Link to="/" className="main-logo-link">
              <img src="/site 2025 (5).png" alt="SITE Logo" className="main-logo" />
            </Link>
            <a href="https://www.facebook.com/ADT.Bizerte" target="_blank" rel="noopener noreferrer" className="partner-logo-link">
              <img src="/adt-logo.png" alt="ADT Logo" className="partner-logo" />
            </a>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
  {[
    {
      label: 'Home',
      icon: <FaHome />,
      path: '/',
      dropdown: [{ label: 'Venue', path: '/venue' }],
    },
    {
      label: 'Committees',
      icon: <FaUsers />,
      path: '/committees',
      dropdown: [
        { label: 'Honorary Committee', path: '/honorary-committee' },
        { label: 'Scientific Committee', path: '/scientific-committee' },
        { label: 'Organizing Committee', path: '/organizing-committee' },
      ],
    },
    {
      label: 'Program',
      icon: <FaCalendarAlt />,
      path: '/program',
    },
    {
      label: 'Authors',
      icon: <FaEdit />,
      path: '/authors',
      dropdown: [
        { label: 'Call for papers', path: '/call-for-papers' },
        { label: 'Call for special sessions', path: '/call-for-special-sessions' },
        { label: 'Submission Guidelines', path: '/submission-guidelines' },
      ],
    },
    {
      label: 'Registration',
      icon: <FaUserPlus />,
      path: '/registration',
    },
    {
      label: 'Previous Editions',
      icon: <FaHistory />,
      path: '/previous-editions',
      dropdown: [
        { label: 'SITE 2023', path: '/site-2023' },
        { label: 'SITE 2024', path: '/site-2024' },
      ],
    },
    {
      label: 'Contact Us',
      icon: <FaEnvelopeOpen />,
      path: '/contact-us',
    },
  ].map((item, index) => (
    <li className="nav-item" key={index}>
      <div className="nav-link-wrapper">
        <Link
          to={item.path}
          className="nav-link"
          onClick={() => {
            setIsMobileMenuOpen(false)
            setOpenDropdown(null)
          }}
        >
          {item.icon} <span>{item.label}</span>
        </Link>
        {item.dropdown && (
          <button
            className="dropdown-toggle"
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              toggleDropdown(index)
            }}
          >
            ▼
          </button>
        )}
      </div>
      {item.dropdown && (
        <ul className={`dropdown ${openDropdown === index ? 'show' : ''}`}>
          {item.dropdown.map((sub, subIndex) => (
            <li key={subIndex}>
              <Link
                to={sub.path}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setOpenDropdown(null)
                }}
              >
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ))}
</ul>

        </div>
      </nav>
    </header>
  )
}

export default Header
