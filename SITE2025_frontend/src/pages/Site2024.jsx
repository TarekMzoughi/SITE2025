import React from 'react'
import {  FiUser, FiImage } from 'react-icons/fi';
const Site2024 = () => {
  // Gallery images data for better maintainability
  const galleryImages = Array.from({length: 27}, (_, i) => `/gallery${i+1}-2024.jpg`);
  
  // Speakers data
  const speakers = [
    { id: 1, image: '/speaker1-2024.jpg', name: 'Speaker 1' },
    { id: 2, image: '/speaker2-2024.jpg', name: 'Speaker 2' },
    { id: 3, image: '/speaker3-2024.jpg', name: 'Speaker 3' },
    { id: 4, image: '/speaker4-2024.jpg', name: 'Speaker 4' },
    { id: 5, image: '/speaker5-2024.jpg', name: 'Speaker 5' },
    { id: 6, image: '/speaker6-2024.jpg', name: 'Speaker 6' },
    { id: 7, image: '/speaker7-2024.jpg', name: 'Speaker 7' },
    { id: 8, image: '/speaker8-2024.jpg', name: 'Speaker 8' },
  ];

  return (
    <main className="site-2023-container">
      <header className="site-2023-header">
        <h1>SITE 2024</h1>
       <p className="subtitle">First Edition - Smart Industry, Technology and Environment
          <br />
          08-09-10 November 2024 • Hammemt, Tunisia
        </p>
      </header>
      
      <section className="site-2023-content">
        <div className="poster-section">
          <img 
            src="/affiche2024.png" 
            alt="SITE 2024 Conference Poster" 
            className="conference-poster"
          />
          
          <div className="action-buttons">
            <a 
              href="src/assets/uploads/SITE_2024_affiche.pdf" 
              className="action-button"
              download="SITE_2024_Call_For_Papers.pdf"
            >
              Call for Papers 2024
            </a>
            <a 
              href="src/assets/uploads/Programme_SITE24.pdf" 
              className="action-button"
              download="SITE_2024_Program.pdf"
            >
              Program 2024
            </a>
          </div>
        </div>
        
        <section className="speakers-section">
          <h2> <FiUser /> Featured Speakers</h2>
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
          <h2> <FiImage/> Event Gallery</h2>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={image} 
                  alt={`SITE 2024 event photo ${index + 1}`} 
                  className="gallery-image"
                />
              </div>
            ))}
          
          </div>
          <br />
            <img src="/gallery28-2024.jpg" alt="" />
        </section>
      </section>
    </main>
  );
}

export default Site2024
