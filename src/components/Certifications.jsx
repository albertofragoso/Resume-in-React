import React from 'react'
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const Certifications = props => (
  <div className="Certifications">
    <H2Styled name="🏆 Certificaciones" />
    <div className="Certifications-container">
      {
        props.data.map((item, index) => (
          <div className="Certifications-item" key={`Cer-${index}`}>
            <H3Styled>{item.institution} - {item.name} |
              <small> {item.date}</small>
            </H3Styled>
            <PStyled name={item.description} />
          </div>
        ))
      }
    </div>
  </div>
)

export default Certifications