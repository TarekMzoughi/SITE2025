import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

const Committees = () => {
  const committees = [
    {
      title: "Honorary Committee",
      description: "Distinguished academics and industry leaders providing strategic guidance",
      link: "/honorary-committee",
      members: "5 members",
      role: "Strategic guidance and academic standards"
    },
    {
      title: "Scientific Committee",
      description: "International experts responsible for paper review and scientific quality",
      link: "/scientific-committee",
      members: "70+ members",
      role: "Paper review and scientific oversight"
    },
    {
      title: "Organizing Committee",
      description: "Local organizers managing conference logistics and operations",
      link: "/organizing-committee",
      members: "30+ members",
      role: "Conference organization and logistics"
    }
  ]

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>Committees</h1>
        </div>

        <div className="page-content">
          <div className="committees-intro">
            <p>
              SITE 2025 is organized by dedicated committees of international experts,
              academics, and professionals who ensure the conference's success and
              maintain its high standards of quality and excellence.
            </p>
          </div>

          <div className="committees-grid">
            {committees.map((committee, index) => (
              <div key={index} className="committee-overview-card">
                <h3>
                  <Link to={committee.link} className="committee-link">
                    {committee.title}
                  </Link>
                </h3>
                <p className="committee-description">{committee.description}</p>
                <div className="committee-stats">
                  <div className="stat-item">
                    <strong>Members:</strong> {committee.members}
                  </div>
                  <div className="stat-item">
                    <strong>Role:</strong> {committee.role}
                  </div>
                </div>
                <Link to={committee.link} className="btn btn-primary committee-btn">
                  View Committee
                </Link>
              </div>
            ))}
          </div>

          <div className="committees-collaboration">
            <h3>Committee Collaboration</h3>
            <p>
              All committees work together to ensure SITE 2025 delivers a world-class
              conference experience. The Honorary Committee provides strategic direction,
              the Scientific Committee ensures academic excellence, and the Organizing
              Committee handles all operational aspects.
            </p>
          </div>

          <div className="join-committee">
            <h3>Join Our Committees</h3>
            <p>
              We welcome qualified professionals and academics to join our committees
              for future editions of SITE. If you're interested in contributing to
              the conference's success, please contact us.
            </p>
            <a href="mailto:contact@site-conf.com" className="btn btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Committees
