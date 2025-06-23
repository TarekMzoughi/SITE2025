import React from 'react'
import useRegistrationForm from '../hooks/useRegistrationForm'
import PersonalInfoSection from '../components/forms/PersonalInfoSection'
import ConferenceOptionsSection from '../components/forms/ConferenceOptionsSection'
import PaymentInfoSection from '../components/forms/PaymentInfoSection'
import FormActions from '../components/forms/FormActions'
import './Pages.css'

const RegistrationForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit
  } = useRegistrationForm()

  return (
    <div className="page-container registration-form-page">
      <div className="container">
        <div className="page-header">
          <h1>Conference Registration Form</h1>
          <p className="page-subtitle">SITE 2025 - Smart Industry, Technology and Environment</p>
        </div>

        <div className="page-content">
          <form onSubmit={handleSubmit} className="registration-form">

            <PersonalInfoSection
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
            />

            <ConferenceOptionsSection
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
            />

            <PaymentInfoSection
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
            />

            <FormActions
              isSubmitting={isSubmitting}
              onSubmit={handleSubmit}
            />

          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm