import React from 'react'
import ScrollAnimation from './ScrollAnimation'
import './About.css'

const About = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title gradient-text">About the conference</h2>
        </ScrollAnimation>
        <ScrollAnimation delay={200}>
          <div className="about-content">
            <p>
              The 3rd edition of the international conference on Smart Industry, Technology and Environment
              "SITE'2025" aims to bring together academicians, researchers, professionals and experts from
              various fields to share their latest findings, innovations and best practices. It consists of
              keynotes, oral sessions and poster presentations. SITE'2025 facilitates interdisciplinary
              collaboration and promotes sustainable development by exploring cutting-edge advancements in
              various fields. The international scientific committee selects the best papers for publication
              in specialized journals, considering their alignment with the conference's scope. These chosen
              papers are recommended for publication to guarantee their quality and significance within the
              research community.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default About
