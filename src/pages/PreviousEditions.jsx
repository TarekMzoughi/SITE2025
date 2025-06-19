import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

const PreviousEditions = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>Previous Editions</h1>
        </div>
        
        <div className="page-content">
          <div className="previous-editions-links">
            <div className="edition-card">
              <h3>
                <Link to="/site-2023" className="edition-link">
                  SITE 2023
                </Link>
              </h3>
              <p>First edition of the Smart Industry, Technology and Environment conference</p>
            </div>

            <div className="edition-card">
              <h3>
                <Link to="/site-2024" className="edition-link">
                  SITE 2024
                </Link>
              </h3>
              <p>Second edition of the Smart Industry, Technology and Environment conference</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviousEditions
