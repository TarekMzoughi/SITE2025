import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCheck, FaClock, FaUsers, FaGraduationCap, FaBuilding, FaCalendarAlt, FaEnvelope, FaCreditCard } from 'react-icons/fa'
import './Pages.css'

const Registration = () => {
  const [selectedType, setSelectedType] = useState(null)
  const navigate = useNavigate()

  // Check if registration is open (January 15, 2025) and closed (March 10, 2025)
  const registrationOpenDate = new Date('2025-01-15')
  const registrationCloseDate = new Date('2026-03-10')

  const isRegistrationOpen = () => {
    const currentDate = new Date()
    return currentDate >= registrationOpenDate && currentDate <= registrationCloseDate
  }

  const isRegistrationClosed = () => {
    const currentDate = new Date()
    return currentDate > registrationCloseDate
  }

  // Format the registration open date for display
  const formatRegistrationDate = () => {
    return registrationOpenDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Format the early bird deadline date
  const formatEarlyBirdDeadline = () => {
    const earlyBirdDeadline = new Date(registrationOpenDate)
    earlyBirdDeadline.setDate(registrationOpenDate.getDate() + 44) // 44 days after registration opens
    return earlyBirdDeadline.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Format the registration close date
  const formatRegistrationCloseDate = () => {
    return registrationCloseDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleRegisterNow = () => {
    navigate('/registration-form')
  }

  const registrationTypes = [
    {
      id: "student",
      type: "Student Registration",
      icon: <FaGraduationCap />,
      earlyBird: "150€",
      regular: "200€",
      popular: false,
      description: "For full-time students with valid student ID",
      includes: [
        "Conference attendance (2 days)",
        "Conference materials & bag",
        "Coffee breaks & refreshments",
        "Lunch (2 days)",
        "Access to poster sessions",
        "Certificate of participation",
        "WiFi access"
      ]
    },
    {
      id: "academic",
      type: "Academic Registration",
      icon: <FaUsers />,
      earlyBird: "250€",
      regular: "300€",
      popular: true,
      description: "For researchers, professors, and academic staff",
      includes: [
        "Conference attendance (2 days)",
        "Conference materials & bag",
        "Coffee breaks & refreshments",
        "Lunch (2 days)",
        "Welcome reception",
        "Access to poster sessions",
        "Networking events",
        "Certificate of participation",
        "WiFi access",
        "Proceedings (digital)"
      ]
    },
    {
      id: "industry",
      type: "Industry Registration",
      icon: <FaBuilding />,
      earlyBird: "350€",
      regular: "400€",
      popular: false,
      description: "For industry professionals and practitioners",
      includes: [
        "Conference attendance (2 days)",
        "Conference materials & bag",
        "Coffee breaks & refreshments",
        "Lunch (2 days)",
        "Welcome reception",
        "Access to poster sessions",
        "Networking events",
        "Industry panel access",
        "Certificate of participation",
        "WiFi access",
        "Proceedings (digital & print)",
        "Priority seating"
      ]
    }
  ]

  // Generate important dates based on registration open and close dates
  const generateImportantDates = () => {
    const regDate = new Date(registrationOpenDate)
    const earlyBirdDeadline = new Date(regDate)
    earlyBirdDeadline.setDate(regDate.getDate() + 44) // 44 days after registration opens

    const conferenceStart = new Date(registrationCloseDate)
    conferenceStart.setDate(registrationCloseDate.getDate() + 5) // 5 days after registration closes

    const conferenceEnd = new Date(conferenceStart)
    conferenceEnd.setDate(conferenceStart.getDate() + 1) // Next day

    return [
      {
        date: formatRegistrationDate(),
        event: "Early Bird Registration Opens",
        status: "upcoming"
      },
      {
        date: earlyBirdDeadline.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        event: "Early Bird Registration Deadline",
        status: "upcoming"
      },
      {
        date: formatRegistrationCloseDate(),
        event: "Registration Deadline",
        status: "upcoming"
      },
      {
        date: `${conferenceStart.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric'
        })}-${conferenceEnd.getDate()}, ${conferenceStart.getFullYear()}`,
        event: "Conference Dates",
        status: "upcoming"
      }
    ]
  }

  const importantDates = generateImportantDates()

  return (
    <div className="page-container registration-page">
      <div className="container">
        <div className="page-header">
          <h1>Conference Registration</h1>
          <p className="page-subtitle">Join us at SITE 2025 - Smart Industry, Technology and Environment</p>
        </div>

        <div className="page-content">
          {/* Registration Status */}
          <div className="registration-status">
            <div className="status-card">
              <h3>Registration Status</h3>
              {isRegistrationClosed() ? (
                <div className="registration-closed">
                  <p className="status-message error">
                    <FaClock /> Registration closed on {formatRegistrationCloseDate()}
                  </p>
                  <p>Registration is no longer available for this conference.</p>
                </div>
              ) : isRegistrationOpen() ? (
                <div className="registration-open">
                  <p className="status-message success">
                    <FaCheck /> Registration is now open!
                  </p>
                  <p>Early bird discounts available until {formatEarlyBirdDeadline()}</p>
                  <p>Registration closes on {formatRegistrationCloseDate()}</p>
                  <button
                    className="register-now-btn"
                    onClick={handleRegisterNow}
                  >
                    Register Now
                  </button>
                </div>
              ) : (
                <div className="registration-not-open">
                  <p className="status-message">
                    <FaClock /> Registration opens {formatRegistrationDate()}
                  </p>
                  <p>Early bird discounts available until {formatEarlyBirdDeadline()}</p>
                  <p>Registration closes on {formatRegistrationCloseDate()}</p>
                </div>
              )}
            </div>
          </div>

          {/* Important Dates */}
          <div className="important-dates-section">
            <h2 className="section-title">Important Dates</h2>
            <div className="dates-timeline">
              {importantDates.map((item, index) => (
                <div key={index} className="date-item">
                  <div className="date-marker"></div>
                  <div className="date-content">
                    <div className="date-date">
                      <FaCalendarAlt /> {item.date}
                    </div>
                    <div className="date-event">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Types */}
          <div className="registration-types">
            <h2 className="section-title">Registration Types & Fees</h2>
            <div className="types-grid">
              {registrationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`registration-card ${type.popular ? 'popular' : ''} ${selectedType === type.id ? 'selected' : ''}`}
                  onClick={() => setSelectedType(selectedType === type.id ? null : type.id)}
                >
                  {type.popular && <div className="popular-badge">Most Popular</div>}

                  <div className="card-header">
                    <div className="card-icon">{type.icon}</div>
                    <h3>{type.type}</h3>
                    <p className="card-description">{type.description}</p>
                  </div>

                  <div className="pricing">
                    <div className="price-row">
                      <span className="price-label">Early Bird</span>
                      <span className="price-value early-bird">{type.earlyBird}</span>
                    </div>
                    <div className="price-row">
                      <span className="price-label">Regular</span>
                      <span className="price-value regular">{type.regular}</span>
                    </div>
                  </div>

                  <div className="includes-section">
                    <h4>What's Included:</h4>
                    <ul className="includes-list">
                      {type.includes.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <FaCheck className="check-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="select-button" disabled>
                    Registration Opens Soon
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Process */}
          <div className="registration-process">
            <h2 className="section-title">How to Register</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Choose Registration Type</h4>
                  <p>Select the registration category that best fits your profile</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Complete Registration Form</h4>
                  <p>Fill out the online form with your personal and professional details</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Make Payment</h4>
                  <p>Secure online payment via credit card or bank transfer</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Receive Confirmation</h4>
                  <p>Get your registration confirmation and conference details via email</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="payment-info">
            <h2 className="section-title">Payment Information</h2>
            <div className="payment-grid">
              <div className="payment-card">
                <FaCreditCard className="payment-icon" />
                <h4>Accepted Payment Methods</h4>
                <ul>
                  <li>Credit Cards (Visa, MasterCard, American Express)</li>
                  <li>Bank Transfer</li>
                  <li>PayPal</li>
                  <li>On-site payment (subject to availability)</li>
                </ul>
              </div>
              <div className="payment-card">
                <FaEnvelope className="payment-icon" />
                <h4>Invoice & Receipt</h4>
                <ul>
                  <li>Official invoice sent via email</li>
                  <li>Receipt provided upon payment confirmation</li>
                  <li>VAT included in all prices</li>
                  <li>Refund policy available on request</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="registration-contact">
            <h2 className="section-title">Need Help?</h2>
            <div className="contact-card">
              <h4>Registration Support</h4>
              <p>
                For questions about registration, payment, or special requirements,
                please don't hesitate to contact our registration team.
              </p>
              <div className="contact-details">
                <p><FaEnvelope /> <a href="mailto:registration@site-conf.com">registration@site-conf.com</a></p>
                <p><FaEnvelope /> <a href="mailto:contact@site-conf.com">contact@site-conf.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
