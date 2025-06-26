import React from 'react'
import { FaDownload, FaPaperPlane } from 'react-icons/fa'
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
            <h3>All papers must be written in English or French.</h3>
             {/* Action Buttons */}
          <div className="submission-actions">
            <button
              className="action-button download-button"
              onClick={() => {
                const templateUrl = 'https://site-conf.com/wp-content/uploads/2025/06/Template_SITE2023.docx';
                const link = document.createElement('a');
                link.href = templateUrl;
                link.download = 'Template_SITE2025.docx';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <FaDownload className="button-icon" />
              Download Template
            </button>

            <button
              className="action-button submit-button"
              onClick={() => {
                window.open('https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FConference%2FRecent', '_blank');
              }}
            >
              <FaPaperPlane className="button-icon" />
              Submit Your Abstract
            </button>
          </div>

            
            <p>
             The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmissionGuidelines
