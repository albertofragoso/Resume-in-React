import React from 'react'

const Social = props => (
  <div className="Social">
    <ul>
      {
        props.data.map((item, index) => (
          <li key={`Social-${index}`}>
            <a href={item.url} target="_blank">
              {item.name}
            </a>
          </li>
        ))
      }
    </ul>
  </div>
)

export default Social