import React from 'react'
import styled from 'styled-components'

const InfoContainer = styled.div`
  padding: 1em;
`

const Info = ({ children }) => (
  <InfoContainer>
    <div className="Info-container">
      { children }
    </div>
  </InfoContainer>
)

export default Info