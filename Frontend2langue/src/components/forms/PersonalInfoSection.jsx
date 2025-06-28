import React from 'react'
import { FaUser } from 'react-icons/fa'

const PersonalInfoSection = ({ formData, errors, onChange }) => {
  return (
    <div className="form-section">
      <h3 className="section-title">
        <FaUser /> Personal Information
      </h3>
      
      <div className="form-group">
        <label htmlFor="fullName">Full Name *</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={onChange}
          className={errors.fullName ? 'error' : ''}
          placeholder="Enter your full name"
        />
        {errors.fullName && <span className="error-message">{errors.fullName}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="institution">Institution *</label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={formData.institution}
            onChange={onChange}
            className={errors.institution ? 'error' : ''}
            placeholder="Enter your institution/organization"
          />
          {errors.institution && <span className="error-message">{errors.institution}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="position">Position *</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={onChange}
            className={errors.position ? 'error' : ''}
            placeholder="Enter your position or title"
          />
          {errors.position && <span className="error-message">{errors.position}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className={errors.email ? 'error' : ''}
            placeholder="Enter your email address"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            className={errors.phone ? 'error' : ''}
            placeholder="Enter your phone number"
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
      </div>
    </div>
  )
}

export default PersonalInfoSection
