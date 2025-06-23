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
      description: "Shaping the Future of Smart Manufacturing, IoT Innovation, and Sustainable Technology Solutions",
      highlight: "March 15-17, 2025 • Tunis, Tunisia",
      // Add background image for each slide
      backgroundImage: "/slider1.jpg",
      buttons: [
        { text: "Submit Paper", link: "/submission", type: "primary", icon: "📄" },
        { text: "Learn More", link: "/about", type: "secondary", icon: "🔍" }
      ]
    },
    {
      id: 2,
      title: "Cutting-Edge Research & Innovation",
      subtitle: "AI & Industry 4.0",
      description: "Explore breakthrough technologies in Artificial Intelligence, Machine Learning, and Smart Manufacturing",
      highlight: "500+ Researchers • 50+ Countries",
      backgroundImage: "/slider3.jpg",
      buttons: [
        { text: "View Program", link: "/program", type: "primary", icon: "📅" },
        { text: "Register Now", link: "/registration", type: "secondary", icon: "🎫" }
      ]
    },
    {
      id: 3,
      title: "Sustainable Technology Solutions",
      subtitle: "Green Innovation",
      description: "Discover eco-friendly technologies and sustainable practices for a better tomorrow",
      highlight: "Carbon Neutral Event • Green Tech Focus",
      backgroundImage: "/slider2.jpg",
      buttons: [
        { text: "Call for Papers", link: "/call-for-papers", type: "primary", icon: "📝" },
        { text: "Sponsors", link: "/sponsors", type: "secondary", icon: "🤝" }
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
      <div className="tech-overlay"></div>
      <div className="data-flow"></div>

      {/* Floating Tech Elements */}
      <div className="floating-elements">
        <div className="floating-icon floating-icon-1">🔬</div>
        <div className="floating-icon floating-icon-2">⚡</div>
        <div className="floating-icon floating-icon-3">🌱</div>
        <div className="floating-icon floating-icon-4">🤖</div>
        <div className="floating-icon floating-icon-5">💡</div>
        <div className="floating-icon floating-icon-6">🔗</div>
      </div>

      {/* Animated Background Shapes */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `
                linear-gradient(
                  135deg,
                  rgba(15, 23, 42, 0.8) 0%,
                  rgba(30, 41, 59, 0.7) 30%,
                  rgba(51, 65, 85, 0.6) 60%,
                  rgba(71, 85, 105, 0.7) 100%
                ),
                url(${slide.backgroundImage})
              `,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="slide-content">
              <div className="container">
                <div className="slide-text">
                  <div className="slide-badge">
                    <span className="badge-icon">🚀</span>
                    <span className="badge-text">{slide.title}</span>
                  </div>
                  <h1 className="slide-title">
                    <span className="title-main">{slide.subtitle}</span>
                    <span className="title-year">2025</span>
                  </h1>
                  <p className="slide-description">{slide.description}</p>
                  <div className="slide-highlight">
                    <span className="highlight-icon">✨</span>
                    <span className="highlight-text">{slide.highlight}</span>
                  </div>
                  <div className="slide-buttons">
                    {slide.buttons.map((button, btnIndex) => (
                      <Link
                        key={btnIndex}
                        to={button.link}
                        className={`btn ${button.type === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
                      >
                        <span className="btn-icon">{button.icon}</span>
                        <span className="btn-text">{button.text}</span>
                        <span className="btn-arrow">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Slider Navigation */}
      <div className="slider-nav">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`nav-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}: ${slide.subtitle}`}
          >
            <span className="indicator-dot"></span>
            <span className="indicator-label">{slide.subtitle}</span>
            <span className="indicator-progress"></span>
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="slide-counter">
        <span className="current-slide">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="slide-separator">/</span>
        <span className="total-slides">{String(slides.length).padStart(2, '0')}</span>
      </div>
    </section>
  )
}

export default HeroSlider