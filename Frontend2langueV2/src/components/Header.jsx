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
import { useLanguage } from '../contexts/LanguageContext'
import { useConfig } from '../contexts/ConfigContext' // Import the config context
import LanguageSelector from './LanguageSelector'
import './Header.css'

const Header = () => {
  const { t } = useLanguage()
  const { config, loading } = useConfig() // Use config from context
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

  // Show loading or default content while config is loading
  if (loading) {
    return <div className="header-loading">Loading...</div>
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
              {/* Use dynamic logo from config */}
              <img 
                src={config?.site?.logo || "/site 2025 (5).png"} 
                alt={config?.site?.title || "SITE Logo"} 
                className="main-logo" 
              />
            </Link>
            <a href="https://www.facebook.com/ADT.Bizerte" target="_blank" rel="noopener noreferrer" className="partner-logo-link">
              <img src="/adt-logo.png" alt="ADT Logo" className="partner-logo" />
            </a>
          </div>

          <div className="header-actions">
            <LanguageSelector />
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            {[
              {
                label: t('header.navigation.home'),
                icon: <FaHome />,
                path: '/',
                dropdown: [{ label: t('header.navigation.venue'), path: '/venue' }],
              },
              {
                label: t('header.navigation.committees'),
                icon: <FaUsers />,
                path: '/committees',
                dropdown: [
                  { label: t('header.navigation.honoraryCommittee'), path: '/honorary-committee' },
                  { label: t('header.navigation.scientificCommittee'), path: '/scientific-committee' },
                  { label: t('header.navigation.organizingCommittee'), path: '/organizing-committee' },
                ],
              },
              {
                label: t('header.navigation.program'),
                icon: <FaCalendarAlt />,
                path: '/program',
              },
              {
                label: t('header.navigation.authors'),
                icon: <FaEdit />,
                path: '/authors',
                dropdown: [
                  { label: t('header.navigation.callForPapers'), path: '/call-for-papers' },
                  { label: t('header.navigation.callForSpecialSessions'), path: '/call-for-special-sessions' },
                  { label: t('header.navigation.submissionGuidelines'), path: '/submission-guidelines' },
                ],
              },
              {
                label: t('header.navigation.registration'),
                icon: <FaUserPlus />,
                path: '/registration',
              },
              {
                label: t('header.navigation.previousEditions'),
                icon: <FaHistory />,
                path: '/previous-editions',
                dropdown: [
                  { label: t('header.navigation.site2023'), path: '/site-2023' },
                  { label: t('header.navigation.site2024'), path: '/site-2024' },
                ],
              },
              {
                label: t('header.navigation.contactUs'),
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