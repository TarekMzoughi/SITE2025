import React from 'react'
import './Pages.css'

const ScientificCommittee = () => {
  const chairs = [
    {
      title: "Scientific Chair",
      name: "Pr. Hassene SEDDIK",
      image: "https://site-conf.com/wp-content/uploads/2025/06/1-2.png"
    },
    {
      title: "Scientific Co-Chair",
      name: "Pr. Mohamed Ali REZGUI",
      image: "https://site-conf.com/wp-content/uploads/2025/06/4-1.png"
    },
    {
      title: "Scientific Co-Chair",
      name: "Pr. Isabelle Bruant-Ricciardi",
      image: "https://site-conf.com/wp-content/uploads/2025/06/3-1.png"
    }
  ]

  const proceedingCommittee = [
    "Mohamed SOULA (ENIT)",
    "Ali TRABELSI (ENSIT)",
    "Jamel BELHADJ (HIDE – ENSIT)",
    "Mohamedali SHIRINBAYAN (ENSAM Paris)"
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
    "Mohamedali SHIRINBAYAN (ENSAM Paris, France)",
    "Mohamed Fadhel SAAD (ISET Gafsa, Tunisia)",
    "Mohamed Habib SELLAMI (ESIM, Tunisia)",
    "Mohamed Toumi NASRI (ENIB, Tunisia)",
    "Monia GUIZA (ENIG, Tunisia)",
    "Mounir BEN MUSTAPHA (ISET Bizerte, Tunisia)",
    "Mounir FRIJA (ISSAT Sousse, Tunisia)",
    "Moktar HAMDI (INSAT, Tunisia)",
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
    "Zouhir BOUMOUS (Souk Ahras University, Algeria)"
  ]

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>Scientific Committee</h1>
        </div>
        
        <div className="page-content">
          <div className="committee-chairs">
            {chairs.map((chair, index) => (
              <div key={index} className="chair-card">
                <img src={chair.image} alt={chair.name} className="chair-image" />
                <h3>{chair.title}</h3>
                <h4>{chair.name}</h4>
              </div>
            ))}
          </div>

          <div className="proceeding-committee">
            <h2>Proceeding Committee</h2>
            <ul className="committee-list">
              {proceedingCommittee.map((member, index) => (
                <li key={index}><strong>{member}</strong></li>
              ))}
            </ul>
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

export default ScientificCommittee
