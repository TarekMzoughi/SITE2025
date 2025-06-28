import React from 'react'
import { FaCreditCard, FaUpload } from 'react-icons/fa'

const PaymentInfoSection = ({ formData, errors, onChange }) => {
  const paymentMethods = [
    { value: 'paiement_par_virement_bancaire', label: 'Paiement par virement bancaire' },
    { value: 'paiement_par_mandat_administratif', label: 'Paiement par mandat administratif (bons de commande)' },
    { value: 'paiement_par_cheque', label: 'Paiement par chèque' }
  ]

  return (
    <div className="form-section">
      <h3 className="section-title">
        <FaCreditCard /> Payment Information
      </h3>
      
      <div className="form-group">
        <label htmlFor="paymentMethod">Payment Method *</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={onChange}
          className={errors.paymentMethod ? 'error' : ''}
        >
          <option value="">Select payment method</option>
          {paymentMethods.map((method) => (
            <option key={method.value} value={method.value}>
              {method.label}
            </option>
          ))}
        </select>
        {errors.paymentMethod && <span className="error-message">{errors.paymentMethod}</span>}
      </div>

      {/* Display calculated total for reference */}
      {formData.calculatedTotal > 0 && (
        <div className="payment-summary">
          <h4>Payment Summary</h4>
          <div className="total-amount">
            <span>Total Amount to Pay:</span>
            <span className="amount-value">
              {formData.calculatedTotal} {formData.currency}
            </span>
          </div>
          <p className="payment-note">
            Please ensure your payment matches this exact amount. The payment amount is automatically calculated based on your registration selections.
          </p>
        </div>
      )}

      {formData.paymentMethod && (
        <div className="form-group">
          <label htmlFor="paymentProofPath">Payment Proof *</label>
          <div className="file-upload-container">
            <input
              type="file"
              id="paymentProofPath"
              name="paymentProofPath"
              onChange={onChange}
              accept="image/*"
              className={`file-input ${errors.paymentProofPath ? 'error' : ''}`}
            />
            <label htmlFor="paymentProofPath" className="file-upload-label">
              <FaUpload /> 
              {formData.paymentProofPath ? formData.paymentProofPath.name : 'Choose image file'}
            </label>
          </div>
          <p className="file-help-text">Upload an image of your payment receipt or proof</p>
          {errors.paymentProofPath && <span className="error-message">{errors.paymentProofPath}</span>}
        </div>
      )}
    </div>
  )
}

export default PaymentInfoSection
