import React from 'react'
import { Link } from 'react-router-dom'
import usePageTranslation from '../hooks/usePageTranslation'
import './Pages.css'

const Committees = () => {
  const { title, getText } = usePageTranslation('committees')

  const committees = [
    {
      title: getText('pages.honoraryCommittee.title'),
      description: getText('pages.honoraryCommittee.subtitle'),
      link: "/honorary-committee",
      members: getText('committees.honorary.members'),
      role: getText('committees.honorary.role')
    },
    {
      title: getText('pages.scientificCommittee.title'),
      description: getText('pages.scientificCommittee.subtitle'),
      link: "/scientific-committee",
      members: getText('committees.scientific.members'),
      role: getText('committees.scientific.role')
    },
    {
      title: getText('pages.organizingCommittee.title'),
      description: getText('pages.organizingCommittee.subtitle'),
      link: "/organizing-committee",
      members: getText('committees.organizing.members'),
      role: getText('committees.organizing.role')
    }
  ]

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>{title}</h1>
        </div>

        <div className="page-content">
          <div className="committees-intro">
            <p>
              {getText('committees.description')}
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
                    <strong>{getText('committees.membersLabel')}:</strong> {committee.members}
                  </div>
                  <div className="stat-item">
                    <strong>{getText('committees.roleLabel')}:</strong> {committee.role}
                  </div>
                </div>
                <Link to={committee.link} className="btn btn-primary committee-btn">
                  {getText('committees.viewCommittee')}
                </Link>
              </div>
            ))}
          </div>

          <div className="committees-collaboration">
            <h3>{getText('committees.collaboration.title')}</h3>
            <p>
              {getText('committees.collaboration.description')}
            </p>
          </div>

          <div className="join-committee">
            <h3>{getText('committees.join.title')}</h3>
            <p>
              {getText('committees.join.description')}
            </p>
            <a href="mailto:contact@site-conf.com" className="btn btn-secondary">
              {getText('committees.join.contactUs')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Committees
