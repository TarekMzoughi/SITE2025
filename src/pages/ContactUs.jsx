import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin } from 'react-icons/fa'
import './Pages.css'

const ContactUs = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
        </div>
        
        <div className="page-content">
          <div className="contact-info-grid">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Address</h3>
                <p>ADT Bizerte, Institut Supérieur des Etudes Technologiques de Bizerte</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p><a href="tel:98954990">98 954 990</a></p>
                <p><a href="tel:99909707">99 909 707</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p><a href="mailto:contact@site-conf.com">contact@site-conf.com</a></p>
              </div>
            </div>
          </div>
          
          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100090234982911" target="_blank" rel="noopener noreferrer">
                <FaFacebook /> Facebook
              </a>
              <a href="https://www.linkedin.com/company/107036663/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
