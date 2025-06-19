import React from 'react'
import { Link } from 'react-router-dom'
import { FaFileAlt, FaUsers, FaClipboardList, FaCalendarAlt, FaClock, FaDownload, FaLightbulb, FaIndustry, FaLeaf } from 'react-icons/fa'
import './Pages.css'

const Authors = () => {
  const authorResources = [
    {
      title: "Call for Papers",
      icon: <FaFileAlt />,
      link: "/call-for-papers",
      description: "Download the official call for papers with detailed submission guidelines and conference scope.",
      action: "Download CFP",
      color: "blue"
    },
    {
      title: "Call for Special Sessions",
      icon: <FaUsers />,
      link: "/call-for-special-sessions",
      description: "Propose and organize special sessions on emerging topics within the conference scope.",
      action: "Learn More",
      color: "green"
    },
    {
      title: "Submission Guidelines",
      icon: <FaClipboardList />,
      link: "/submission-guidelines",
      description: "Comprehensive guidelines for paper formatting, submission process, and review criteria.",
      action: "View Guidelines",
      color: "purple"
    }
  ]

  const importantDates = [
    {
      date: "December 15, 2024",
      event: "Paper Submission Opens",
      status: "upcoming",
      icon: <FaCalendarAlt />
    },
    {
      date: "February 15, 2025",
      event: "Paper Submission Deadline",
      status: "deadline",
      icon: <FaClock />
    },
    {
      date: "March 1, 2025",
      event: "Notification of Acceptance",
      status: "upcoming",
      icon: <FaFileAlt />
    },
    {
      date: "March 10, 2025",
      event: "Camera-Ready Submission",
      status: "upcoming",
      icon: <FaDownload />
    },
    {
      date: "March 15-16, 2025",
      event: "Conference Dates",
      status: "conference",
      icon: <FaUsers />
    }
  ]

  const conferenceTopics = [
    {
      category: "Smart Industry & Technology",
      icon: <FaIndustry />,
      topics: [
        "Smart Manufacturing and Industry 4.0",
        "Internet of Things (IoT) Applications",
        "Artificial Intelligence and Machine Learning",
        "Automation and Robotics",
        "Digital Transformation",
        "Cyber-Physical Systems",
        "Data Analytics and Big Data",
        "Cybersecurity in Smart Systems"
      ]
    },
    {
      category: "Environment & Sustainability",
      icon: <FaLeaf />,
      topics: [
        "Environmental Monitoring and Protection",
        "Sustainable Development Technologies",
        "Green Energy and Renewable Resources",
        "Smart Cities and Urban Planning",
        "Climate Change Mitigation",
        "Waste Management Technologies",
        "Water Treatment and Management",
        "Carbon Footprint Reduction"
      ]
    },
    {
      category: "Emerging Technologies",
      icon: <FaLightbulb />,
      topics: [
        "Blockchain Applications",
        "Edge Computing",
        "5G and Beyond",
        "Quantum Computing",
        "Augmented and Virtual Reality",
        "Digital Twins",
        "Human-Computer Interaction",
        "Bioinformatics and Biotechnology"
      ]
    }
  ]

  return (
    <div className="page-container authors-page">
      <div className="container">
        <div className="page-header">
          <h1>Author Information</h1>
          <p className="page-subtitle">Everything you need to know about submitting to SITE 2025</p>
        </div>

        <div className="page-content">
          {/* Author Resources */}
          <div className="author-resources">
            <h2 className="section-title">Author Resources</h2>
            <div className="resources-grid">
              {authorResources.map((resource, index) => (
                <div key={index} className={`resource-card ${resource.color}`}>
                  <div className="resource-icon">
                    {resource.icon}
                  </div>
                  <div className="resource-content">
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                    <Link to={resource.link} className="resource-button">
                      {resource.action}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Dates */}
          <div className="important-dates-section">
            <h2 className="section-title">Important Dates</h2>
            <div className="dates-timeline">
              {importantDates.map((item, index) => (
                <div key={index} className={`timeline-item ${item.status}`}>
                  <div className="timeline-marker">
                    {item.icon}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-date">{item.date}</div>
                    <div className="timeline-event">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conference Topics */}
          <div className="conference-topics">
            <h2 className="section-title">Conference Topics</h2>
            <p className="topics-intro">
              SITE 2025 welcomes high-quality research papers on all aspects of Smart Industry,
              Technology and Environment. We encourage submissions in the following areas:
            </p>

            <div className="topics-grid">
              {conferenceTopics.map((category, index) => (
                <div key={index} className="topic-category">
                  <div className="category-header">
                    <div className="category-icon">
                      {category.icon}
                    </div>
                    <h3>{category.category}</h3>
                  </div>
                  <ul className="topics-list">
                    {category.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Submission Process */}
          <div className="submission-process">
            <h2 className="section-title">Submission Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Prepare Your Manuscript</h4>
                  <p>Follow the submission guidelines and use the provided template</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Submit Online</h4>
                  <p>Upload your paper through our online submission system</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Peer Review</h4>
                  <p>Your paper will be reviewed by experts in the field</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Notification</h4>
                  <p>Receive notification of acceptance or rejection</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4>Camera-Ready</h4>
                  <p>Submit final version incorporating reviewer feedback</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="author-contact">
            <h2 className="section-title">Need Help?</h2>
            <div className="contact-grid">
              <div className="contact-card">
                <h4>Technical Support</h4>
                <p>For submission system issues and technical questions</p>
                <a href="mailto:technical@site-conf.com">technical@site-conf.com</a>
              </div>
              <div className="contact-card">
                <h4>Editorial Support</h4>
                <p>For questions about paper content and scope</p>
                <a href="mailto:editorial@site-conf.com">editorial@site-conf.com</a>
              </div>
              <div className="contact-card">
                <h4>General Inquiries</h4>
                <p>For general conference questions</p>
                <a href="mailto:contact@site-conf.com">contact@site-conf.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authors
