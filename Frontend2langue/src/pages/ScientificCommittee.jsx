import React from 'react'
import usePageTranslation from '../hooks/usePageTranslation'

const ScientificCommittee = () => {
  const { title } = usePageTranslation('scientificCommittee')
  const chairs = [
    {
      title: "General Chair",
      name: "Mrs. Manel KHATERCHI",
      image: "/manel.jpg"
    },
    {
      title: "Scientific Chair",
      name: "Pr. Hassene SEDDIK",
      image: "/hassene.png"
    },
    {
      title: "Scientific Co-Chair",
      name: "Pr. Mohamed Ali REZGUI",
      image: "/ali.png"
    },
    {
      title: "Scientific Co-Chair",
      name: "Pr. Isabelle Bruant-Ricciardi",
      image: "/Isabelle.png"
    }
  ]

  const proceedingCommittee = [
    {
      name: "Mohamed SOULA (ENIT)",
      image: "/soula.jpg"
    },
    {
      name: "Ali TRABELSI (ENSIT)",
      image: "/Ali TRABELSI.jpg"
    },
    {
      name: "Jamel BELHADJ (HIDE – ENSIT)",
      image: "/jamelBelhadj.jpg"
    },
    {
      name: "Mohamedali SHIRINBAYAN (ENSAM Paris)",
      image: "/Mohammadali SHIRINBAYAN.jpg"
    },
  ]

  const members = [
    "Abdallah NASSOUR (Rostock University, Germany)",
    "Abdelaziz SAHBANI (FSB, Tunisia)",
    "Adel BECHIKH (ISET Rades, Tunisia)",
    "Afef ABDELKRIM (ENICarthage, Tunisia)",
    "Anis HAMROUNI (UVT, Tunisia)",
    "Atef BOULILA (INSAT, Tunisia)",
    "Badreddine RATNI (Université Paris Nanterre, France)",
    "Basma LAMOUCHI (ENSIT, Tunisia)",
    "Bechir ALLOUCH (UVT, Tunisia)",
    "Besma BEN SALAH (ISET Sousse, Tunisia)",
    "Chiraz GHARBI (ISET Bizerte, Tunisia)",
    "Faouzi BACHA (ENSIT, Tunisia)",
    "Faouzi BOUANI (ENIT, Tunisia)",
    "Ferid KOURDA (ENIT, Tunisia)",
    "Foued LANDOLSI (ISET Nabeul, Tunisia)",
    "Habib SMEI (ISET Rades, Tunisia)",
    "Hamdi JMAL (IUT de Haguenau, France)",
    "Hassen KHARROUBI (ESIM, Tunisia)",
    "Hechmi KHATERCHI (UVT, Tunisia)",
    "Houria GHODBANE (Souk Ahras University, Algeria)",
    "Houyem ABDERRAZEK (INRAP, Tunisia)",
    "Jamel MEJRI (ESIM, Tunisia)",
    "Jihed ZGHAL (IUT Paris Nanterre, France)",
    "Jihen ARBI ZIANI (ParisTech, France)",
    "Kamel BEN SAAD (ENIT, Tunisia)",
    "Kamel MESSAOUDI (Souk Ahras University, Algeria)",
    "Khaled BOUGHZALA (ISET Ksar Hellal, Tunisia)",
    "Khaled EL MOUEDDEB (ENSIM, Tunisia)",
    "Kaouther GHOZZI (ISET Radès, Tunisia)",
    "Kerstin KUCHTA (TUHH, Germany)",
    "Latifa RABAI (ISG, Tunisia)",
    "Malek KHADRAOUI (ISET Kasserine, Tunisia)",
    "Mahfoudh AYADI (ENIB, Tunisia)",
    "Mehdi TURKI (ESIM, Tunisia)",
    "Mehrez ROMDHANE (ENIG, Tunisia)",
    "Mohamed Fadhel SAAD (ISET Gafsa, Tunisia)",
    "Mohamed Habib SELLAMI (ESIM, Tunisia)",
    "Mohamed Toumi NASRI (ENIB, Tunisia)",
    "Monia GUIZA (ENIG, Tunisia)",
    "Mounir BEN MUSTAPHA (ISET Bizerte, Tunisia)",
    "Mounir FRIJA (ISSAT Sousse, Tunisia)",
    "Moktar HAMDI (INSAT, Tunisia)",
    "Moncef BEN SMIDA (INSAT, Tunisia)",
    "Noureddine BEN YAHYA (ENSIT, Tunisia)",
    "Noureddine HAJJAJI (ENIG, Tunisia)",
    "Rached GHARBI (ENSIT, Tunisia)",
    "Rachid NASRI (ENIT, Tunisia)",
    "Rainer STEGMANN (TUHH, Germany)",
    "Riad TOUFOUTI (Souk Ahras University, Algeria)",
    "Ridha AZIZI (ISET Sousse, Tunisia)",
    "Ridha KHEDRI (McMaster University, Canada)",
    "Rima ABBASSI (ISETCom, Tunisia)",
    "Sabri MESAOUDI (Qassim University, KSA)",
    "Salah BEJAOUI (ISET Bizerte, Tunisia)",
    "Sami BELLALAH (ISET Nabeul, Tunisia)",
    "Samira BOUMOUS (Souk Ahras University, Algeria)",
    "Samuel BERTHE (IUT de Schiltigheim, France)",
    "Sana BENKHLIFA (ESIM, Tunisia)",
    "Sawssen EL EUCH (ISET Rades, Tunisia)",
    "Sherien EL AGROUDY (Ain Shems University, Egypt)",
    "Sina OUERIMI (ISET Gabès, Tunisia)",
    "Skander REJEB (ENIG Gabès, Tunisia)",
    "Slaheddine KHELIFI (ISET Bizerte, Tunisia)",
    "Taoufik MHAMDI (ISET Kasserine, Tunisia)",
    "Tarek HAMROUNI (ISAMM, Tunisia)",
    "Toufik THELLAIDJIA (Souk Ahras University, Algeria)",
    "Walid BARHOUMI (ENICarthage, Tunisia)",
    "Yacine SAHRAOUI (University Soukahras, Algeria)",
    "Yahia KOURD (University Soukahras, Algeria)",
    "Youssef AGUERBI ZORGANI (ISET Sfax, Tunisia)",
    "Zouhir BOUMOUS (Souk Ahras University, Algeria)",
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
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          margin: 0 auto;
          border-radius: 2px;
        }

        .section-title {
          font-size: 2rem;
          font-weight: bold;
          color: #1f2937;
          text-align: center;
          margin-bottom: 40px;
        }

        .chairs-grid {
          display: grid;
          grid-template-columns: repeat(1fr, minmax(500px, 1fr));
          gap: 32px;
          margin-bottom: 64px;
        }

        .chair-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          text-align: center;
        }

        .chair-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: #a7f3d0;
        }

        .profile-image {
          width: 300px;
          height: 300px;
          margin: 0 auto 16px;
          position: relative;
        }

        .profile-image-ring {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #34d399, #06b6d4);
          padding: 2px;
          transition: transform 0.3s ease;
        }

        .chair-card:hover .profile-image-ring {
          transform: scale(1.05);
        }

        .profile-image-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #e5e7eb;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .chair-title {
          color: bleu;
          font-size: 1rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
          display: inline-block;
          margin-bottom: 8px;
        }

        .chair-name {
          font-size: 1.125rem;
          font-weight: bold;
          color: #1f2937;
          transition: color 0.3s ease;
        }

        .chair-card:hover .chair-name {
          color: #059669;
        }

        .section-container {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .proceeding-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
        }

        .proceeding-card {
          background: linear-gradient(135deg, #ffffff, #ecfdf5);
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          border: 1px solid #d1fae5;
          transition: all 0.3s ease;
          text-align: center;
        }

        .proceeding-card:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          border-color:  #2563eb;
          
        }

        .proceeding-image {
          width: 150px;
          height: 150px;
          margin: 0 auto 12px;
        }

        .proceeding-image-ring {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #34d399, #14b8a6);
          padding: 2px;
        }

        .proceeding-image-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #e5e7eb;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .proceeding-name {
        padding-top:7%;
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          transition: color 0.3s ease;
        }

        .proceeding-card:hover .proceeding-name {
          color: #059669;
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
          
          .section-title {
            font-size: 1.5rem;
          }
          
          .chairs-grid {
            grid-template-columns: 1fr;
          }
          
          .proceeding-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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
          </div>
          {/* Committee Chairs */}
          <div className="section">
            <h2 className="section-title">Committee Chairs</h2>
            <div className="chairs-grid">
              {chairs.map((chair, index) => (
                <div key={index} className="chair-card">
                  <div className="profile-image">
                    <div className="profile-image-ring">
                      <div className="profile-image-inner">
                        <img
                          src={chair.image}
                          alt={chair.name}
                          className="profile-img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="chair-title">{chair.title}</div>
                  <h3 className="chair-name">{chair.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Proceeding Committee */}
          <div className="section">
            <div className="section-container">
              <h2 className="section-title">Proceeding Committee</h2>
              <div className="proceeding-grid">
                {proceedingCommittee.map((member, index) => (
                  <div key={index} className="proceeding-card">
                    <div className="proceeding-image">
                      <div className="proceeding-image-ring">
                        <div className="proceeding-image-inner">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="profile-img"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="proceeding-name">{member.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scientific Committee Members */}
          <div className="section">
            <div className="section-container">
              <h2 className="section-title">{getText('scientificCommittee.membersTitle')}</h2>
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

export default ScientificCommittee