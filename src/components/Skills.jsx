import React from 'react'

const Skills = props => (
  <div className="SKills">
    <div className="Skills-container">
      {
        props.data.map((item, index) => (
          <div className ="Skills-item" key={`Skl-${index}`}>
            <h5>{item.name}</h5>
            <div className="Skills-line">
              <span>{item.percentage}</span>    
            </div>
          </div>
        ))
      }
    </div>
  </div>
)

export default Skills