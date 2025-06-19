import React from 'react'
import './Pages.css'

const SubmissionGuidelines = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>Submission Guidelines</h1>
        </div>
        
        <div className="page-content">
          <div className="guidelines-content">
            <h3>Paper Submission Guidelines</h3>
            <p>
              Authors are invited to submit original research papers that have not been 
              published or submitted elsewhere. All submissions will be peer-reviewed 
              by the international scientific committee.
            </p>
            
            <h4>Submission Requirements</h4>
            <ul>
              <li>Papers must be written in English</li>
              <li>Maximum length: 8 pages for full papers, 4 pages for short papers</li>
              <li>Use the provided conference template</li>
              <li>Include abstract (max 250 words) and keywords</li>
              <li>Submit in PDF format only</li>
            </ul>
            
            <h4>Review Process</h4>
            <p>
              All submissions will undergo a rigorous peer-review process. 
              Each paper will be reviewed by at least two experts in the field. 
              The review criteria include originality, technical quality, 
              significance, and clarity of presentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmissionGuidelines
