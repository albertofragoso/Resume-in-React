import React from 'react'
import styled from 'styled-components'
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const ProjectsFigure = styled.figure`
  width: 400px;
  overflow: hidden;
`

const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
`

const Projects = props => (
  <div className="Projects">
    <H2Styled name="👨🏻‍💻 Proyectos" />
    <div className="Projects-container">
      {
        props.data.map((item, index) => (
          <div className="Projects-item" key={`Proj-${index}`}>
            <a href={item.url} target="_blank">
              <ProjectsFigure>
                <ProjectImg src={item.image} alt={item.name}/>
              </ProjectsFigure>
            </a>
              <H3Styled>{item.name}</H3Styled>
              <PStyled name={item.description} />
          </div>
        ))
      }
    </div>
  </div>
)

export default Projects