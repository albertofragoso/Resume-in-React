import React from 'react'
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const Education = props => (
  <div className="Education">
    <H2Styled name="🎒 Educación" />
    <div className="Education-container">
      {
        props.data.map((item, index) => (
          <div className="Education-item" key={`Edu-${index}`}>
            <H3Styled>{item.degree} - {item.institution} |
              <small> {item.startDate} - {item.endDate}</small>
            </H3Styled>
            <PStyled name={item.description} />
          </div>
        ))
      }
    </div>
  </div>
)

export default Education