import React from 'react';
import './Site2023.css'; // We'll use a dedicated CSS file for this page
import {  FiUser, FiImage } from 'react-icons/fi';
const Site2023 = () => {
  // Gallery images data for better maintainability
 const galleryImages = Array.from({length: 29}, (_, i) => `/gallery${i+1}-2023.jpg`);
    
  // Speakers data
  const speakers = [
    { id: 1, image: '/speaker1.jpg', name: 'Speaker 1' },
    { id: 2, image: '/speaker2.jpg', name: 'Speaker 2' },
    { id: 3, image: '/speaker3.jpg', name: 'Speaker 3' },
    { id: 4, image: '/speaker4.jpg', name: 'Speaker 4' },
  ];

  return (
    <main className="site-2023-container">
      <header className="site-2023-header">
        <h1>SITE 2023</h1>
        <p className="subtitle">First Edition - Smart Industry, Technology and Environment
          <br />
          03-04-05 November 2023 • Hammemt, Tunisia
        </p>
      </header>
      
      <section className="site-2023-content">
        <div className="poster-section">
          <img 
            src="/affiche.png" 
            alt="SITE 2023 Conference Poster" 
            className="conference-poster"
          />
          
          <div className="action-buttons">
            <a 
              href="/assets/uploads/Affiche_SITE_2023.pdf" 
              className="action-button"
              download="SITE_2023_Call_For_Papers.pdf"
            >
              Call for Papers 2023
            </a>
            <a 
              href="/assets/uploads/Programme-provisoir_SITE23.pdf" 
              className="action-button"
              download="SITE_2023_Program.pdf"
            >
              Program 2023
            </a>
          </div>
        </div>
        
        <section className="speakers-section">
          <h2>
            <FiUser /> Featured Speakers
          </h2>

          <div className="speakers-grid">
            {speakers.map(speaker => (
              <div key={speaker.id} className="speaker-card">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="speaker-image"
                />
                <h3>{speaker.name}</h3>
              </div>
            ))}
          </div>
        </section>
        
        <section className="gallery-section">
          <h2>
            <FiImage /> Event Gallery
          </h2>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={image}
                  alt={`SITE 2023 event photo ${index + 1}`}
                  className="gallery-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Featured highlight image */}
          <div className="gallery-highlight">
            <div className="highlight-image-container">
              <img
                src="/gallery30-2023.jpg"
                alt="SITE 2023 Conference Highlight"
                className="highlight-image"
                loading="lazy"
              />
              
            </div>
          </div>
        </section>
        
      </section>
    </main>
  );
}

export default Site2023;