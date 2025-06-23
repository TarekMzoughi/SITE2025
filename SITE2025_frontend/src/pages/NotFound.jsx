import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

const NotFound = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>404 - Page Not Found</h1>
        </div>
        
        <div className="page-content">
          <p>Sorry, the page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
