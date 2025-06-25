import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUsers, FaGraduationCap, FaUserTie } from 'react-icons/fa'
import './Pages.css'

const Registration = () => {
  const navigate = useNavigate()

  const handleRegisterNow = () => {
    navigate('/registration-form')
  }
// Registration fee data
  const registrationWithAccommodation = [
    {
      category: "Academic",
      tunisia: "700 TND",
      international: "450 €",
      icon: <FaGraduationCap />
    },
    {
      category: "Student",
      tunisia: "650 TND",
      international: "400 €",
      icon: <FaUsers />
    },
    {
      category: "Professional",
      tunisia: "750 TND",
      international: "500 €",
      icon: <FaUserTie />
    }
  ]

  const additionalFees = [
    {
      type: "Adult accompanying person",
      tunisia: "120 TND / night",
      international: "80 € / night"
    },
    {
      type: "Single supplement",
      tunisia: "25 TND / night",
      international: "25 € / night"
    },
    {
      type: "Children < 2 years",
      tunisia: "Free",
      international: "Free"
    },
    {
      type: "Child < 12 years with 2 adults",
      tunisia: "50% discount",
      international: "50% discount"
    },
    {
      type: "Child < 12 years in separate room or with single adult",
      tunisia: "30% discount",
      international: "30% discount"
    }
  ]

  const bankDetails = {
    bank: "Union Internationale des Banques",
    address: "Menzel Jemil",
    purpose: "Registration to SITE 2025",
    accountName: "Association de développement technologique de Bizerte",
    accountNumber: "12202000009030939395",
    iban: "TN591220200009030939395",
    swift: "UIBKTNTT",
    tin: "1343117/A",
    email: "contact@site-conf.com"
  }

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>Registration</h1>
          <p className="page-subtitle">SITE 2025 - Smart Industry, Technology and Environment</p>
        </div>

        <div className="page-content">
          {/* Registration Overview */}
          <section className="registration-section">
            <h3>Registration Requirements</h3>
            <p>
              For the inclusion of an accepted paper in the conference, <strong>at least one author</strong> of the paper must register for the congress and pay the fee before the deadline.
            </p>

            <h4>The registration fee covers:</h4>
            <ul>
              <li>All conference materials</li>
              <li>Hotel full boarding in a double room (shared with another participant) for two nights</li>
            </ul>

            <p>You may register to attend the conference either:</p>
            <ul>
              <li>To <strong>present papers</strong></li>
              <li>Or as <strong>audience</strong></li>
            </ul>
            <p>The registration may be <strong>with or without accommodation</strong>.</p>
          </section>

          {/* Check-in/Check-out Information */}
          <section className="registration-section">
            <h3>Accommodation Schedule</h3>
            <p><strong>Arrival (check-in):</strong> October 24th after 12:00</p>
            <p><strong>Departure (check-out):</strong> October 26th before 12:00</p>
          </section>

          {/* Registration Fees - With Accommodation */}
          <section className="registration-section">
            <h3>With Accommodation</h3>
            <table className="registration-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>From Tunisia</th>
                  <th>From other countries</th>
                </tr>
              </thead>
              <tbody>
                {registrationWithAccommodation.map((fee, index) => (
                  <tr key={index}>
                    <td>{fee.category}</td>
                    <td>{fee.tunisia}</td>
                    <td>{fee.international}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Registration Fees - Without Accommodation */}
          <section className="registration-section">
            <h3>Without Accommodation</h3>
            <p>The registration fee covers all conference materials, lunches, and coffee breaks:</p>
            <div className="price-highlight">
              <strong>450 TND</strong>
            </div>
            <p>For more details on accommodation and conference hotel, see <a href="/venue">Venue page</a>.</p>
          </section>

          {/* Payment Methods */}
          <section className="registration-section">
            <h3>Payment Methods</h3>

            <h4>Bank Transfer</h4>
            <ul>
              <li>Pay the full amount <strong>without any deduction</strong> and <strong>all bank charges paid by the beneficiary</strong></li>
              <li><strong>Payment can't be refunded</strong></li>
              <li>Send a <strong>scanned copy</strong> of the payment Banking Transfer Order to: <a href="mailto:contact@site-conf.com">contact@site-conf.com</a></li>
            </ul>

            <h4>Bon de commande</h4>
            <p>(Only for Tunisian Universities)</p>
          </section>

          {/* Bank Account Details */}
          <section className="registration-section">
            <h3>Bank Account Details</h3>

            <h4>Bank Information</h4>
            <p><strong>Bank:</strong> {bankDetails.bank} <a href="#">[Download bank identity]</a></p>
            <p><strong>Address:</strong> {bankDetails.address}</p>
            <p><strong>Purpose:</strong> {bankDetails.purpose}</p>
            <p><strong>Account name:</strong> {bankDetails.accountName}</p>

            <h4>Payment To:</h4>
            <p><strong>Account number:</strong> {bankDetails.accountNumber}</p>
            <p><strong>IBAN:</strong> {bankDetails.iban}</p>
            <p><strong>Swift:</strong> {bankDetails.swift}</p>
            <p><strong>Tax Identification Number (TIN):</strong> {bankDetails.tin} <a href="#">[Download Tax ID]</a></p>
            <p><strong>Registre National des Entreprises (RNE):</strong> <a href="#">[Download RNE]</a></p>
          </section>

          {/* Additional Fees */}
          <section className="registration-section">
            <h3>Additional Fees</h3>
            <table className="registration-table">
              <thead>
                <tr>
                  <th>Fee Type</th>
                  <th>From Tunisia</th>
                  <th>From other countries</th>
                </tr>
              </thead>
              <tbody>
                {additionalFees.map((fee, index) => (
                  <tr key={index}>
                    <td>{fee.type}</td>
                    <td>{fee.tunisia}</td>
                    <td>{fee.international}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h4>Additional Services</h4>
            <p><strong>Airport transfer</strong> (Tunis Carthage Airport ↔ hotel): <strong>50 €</strong></p>
            <p><strong>Additional charges for Social Event:</strong> <strong>100 € / 50 TND</strong></p>
          </section>

          {/* Register Now Button */}
          <section className="registration-section" style={{ textAlign: 'center' }}>
            <button
              className="register-btn"
              onClick={handleRegisterNow}
            >
              Register Now
            </button>
          </section>

          {/* Contact Information */}
          <section className="registration-section">
            <h3>Contact</h3>
            <p><a href="mailto:contact@site-conf.com">contact@site-conf.com</a></p>
            <p>For more information, please contact the organizers.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Registration
