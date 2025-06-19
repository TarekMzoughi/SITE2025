import React from 'react'
import { FaClock, FaMapMarkerAlt, FaUsers, FaMicrophone, FaCoffee, FaUtensils } from 'react-icons/fa'
import './Pages.css'

const Program = () => {
  const keynoteSpeekers = [
    {
      name: "Prof. Dr. Ahmed BENALI",
      title: "Smart Manufacturing in Industry 4.0",
      affiliation: "University of Technology, Tunisia",
      time: "Day 1 - 09:30",
      image: "https://via.placeholder.com/150x150/1e40af/ffffff?text=AB"
    },
    {
      name: "Dr. Marie DUBOIS",
      title: "Sustainable Technologies for Environmental Protection",
      affiliation: "Sorbonne University, France",
      time: "Day 2 - 09:30",
      image: "https://via.placeholder.com/150x150/0891b2/ffffff?text=MD"
    }
  ]

  const programSchedule = [
    {
      day: "Day 1",
      date: "March 15, 2025",
      theme: "Smart Industry & Technology",
      sessions: [
        {
          time: "08:30 - 09:00",
          title: "Registration & Welcome Coffee",
          type: "registration",
          location: "Main Hall",
          icon: <FaCoffee />
        },
        {
          time: "09:00 - 09:15",
          title: "Opening Ceremony",
          type: "ceremony",
          location: "Conference Hall A",
          speaker: "Conference Chair",
          icon: <FaMicrophone />
        },
        {
          time: "09:15 - 10:15",
          title: "Keynote 1: Smart Manufacturing in Industry 4.0",
          type: "keynote",
          location: "Conference Hall A",
          speaker: "Prof. Dr. Ahmed BENALI",
          icon: <FaMicrophone />
        },
        {
          time: "10:15 - 10:45",
          title: "Coffee Break & Networking",
          type: "break",
          location: "Exhibition Area",
          icon: <FaCoffee />
        },
        {
          time: "10:45 - 12:15",
          title: "Session 1A: Smart Industry Technologies",
          type: "session",
          location: "Conference Hall A",
          papers: 6,
          icon: <FaUsers />
        },
        {
          time: "10:45 - 12:15",
          title: "Session 1B: IoT and Smart Systems",
          type: "session",
          location: "Conference Hall B",
          papers: 6,
          icon: <FaUsers />
        },
        {
          time: "12:15 - 13:45",
          title: "Lunch Break",
          type: "break",
          location: "Restaurant Area",
          icon: <FaUtensils />
        },
        {
          time: "13:45 - 15:15",
          title: "Session 2A: Artificial Intelligence",
          type: "session",
          location: "Conference Hall A",
          papers: 6,
          icon: <FaUsers />
        },
        {
          time: "13:45 - 15:15",
          title: "Session 2B: Environmental Technologies",
          type: "session",
          location: "Conference Hall B",
          papers: 6,
          icon: <FaUsers />
        },
        {
          time: "15:15 - 15:45",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area",
          icon: <FaCoffee />
        },
        {
          time: "15:45 - 17:15",
          title: "Poster Session & Networking",
          type: "poster",
          location: "Exhibition Area",
          papers: 25,
          icon: <FaUsers />
        }
      ]
    },
    {
      day: "Day 2",
      date: "March 16, 2025",
      theme: "Environment & Sustainability",
      sessions: [
        {
          time: "09:00 - 09:30",
          title: "Welcome Coffee",
          type: "registration",
          location: "Main Hall",
          icon: <FaCoffee />
        },
        {
          time: "09:30 - 10:30",
          title: "Keynote 2: Sustainable Technologies for Environmental Protection",
          type: "keynote",
          location: "Conference Hall A",
          speaker: "Dr. Marie DUBOIS",
          icon: <FaMicrophone />
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area",
          icon: <FaCoffee />
        },
        {
          time: "11:00 - 12:30",
          title: "Session 3A: Renewable Energy Systems",
          type: "session",
          location: "Conference Hall A",
          papers: 6,
          icon: <FaUsers />
        },
        {
          time: "11:00 - 12:30",
          title: "Session 3B: Smart Cities & Urban Planning",
          type: "session",
          location: "Conference Hall B",
          papers: 6,
          icon: <FaUsers />
        },
        {
          time: "12:30 - 14:00",
          title: "Lunch Break",
          type: "break",
          location: "Restaurant Area",
          icon: <FaUtensils />
        },
        {
          time: "14:00 - 15:30",
          title: "Session 4A: Sustainable Development",
          type: "session",
          location: "Conference Hall A",
          papers: 6,
          icon: <FaUsers />
        },
        {
          time: "14:00 - 15:30",
          title: "Session 4B: Green Technologies",
          type: "session",
          location: "Conference Hall B",
          papers: 6,
          icon: <FaUsers />
        },
        {
          time: "15:30 - 16:00",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area",
          icon: <FaCoffee />
        },
        {
          time: "16:00 - 17:00",
          title: "Panel Discussion: Future of Smart Industry",
          type: "panel",
          location: "Conference Hall A",
          panelists: 5,
          icon: <FaUsers />
        },
        {
          time: "17:00 - 17:30",
          title: "Closing Ceremony & Awards",
          type: "ceremony",
          location: "Conference Hall A",
          icon: <FaMicrophone />
        }
      ]
    }
  ]

  return (
    <div className="page-container program-page">
      <div className="container">
        <div className="page-header">
          <h1>Conference Program</h1>
          <p className="page-subtitle">SITE 2025 - Smart Industry, Technology and Environment</p>
        </div>

        <div className="page-content">
          {/* Conference Overview */}
          <div className="program-overview">
            <div className="overview-stats">
              <div className="stat-card">
                <div className="stat-number">2</div>
                <div className="stat-label">Days</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2</div>
                <div className="stat-label">Keynotes</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">8</div>
                <div className="stat-label">Sessions</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Papers</div>
              </div>
            </div>
          </div>

          {/* Keynote Speakers */}
          <div className="keynote-speakers">
            <h2 className="section-title">Keynote Speakers</h2>
            <div className="speakers-grid">
              {keynoteSpeekers.map((speaker, index) => (
                <div key={index} className="speaker-card">
                  <div className="speaker-image">
                    <img src={speaker.image} alt={speaker.name} />
                  </div>
                  <div className="speaker-info">
                    <h3>{speaker.name}</h3>
                    <h4>{speaker.title}</h4>
                    <p>{speaker.affiliation}</p>
                    <div className="speaker-time">
                      <FaClock /> {speaker.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Program Schedule */}
          <div className="program-schedule">
            <h2 className="section-title">Detailed Program</h2>

            {programSchedule.map((day, dayIndex) => (
              <div key={dayIndex} className="day-program">
                <div className="day-header">
                  <div className="day-info">
                    <h3>{day.day}</h3>
                    <p className="day-date">{day.date}</p>
                    <p className="day-theme">{day.theme}</p>
                  </div>
                </div>

                <div className="sessions-timeline">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className={`session-card ${session.type}`}>
                      <div className="session-time">
                        <FaClock />
                        <span>{session.time}</span>
                      </div>
                      <div className="session-content">
                        <div className="session-icon">
                          {session.icon}
                        </div>
                        <div className="session-details">
                          <h4>{session.title}</h4>
                          {session.speaker && (
                            <p className="session-speaker">
                              <FaMicrophone /> {session.speaker}
                            </p>
                          )}
                          {session.location && (
                            <p className="session-location">
                              <FaMapMarkerAlt /> {session.location}
                            </p>
                          )}
                          {session.papers && (
                            <p className="session-papers">
                              <FaUsers /> {session.papers} papers
                            </p>
                          )}
                          {session.panelists && (
                            <p className="session-panelists">
                              <FaUsers /> {session.panelists} panelists
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Important Information */}
          <div className="program-info">
            <div className="info-grid">
              <div className="info-card">
                <h3>Venue Information</h3>
                <p>Institut Supérieur des Etudes Technologiques de Bizerte</p>
                <p>ADT Bizerte, Tunisia</p>
              </div>
              <div className="info-card">
                <h3>Registration</h3>
                <p>On-site registration available from 08:30 on Day 1</p>
                <p>Please bring your confirmation email</p>
              </div>
              <div className="info-card">
                <h3>Networking</h3>
                <p>Coffee breaks and lunch provide excellent networking opportunities</p>
                <p>Poster session includes refreshments</p>
              </div>
            </div>
          </div>

          <div className="program-note">
            <h3>Important Notes</h3>
            <ul>
              <li>All times are local time (GMT+1)</li>
              <li>Presentation slots are 15 minutes including Q&A</li>
              <li>Poster boards are 120cm x 90cm (portrait orientation)</li>
              <li>WiFi access will be provided throughout the venue</li>
              <li>Lunch and coffee breaks are included in registration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Program
