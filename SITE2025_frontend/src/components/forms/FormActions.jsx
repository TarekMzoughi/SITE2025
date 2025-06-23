import React from 'react'
import { FaCheck } from 'react-icons/fa'

const FormActions = ({ isSubmitting, onSubmit }) => {
  return (
    <div className="form-actions">
      <button 
        type="submit" 
        className="submit-btn"
        disabled={isSubmitting}
        onClick={onSubmit}
      >
        {isSubmitting ? (
          <>Submitting...</>
        ) : (
          <>
            <FaCheck /> Submit Registration
          </>
        )}
      </button>
    </div>
  )
}

export default FormActions
