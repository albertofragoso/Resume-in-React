import React from 'react'

const Projects = props => (
  <div className="Projects">
    <div className="Projects-container">
      {
        props.data.map((item, index) => (
          <div className="Projects-item" key={index}>
            <figure>
              <img src={item.image} alt={item.name}/>
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