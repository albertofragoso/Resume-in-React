import React from 'react'
import styled from 'styled-components'

const SocialStyled = styled.div`
  margin: 0 auto;
  display: block;
`

const SocialUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const SocialAnchor = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2em;
`

const SocialLi = styled.li`
  display: inline;
  margin: 0 1em 0 0;
`

const SocialIcon = styled.i`
  color: #fff;
`

const Social = props => (
  <SocialStyled>
    <SocialUl>
      {
        props.data.map((item, index) => (
          <SocialLi key={`Social-${index}`}>
            <SocialAnchor href={item.url} target="_blank">
              <SocialIcon className={`fa fa-${item.name}`}/>
            </SocialAnchor>
          </SocialLi>
        ))
      }
    </SocialUl>
  </SocialStyled>
)

export default Social