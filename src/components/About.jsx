import React from 'react'
import Social from './Social'
import styled from 'styled-components'

const AboutStyle = styled.div`
  background-image: linear-gradient(to top,rgb(22, 135, 237) 0%,rgb(20, 55, 90) 100%);
  color: #fff!important;
  text-align: center;
  padding: 0 0 2em 0;
`

const AboutAvatar = styled.div`
  padding: 2rem 0 0 0;
`

const AboutImg = styled.img`
  border-radius: 100%;
  width: 175px;
  height: 150px;
  border: 2px solid #00aced;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`

const AboutName = styled.div`
  text-align: center;
`

const AboutH2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  letter-spacing: 1.2px;
  margin: .5em 0 0 0;
`

const AboutProfession = styled.p`
  margin: .2em 0 1em 0;
  letter-spacing: 1px;
  font-weight: 500;
`

const AboutBio = styled.p`
  font-size: 1em;
  font-weight: 300;
`
const AboutLocation = styled.p`
  font-size: 1em;
  font-weight: 300;
`

const About = ({ avatar, name, profession, bio, address, social }) => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <figure>
          <AboutImg src={avatar} alt={name} />
        </figure>
      </AboutAvatar>
      <AboutName>
        <AboutH2>{name}</AboutH2>
      </AboutName>
      <div className="About-profession">
        <AboutProfession>{profession}</AboutProfession>
      </div>
      <div className="About-desc">
        <AboutBio>{bio}</AboutBio>
      </div>
      <div className="About-location">
        <AboutLocation>{address}</AboutLocation>
      </div>
      <div className="About-social">
        <Social data={social} />
      </div>
    </div>
  </AboutStyle>
)

export default About