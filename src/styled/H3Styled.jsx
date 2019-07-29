import React from 'react'
import styled from 'styled-components'

const StyledH3 = styled.h3`
  font-weight: 500;
  margin: .5em 0;
  color: #767676!important;
`

const H3Styled = ({ children }) => <StyledH3>{children}</StyledH3>

export default H3Styled