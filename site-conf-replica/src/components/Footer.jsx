import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SITE 2025</h3>
            <p>
              The third edition of the international conference on Smart Industry, Technology and Environment 
              "SITE'2025" aims to bring together academicians, researchers, professionals and experts from 
              various fields to share their latest findings, innovations and best practices. It consists of 
              keynotes, oral sessions and poster presentations. SITE'2025 facilitates interdisciplinary 
              collaboration and promotes sustainable development by exploring cutting-edge advancements in 
              various fields.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/venue">Venue</Link></li>
              <li><Link to="/committees">Committees</Link></li>
              <li><Link to="/scientific-committee">Scientific Committee</Link></li>
              <li><Link to="/organizing-committee">Organizing Committee</Link></li>
              <li><Link to="/program">Program</Link></li>
              <li><Link to="/authors">Authors</Link></li>
              <li><Link to="/call-for-papers">Call for papers</Link></li>
              <li><Link to="/call-for-special-sessions">Call for special sessions</Link></li>
              <li><Link to="/submission-guidelines">Submission Guidelines</Link></li>
              <li><Link to="/registration">Registration</Link></li>
              <li><Link to="/previous-editions">Previous Editions</Link></li>
              <li><Link to="/site-2023">SITE 2023</Link></li>
              <li><Link to="/site-2024">SITE 2024</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>Address: ADT Bizerte, Institut Supérieur des Etudes Technologiques de Bizerte</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <a href="tel:98954990">98 954 990</a>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <a href="mailto:contact@site-conf.com">contact@site-conf.com</a>
              </div>
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

        <div className="footer-bottom">
          <p>
            © 2025 <Link to="/">SITE2025</Link> | Designed by: 
            <a href="https://themefreesia.com" target="_blank" rel="noopener noreferrer"> Theme Freesia</a> | 
            Powered by: <a href="https://wordpress.org" target="_blank" rel="noopener noreferrer"> WordPress</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
