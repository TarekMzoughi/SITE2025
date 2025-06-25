import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaMicrophone, FaUsers, FaStar, FaRocket, FaLightbulb, FaGraduationCap } from 'react-icons/fa';
import './Program_bright.css';

const Program = () => {
  const speakersData = [
    { name: 'Speaker 2', title: 'CEO', topic: 'Smart factory' },
    { name: 'Speaker 1', title: 'Professor', topic: 'Mechanical Engineering' },
    { name: 'Speaker 3', title: 'Professor', topic: 'Big Data & Security' },
    { name: 'Speaker', title: 'Digital Marketing', topic: 'Marketing' },
  ];

  const scheduleData = {
    'October 24': [
      { time: '14h-15h', event: 'Opening Ceremony' },
      { time: '15h-15h30', event: 'Coffee Break' },
      { time: '15h30-17h', event: 'Plenary Session 1' },
    ],
    'October 25': [
      { time: '9h-10h', event: 'Oral Session 2' },
      { time: '10h-10h30', event: 'Plenary Session 3' },
      { time: '10h30-12h30', event: 'Oral Session 1' },
      { time: '12h30-14:00', event: 'Coffee Break' },
      { time: '14h - 15h', event: 'Plenary Session 2' },
      { time: '15h-15h30', event: 'Lunch Break' },
    ],
    'October 26': [
      { time: '9h-10h', event: 'Special Talk: Event Expert at Multi Conference – Yellow Hall' },
      { time: '10h30-12h', event: 'Panel Discussion: Future of Smart Tech' },
      { time: '12h30-14:00', event: 'Coffee Break' },
    ],
    'Special Session': [
      { time: 'Soon', event: 'To Be Announced' },
    ],
  };

  const [activeTab, setActiveTab] = useState('October 24');
  const activeSessions = scheduleData[activeTab] || [];

  return (
    <div className="program-page">
      <div className="page-container">
        <div className="program-hero">
          <h1 className="hero-title">SITE 2025 Conference Program</h1>
          <p className="hero-subtitle">Join us for an extraordinary journey of innovation, learning, and networking with industry leaders and cutting-edge technology</p>
          <div className="hero-stats">
            <div className="stat-item">
              <FaGraduationCap className="stat-icon" />
              <span className="stat-number">4+</span>
              <span className="stat-label">Expert Speakers</span>
            </div>
            <div className="stat-item">
              <FaCalendarAlt className="stat-icon" />
              <span className="stat-number">3</span>
              <span className="stat-label">Conference Days</span>
            </div>
            <div className="stat-item">
              <FaRocket className="stat-icon" />
              <span className="stat-number">10+</span>
              <span className="stat-label">Innovation Sessions</span>
            </div>
            <div className="stat-item">
              <FaLightbulb className="stat-icon" />
              <span className="stat-number">∞</span>
              <span className="stat-label">Ideas & Insights</span>
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
                  <div className="speaker-topic">
                    <FaMapMarkerAlt className="topic-icon" />
                    {speaker.topic}
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