import React from 'react'

const Projects = props => (
  <div className="Projects">
    <div className="Projects-container">
      {
        props.data.map((item, index) => (
          <div className="Projects-item" key={`Proj-${index}`}>
            <figure>
              <a href={item.url} target="_blank">
                <img src={item.image} alt={item.name}/>
              </a>
            </figure>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
          </div>
        ))
      }
    </div>
  </div>
)

export default Projects