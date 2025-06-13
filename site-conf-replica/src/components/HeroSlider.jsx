import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ParticleBackground from './ParticleBackground'
import './HeroSlider.css'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "International Conference on Smart Industry, Technology and Environment",
      subtitle: "SITE 2025",
      description: "Join us for the 3rd edition of SITE 2025",
      buttons: [
        { text: "Submission", link: "/", type: "primary" },
        { text: "Read More", link: "/site25", type: "secondary" }
      ]
    },
    {
      id: 2,
      title: "International Conference on Smart Industry, Technology and Environment",
      subtitle: "SITE 2025",
      description: "Your ultimate event solution for academic excellence",
      buttons: [
        { text: "Submission", link: "/", type: "primary" },
        { text: "Read More", link: "/your-ultimate-event-solution", type: "secondary" }
      ]
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="hero-slider">
      <ParticleBackground />
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="slide-content">
              <div className="container">
                <div className="slide-text">
                  <h4>{slide.title}</h4>
                  <h1>{slide.subtitle}</h1>
                  <p>{slide.description}</p>
                  <div className="slide-buttons">
                    {slide.buttons.map((button, btnIndex) => (
                      <Link
                        key={btnIndex}
                        to={button.link}
                        className={`btn ${button.type === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
                      >
                        {button.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Navigation */}
      <div className="slider-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider
