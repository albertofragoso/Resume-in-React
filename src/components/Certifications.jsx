import React from 'react'

const Certifications = props => (
  <div className="Certifications">
    <div className="Certifications-container">
      {
        props.data.map((item, index) => (
          <div className="Certifications-item" key={index}>
            <h3>{item.institution} - {item.name}
              <span>{item.date}</span>
            </h3>
            <p>{item.description}</p>
          </div>
        ))
      }
    </div>
  </div>
)

export default Certifications