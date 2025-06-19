import React from 'react'
import './Pages.css'

const CallForPapers = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>Call for papers</h1>
        </div>
        
        <div className="page-content">
          <div className="call-for-papers-image">
            <img 
              src="https://site-conf.com/wp-content/uploads/2025/06/SITE-2025-2-768x1024.png" 
              alt="SITE 2025 Call for Papers" 
            />
          </div>
          
          <div className="download-section">
            <h3>Call for papers</h3>
            <a href="/checkout/call-for-paper-site2025-3/" className="btn btn-primary">
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallForPapers
