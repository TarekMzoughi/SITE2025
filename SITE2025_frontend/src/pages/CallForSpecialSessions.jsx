import React from 'react'
import './Pages.css'

const CallForSpecialSessions = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>Call for Special Sessions</h1>
        </div>
        
        <div className="page-content">
          <div className="coordinators-section">
            <h3>Coordinators:</h3>
            <ul>
              <li><strong>Jihed ZGHAL (IUT Ville d'Avray – France)</strong></li>
              <li><strong>Atef BOULILA (INSAT – Tunisia)</strong></li>
            </ul>
          </div>

          <div className="special-sessions-info">
            <p>
              The organizers of the SITE'2025 conference invite researchers to submit proposals for 
              Special Sessions (SS). These sessions offer a platform for experts in specific themes 
              to present their recent findings and engage in scholarly discussions. Accepted SS 
              proposals will be listed on the conference website along with the names of the organizers. 
              All papers submitted to a SS will undergo the standard evaluation process applied to 
              regular papers. A SS will be scheduled in the final program once a minimum of 5 papers 
              have been accepted.
            </p>
          </div>

          <div className="contact-section">
            <a href="mailto:jzghal@parisnanterre.fr" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallForSpecialSessions
