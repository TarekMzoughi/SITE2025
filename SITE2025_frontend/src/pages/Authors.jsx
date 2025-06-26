import React from 'react'
import {
  FaFileAlt,
  FaCheckCircle,
  FaCalendarAlt,
  FaPenFancy,
  FaUsers
} from 'react-icons/fa'
import './Authors.css'

const Authors = () => {
  const importantDates = [
    {
      date: 'July 30th, 2025',
      event: 'Paper Submission Deadline',
      description: 'Final deadline for all paper submissions',
      icon: <FaFileAlt />,
      color: '#e74c3c',
      status: 'critical'
    },
    {
      date: 'September 15th, 2025',
      event: 'Acceptance Notification',
      description: 'Authors will be notified of paper acceptance',
      icon: <FaCheckCircle />,
      color: '#27ae60',
      status: 'success'
    },
    {
      date: 'September 20th, 2025',
      event: 'Registration Deadline',
      description: 'Early bird registration closes',
      icon: <FaCalendarAlt />,
      color: '#2980b9',
      status: 'important'
    },
    {
      date: 'October 1st, 2025',
      event: 'Camera-Ready Submission',
      description: 'Final paper versions due',
      icon: <FaPenFancy />,
      color: '#e67e22',
      status: 'deadline'
    },
    {
      date: 'October 24–26, 2025',
      event: 'SITE 2025 Conference',
      description: 'Main conference in Tunis, Tunisia',
      icon: <FaUsers />,
      color: '#8e44ad',
      status: 'event'
    }
  ]

  return (
    <div className="page-container authors-page">
      <div className="container">
        <div className="page-header">
          <h1>Author Information</h1>
          <p className="page-subtitle">
            Everything you need to know about submitting to SITE 2025
          </p>
        </div>

        <div className="page-content">
          {/* Important Dates */}
          <div className="important-dates-section">
            <h2 className="section-title">Important Dates</h2>
            <p className="section-description">
              Mark your calendar with these essential milestones for SITE 2025
            </p>
            <div className="dates-timeline">
              {importantDates.map((item, index) => (
                <div key={index} className={`timeline-item ${item.status}`}>
                  <div className="timeline-marker">
                    {item.icon}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-date">
                      {item.date}
                    </div>
                    <div className="timeline-event">{item.event}</div>
                    <div className="timeline-description">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authors
