import React, { useState } from 'react'
import { FaFileAlt, FaPlus, FaTimes } from 'react-icons/fa'

const ConferenceOptionsSection = ({ formData, errors, onChange }) => {
  const [newAccompanyingPerson, setNewAccompanyingPerson] = useState({ name: '', age: '' })

  const addAccompanyingPerson = () => {
    if (newAccompanyingPerson.name.trim() && newAccompanyingPerson.age.trim()) {
      const personData = `${newAccompanyingPerson.name.trim()} (${newAccompanyingPerson.age.trim()} years old)`
      
      // Create a synthetic event to update the parent form data
      const syntheticEvent = {
        target: {
          name: 'accompanyingPersons',
          value: [...formData.accompanyingPersons, personData]
        }
      }
      onChange(syntheticEvent)
      setNewAccompanyingPerson({ name: '', age: '' })
    }
  }

  const removeAccompanyingPerson = (index) => {
    const syntheticEvent = {
      target: {
        name: 'accompanyingPersons',
        value: formData.accompanyingPersons.filter((_, i) => i !== index)
      }
    }
    onChange(syntheticEvent)
  }

  return (
    <div className="form-section">
      <h3 className="section-title">
        <FaFileAlt /> Conference Options
      </h3>
      
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="withArticle"
          name="withArticle"
          checked={formData.withArticle}
          onChange={onChange}
        />
        <label htmlFor="withArticle">
          I will present an article/paper at the conference
        </label>
      </div>
      
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="withAccompanying"
          name="withAccompanying"
          checked={formData.withAccompanying}
          onChange={onChange}
        />
        <label htmlFor="withAccompanying">
          I will be accompanied by other persons
        </label>
      </div>

      {formData.withAccompanying && (
        <div className="accompanying-persons-section">
          <h4>Accompanying Persons</h4>
          <div className="add-person-row">
            <input
              type="text"
              value={newAccompanyingPerson.name}
              onChange={(e) => setNewAccompanyingPerson(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter name of accompanying person"
              className="add-person-input"
            />
            <input
              type="number"
              value={newAccompanyingPerson.age}
              onChange={(e) => setNewAccompanyingPerson(prev => ({ ...prev, age: e.target.value }))}
              placeholder="Age"
              className="add-person-age-input"
              min="0"
              max="120"
            />
            <button
              type="button"
              onClick={addAccompanyingPerson}
              className="add-person-btn"
            >
              <FaPlus /> Add
            </button>
          </div>
          
          {formData.accompanyingPersons.length > 0 && (
            <div className="accompanying-persons-list">
              {formData.accompanyingPersons.map((person, index) => (
                <div key={index} className="accompanying-person-item">
                  <span>{person}</span>
                  <button
                    type="button"
                    onClick={() => removeAccompanyingPerson(index)}
                    className="remove-person-btn"
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
          )}
          
          {errors.accompanyingPersons && <span className="error-message">{errors.accompanyingPersons}</span>}
        </div>
      )}
    </div>
  )
}

export default ConferenceOptionsSection
