import React from 'react'
import usePageTranslation from '../hooks/usePageTranslation'

const OrganizingCommittee = () => {
  const { title } = usePageTranslation('organizingCommittee')
  const members = [
    "Abdelbacet MHAMDI",
    "Ali BEJAOUI",
    "Ali TRABELSI",
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
    "Jihed ZGHAL",
    "Jihen BOKRI",
    "Kamel KAROUI",
    "Latifa TRABELSI",
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
    "Zouhir BOUMOUS",
  ]

  return (
    <>
      <style jsx>{`
        

        .main-title {
          font-size: 3rem;
          font-weight: bold;
          background: linear-gradient(135deg, #2563eb, #1d4ed8, #1e40af);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 16px;
          display: inline-block;
        }

        .title-underline {
          width: 96px;
          height: 4px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          margin: 0 auto;
          border-radius: 2px;
        }

        .members-section {
          margin: 48px;
        }

        .section-container {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .section-title {
          font-size: 2rem;
          font-weight: bold;
          color: #1f2937;
          text-align: center;
          margin-bottom: 32px;
        }

        .members-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }

        .member-card {
          padding: 16px;
          border-radius: 12px;
          background: linear-gradient(135deg, #ffffff, #eff6ff);
          border: 1px solid #dbeafe;
          transition: all 0.3s ease;
        }

        .member-card:hover {
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          border-color: #93c5fd;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
          transform: translateY(-2px);
        }

        .member-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .member-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg,  #2563eb,rgb(178, 194, 229));
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .member-dot {
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
        }

        .member-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        .member-card:hover .member-name {
          color: #2563eb;
        }


        @media (max-width: 768px) {
          .main-title {
            font-size: 2rem;
          }
          
          .members-grid {
            grid-template-columns: 1fr;
          }
          
          
          
        }
      `}</style>

      <div className="container">
        <div className="main-content">
          {/* Header Section */}
          <div >
            <h1 className="main-title">{title}</h1>
            <div className="title-underline"></div>
          </div>


          {/* Committee Members */}
          <div className="members-section">
            <div className="section-container">
              <h2 className="section-title">{getText('organizingCommittee.membersTitle')}</h2>
              <div className="members-grid">
                {members.map((member, index) => (
                  <div key={index} className="member-card">
                    <div className="member-content">
                      <div className="member-icon">
                        <div className="member-dot"></div>
                      </div>
                      <p className="member-name">{member}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrganizingCommittee