import React from 'react'
import './Pages.css'

const OrganizingCommittee = () => {
  const members = [
    "Abdelbacet MHAMDI",
    "Ali BEJAOUI",
    "Aymen ELAMRAOUI",
    "Badreddine LARBI",
    "Bilel ZEMZEM",
    "Boudour BARATLI",
    "Dalila AMARA",
    "Faten SAIDANE",
    "Hajer BEN HAMMOUDA",
    "Hmaied HMIDA",
    "Houda KHATERCHI",
    "Imen FARHAT",
    "Imen JAMMALI",
    "Jihed Zghal",
    "Jihen BOKRI",
    "Kamel KAROUI",
    "Ltaief LAMMARI",
    "Malek KHADHRAOUI",
    "Mohamed Ali REZGUI",
    "Mohamed Radhouene MEJRI",
    "Mohamed GHARBI",
    "Mohamed Toumi NASRI",
    "Mounir BEN MUSTAPHA",
    "Naoufel FARES",
    "Nourallah AOUINA",
    "Ramzi BEN CHEHIDA",
    "Salah BEJAOUI",
    "Samira BOUMOUS",
    "Sana DILOU",
    "Souhaib AMDOUNI",
    "Yamna BEN JEMAA",
    "Yosr Zina ABDELKRIM",
    "Zouhir BOUMOUS"
  ]

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>Organizing Committee</h1>
        </div>
        
        <div className="page-content">
          <div className="general-chair">
            <h2>General Chair: <strong>Manel Khaterchi (ISET Bizerte)</strong></h2>
          </div>

          <div className="committee-members">
            <h2>Members</h2>
            <div className="members-grid">
              {members.map((member, index) => (
                <div key={index} className="member-item">
                  <strong>{member}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrganizingCommittee
