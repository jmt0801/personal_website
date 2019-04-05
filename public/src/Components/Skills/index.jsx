import "./skills.scss";
import React from "react";


const Skills = () => (
  <div id="skills">
    <div className="skills-title">
      <h1>My Skills</h1>
      <hr className="skills-hr"></hr>
      </div>
    <div className="skills-main-container">
      <div className="skills-container">
        <i className="fab fa-js-square"></i>
        <h3>Javascript</h3>
      </div>
      <div className="skills-container">
        <i className="fab fa-css3-alt"></i>
        <h3>Html5/CSS/Sass</h3>
      </div>
      <div className="skills-container">
        <i className="fab fa-react"></i>
        <h3>React</h3> 
      </div>
      <div className="skills-container">
        <i className="fab fa-node"></i>
        <h3>Node.js</h3> 
      </div>
      <div className="skills-container">
        <i className="fas fa-server"></i>
        <h3>Express</h3> 
      </div>
      <div className="skills-container">
        <i className="fas fa-database"></i>
        <h3>SQL/noSQL</h3>
      </div>
      <div className="skills-container">
        <i className="fab fa-git-square"></i>
        <h3>Git</h3>
      </div>
      <div className="skills-container">
        <i className="fab fa-npm"></i>
        <h3>npm</h3>
      </div>
      <div className="skills-container">
        <i className="fas fa-cube"></i>
        <h3>webpack/parcel</h3>
      </div>
    </div>
  </div>
)

export default Skills;