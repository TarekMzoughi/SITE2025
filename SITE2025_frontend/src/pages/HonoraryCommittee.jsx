import React from 'react'
import './Pages.css'

const HonoraryCommittee = () => {
  const honoraryMembers = [
    {
      name: "Prof. Dr. Ahmed BENALI",
      title: "Honorary Chair",
      affiliation: "University of Tunis, Tunisia",
      description: "Distinguished professor in Smart Industry Technologies"
    },
    {
      name: "Prof. Dr. Marie DUBOIS",
      title: "Honorary Co-Chair",
      affiliation: "Sorbonne University, France",
      description: "Expert in Environmental Engineering and Sustainable Development"
    },
    {
      name: "Prof. Dr. Hans MUELLER",
      title: "Honorary Member",
      affiliation: "Technical University of Munich, Germany",
      description: "Pioneer in Industrial Automation and IoT Systems"
    },
    {
      name: "Prof. Dr. Sarah JOHNSON",
      title: "Honorary Member",
      affiliation: "MIT, United States",
      description: "Leading researcher in Smart Manufacturing Technologies"
    },
    {
      name: "Prof. Dr. Hiroshi TANAKA",
      title: "Honorary Member",
      affiliation: "University of Tokyo, Japan",
      description: "Expert in Robotics and Artificial Intelligence"
    }
  ]

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>Honorary Committee</h1>
        </div>
        
        <div className="page-content">
          <div className="honorary-intro">
            <p>
              The Honorary Committee of SITE 2025 consists of distinguished academics and 
              industry leaders who provide guidance and support to ensure the conference's 
              success and maintain its high academic standards.
            </p>
          </div>

          <div className="honorary-members">
            {honoraryMembers.map((member, index) => (
              <div key={index} className="honorary-card">
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <h4 className="member-title">{member.title}</h4>
                  <p className="member-affiliation">{member.affiliation}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="honorary-role">
            <h3>Role of the Honorary Committee</h3>
            <div className="role-description">
              <ul>
                <li>Provide strategic guidance for the conference direction</li>
                <li>Ensure high academic standards and quality</li>
                <li>Support international collaboration and networking</li>
                <li>Promote the conference within the global academic community</li>
                <li>Contribute to the selection of keynote speakers</li>
                <li>Advise on emerging trends and future topics</li>
              </ul>
            </div>
          </div>

          <div className="honorary-acknowledgment">
            <h3>Acknowledgment</h3>
            <p>
              We extend our sincere gratitude to all Honorary Committee members for their 
              valuable contributions, guidance, and continued support in making SITE 2025 
              a premier international conference in Smart Industry, Technology and Environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HonoraryCommittee
