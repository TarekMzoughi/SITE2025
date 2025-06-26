import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaMicrophone, FaUsers, FaStar } from 'react-icons/fa';
import './Program_Premium.css';

const Program = () => {
  const speakersData = [
  {
    name: 'Speaker',
    title: 'CEO',
    topic: 'Smart Factory'
  },
  {
    name: 'Speaker',
    title: 'Professor',
    topic: 'Mechanical Engineering'
  },
  {
    name: 'Speaker',
    title: 'Professor',
    topic: 'Big Data & Security'
  },
  {
    name: 'Speaker',
    title: 'Digital Marketing',
    topic: 'Marketing'
  }
];

  const scheduleData = {
    'October 24': [
      { time: '08:30-09:00', event: 'Registration & Welcome Coffee' },
      { time: '09:00-09:30', event: 'Opening Ceremony' },
      { time: '09:30-10:30', event: 'Keynote: Future of Smart Industry' },
      { time: '10:30-11:00', event: 'Coffee Break' },
      { time: '11:00-12:30', event: 'Technical Session 1: IoT & Smart Systems' },
      { time: '12:30-14:00', event: 'Lunch Break' },
      { time: '14:00-15:30', event: 'Technical Session 2: AI & Machine Learning' },
      { time: '15:30-16:00', event: 'Coffee Break' },
      { time: '16:00-17:30', event: 'Panel Discussion: Industry 4.0 Trends' },
    ],
    'October 25': [
      { time: '09:00-10:00', event: 'Keynote: Sustainable Technology Solutions' },
      { time: '10:00-10:30', event: 'Coffee Break' },
      { time: '10:30-12:00', event: 'Technical Session 3: Environmental Technology' },
      { time: '12:00-13:30', event: 'Lunch Break' },
      { time: '13:30-15:00', event: 'Technical Session 4: Smart Manufacturing' },
      { time: '15:00-15:30', event: 'Coffee Break' },
      { time: '15:30-17:00', event: 'Workshop: Hands-on Smart Systems' },
      { time: '17:00-18:00', event: 'Poster Session & Networking' },
    ],
    'October 26': [
      { time: '09:00-10:00', event: 'Keynote: Digital Transformation in Industry' },
      { time: '10:00-10:30', event: 'Coffee Break' },
      { time: '10:30-12:00', event: 'Technical Session 5: Cybersecurity & Data Analytics' },
      { time: '12:00-13:30', event: 'Lunch Break' },
      { time: '13:30-15:00', event: 'Technical Session 6: Emerging Technologies' },
      { time: '15:00-15:30', event: 'Coffee Break' },
      { time: '15:30-16:30', event: 'Closing Ceremony & Awards' },
    ],
    'Special Sessions': [
      { time: 'soon', event: 'to be annonced ' },
    ],
  };

  const [activeTab, setActiveTab] = useState('October 24');
  const activeSessions = scheduleData[activeTab] || [];

  return (
    <div className="program-page">
      <div className="page-container">
        <div className="program-hero">
          <h1 className="hero-title">SITE 2025 Conference Program</h1>
          <p className="hero-subtitle">Discover our exciting lineup of speakers, sessions, and cutting-edge research presentations</p>
          <div className="hero-stats">
            <div className="stat-item">
              <FaUsers className="stat-icon" />
              <span className="stat-number">4</span>
              <span className="stat-label">Expert Speakers</span>
            </div>
            <div className="stat-item">
              <FaCalendarAlt className="stat-icon" />
              <span className="stat-number">3</span>
              <span className="stat-label">Conference Days</span>
            </div>
            <div className="stat-item">
              <FaMicrophone className="stat-icon" />
              <span className="stat-number">10+</span>
              <span className="stat-label">Sessions</span>
            </div>
          </div>
        </div>

        <div className="speakers-section">
          <div className="section-header">
            <h2 className="section-title">
              <FaStar className="title-icon" />
              Our Distinguished Speakers
            </h2>
            <p className="section-subtitle">Meet the industry experts who will share their insights</p>
          </div>
          <div className="speakers-grid">
            {speakersData.map((speaker, index) => (
              <div key={index} className="speaker-card">
                <div className="speaker-image-container">
                  <img
                    src="/site 2025 (5).png"
                    alt="SITE 2025 Conference Logo"
                    className="speaker-logo"
                  />
                </div>
                <div className="speaker-info">
                  <h3>{speaker.name}</h3>
                  <p className="speaker-title">{speaker.title}</p>
                  <p className="speaker-company">{speaker.company}</p>
                  <div className="speaker-topic">
                    <FaMicrophone className="topic-icon" />
                    {speaker.topic}
                  </div>
                  <div className="speaker-expertise">
                    {speaker.expertise}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="schedule-section">
          <div className="section-header">
            <h2 className="section-title">
              <FaCalendarAlt className="title-icon" />
              Program Schedule
            </h2>
            <p className="section-subtitle">Plan your conference experience day-by-day</p>
          </div>

          <div className="schedule-container">
            <div className="schedule-tabs">
              {Object.keys(scheduleData).map((day) => (
                <button
                  key={day}
                  className={`tab-item ${activeTab === day ? 'active' : ''}`}
                  onClick={() => setActiveTab(day)}
                >
                  <FaCalendarAlt className="tab-icon" />
                  {day}
                </button>
              ))}
            </div>

            <div className="schedule-content">
              {activeSessions.map((session, index) => (
                <div key={index} className="session-item">
                  <div className="session-time">
                    <FaClock /> {session.time}
                  </div>
                  <div className="session-event">
                    <FaMicrophone /> {session.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;