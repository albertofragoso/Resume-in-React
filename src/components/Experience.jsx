import React from 'react'
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const Experience = props => (
  <div className="Experience">
    <H2Styled name="💼 Experiencia" />
    <div className="Experience-container">
      {
        props.data.map((item, index) => (
          <div className="Experience-item" key={`Exp-${index}`}>
            <H3Styled>{item.company} - {item.jobTitle} |
              <small> {item.startDate} - {item.endDate}</small>
            </H3Styled>
            <PStyled name={item.jobDescription} />
          </div>   
        ))
      }
    </div>
  </div>
)

export default Experience