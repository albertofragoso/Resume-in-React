import React from 'react'
import styled from 'styled-components'
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  grid-row-gap: 0.5em;
`

const ProjectImg = styled.img`
  margin: 10px 0;
  height: auto;  
  width: 100%;
`

const Projects = props => (
  <div className="Projects">
    <H2Styled name="👨🏻‍💻 Proyectos" />
    <ProjectsContainer>
      {
        props.data.map((item, index) => (
          <div className="Projects-item" key={`Proj-${index}`} >
            <a href={item.url} target="_blank">
              <ProjectImg src={item.image} alt={item.name}/>
            </a>
            <H3Styled>{item.name}</H3Styled>
            <PStyled name={item.description} />
          </div>
        ))
      }
    </ProjectsContainer>
  </div>
)

export default Projects