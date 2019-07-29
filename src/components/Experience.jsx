import React from 'react'

const Experience = props => (
  <div className="Experience">
    <div className="Experience-container">
      {
        props.data.map((item, index) => (
          <div className="Experience-item" key={index}>
            <h3>{item.company} - {item.jobTitle}
              <span>{item.startDate} - {item.endDate}</span>
            </h3>
            <p>{item.jobDescription}</p>
          </div>   
        ))
      }
    </div>
  </div>
)

export default Experience