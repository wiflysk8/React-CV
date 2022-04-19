import React from 'react'
import "./About.scss"

const About = ({hero}) => {
  
    return (
        <div>
          <div className="c-about">
            {hero.aboutMe.map((item) => {
              return (
                <div key={JSON.stringify(item)}>
                  <p className="info">❕ {item.info}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
  
}

export default About