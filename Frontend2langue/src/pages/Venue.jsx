import React from 'react'
import usePageTranslation from '../hooks/usePageTranslation'
import './Pages.css'

const Venue = () => {
  const { title, getText } = usePageTranslation('venue')

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>{title}</h1>
        </div>

        <div className="page-content">
          <div className="venue-info">
            <h3>{getText('pages.venue.location')}</h3>
            <p>
              <strong>ADT Bizerte</strong><br />
              Institut Supérieur des Etudes Technologiques de Bizerte<br />
              Bizerte, Tunisia
            </p>

            <div className="venue-details">
              <h4>{getText('pages.venue.subtitle')}</h4>
              <p>
                {getText('pages.venue.description') || 'The Institut Supérieur des Etudes Technologiques de Bizerte (ISET Bizerte) is a prestigious technological institute located in Bizerte, Tunisia. The institute provides state-of-the-art facilities for hosting international conferences and academic events.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Venue
