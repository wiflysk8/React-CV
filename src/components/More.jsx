import React from "react";
import "./More.scss";

const More = ({ languages, habilities }) => {
  return (
    <>
      <h2>Languages</h2>
      <div className="card">
        {languages &&
          languages.map((item) => {
            return (
              <section className="c-languages">
                <div key={item.language}>
                  <p className="name">◾ {item.language}</p>
                  <p>{item.wrlevel}</p>
                  <p>{item.spleve}</p>
                </div>
              </section>
            );
          })}
      </div>
      <h2>Skills</h2>
      <div className="c-skills">
        <div className="c-skills__item">
          {habilities.map((item) => {
            return (
              <section className="c-habilities">
                <div key={item}>
                  <p className="name"> ◾{item}</p>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default More;
