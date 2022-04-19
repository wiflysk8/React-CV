import React from 'react'
import "./Education.scss"

const Experience = ({experience}) => {
  return (
    <div>
    <div className="education-card">
    
      {experience && experience.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            <p className="name">💻 {item.name}</p>
            <p>{item.where}</p>
            <p>{item.date}</p>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Experience