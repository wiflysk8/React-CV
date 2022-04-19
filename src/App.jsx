import "./App.scss";
import { useState } from "react";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import About from "./components/About";
import More from "./components/More";
import { CV } from "./CV/CV";


const { hero, education, experience, languages, habilities } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <h2>About Me</h2>
      <About hero={hero} />
      <div className="c-btn">
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(true)}
      >
        Education
      </button>
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(false)}
      >
        Experience
      </button>
      </div>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More languages={languages} habilities={habilities}/>
    </div>
  );
}

export default App;
