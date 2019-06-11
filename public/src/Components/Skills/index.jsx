import "./skills.scss";
import React from "react";
import LaptopBreakpoint from "../responsive_utilities/laptop_bp";
import TabletBreakpoint from "../responsive_utilities/tablet_bp";
import PhoneBreakpoint from "../responsive_utilities/phone_bp";
import ScrollAnimation from "react-animate-on-scroll";

const Skills = () => (
  <div id="skills">
    <PhoneBreakpoint>
      <div className="skills-title">
        <h1>My Skills</h1>
        <hr className="skills-hr" />
      </div>
      <div className="skills-main-container">
        <div className="skills-container">
          <i className="fab fa-js-square " />
        </div>
        <div className="skills-container">
          <i className="fab fa-css3-alt " />
        </div>
        <div className="skills-container">
          <i className="fab fa-react blue" />
        </div>
        <div className="skills-container">
          <i className="fab fa-node " />
        </div>
        <div className="skills-container">
          <i className="fas fa-server" />
        </div>
        <div className="skills-container">
          <i className="fas fa-database" />
        </div>
        <div className="skills-container">
          <i className="fab fa-git-square orange" />
        </div>
        <div className="skills-container">
          <i className="fab fa-npm red" />
        </div>
        <div className="skills-container">
          <i className="fas fa-cube" />
        </div>
      </div>
    </PhoneBreakpoint>
    <TabletBreakpoint>
      <div className="skills-title">
        <h1>My Skills</h1>
        <hr className="skills-hr" />
      </div>
      <div className="skills-main-container">
        <div className="skills-container">
          <i className="fab fa-js-square" />
          <h3>Javascript</h3>
        </div>
        <div className="skills-container">
          <i className="fab fa-css3-alt" />
          <h3>Html5/CSS/Sass</h3>
        </div>
        <div className="skills-container">
          <i className="fab fa-react" />
          <h3>React</h3>
        </div>
        <div className="skills-container">
          <i className="fab fa-node" />
          <h3>Node.js</h3>
        </div>
        <div className="skills-container">
          <i className="fas fa-server" />
          <h3>Express</h3>
        </div>
        <div className="skills-container">
          <i className="fas fa-database" />
          <h3>SQL/noSQL</h3>
        </div>
        <div className="skills-container">
          <i className="fab fa-git-square" />
          <h3>Git</h3>
        </div>
        <div className="skills-container">
          <i className="fab fa-npm" />
          <h3>npm</h3>
        </div>
        <div className="skills-container">
          <i className="fas fa-cube" />
          <h3>webpack/parcel</h3>
        </div>
      </div>
    </TabletBreakpoint>
    <LaptopBreakpoint>
      <div className="skills-title">
        <h1>My Skills</h1>
        <hr className="skills-hr" />
      </div>
      <div className="skills-main-container-laptop">
        <div className="skills-container-laptop">
          <i className="fab fa-js-square" />
          <h3>Javascript</h3>
        </div>
        <div className="skills-container-laptop">
          <i className="fab fa-css3-alt" />
          <h3>Html5/CSS/Sass</h3>
        </div>
        <div className="skills-container-laptop">
          <i className="fab fa-react" />
          <h3>React</h3>
        </div>
        <div className="skills-container-laptop">
          <i className="fab fa-node" />
          <h3>Node.js</h3>
        </div>
        <div className="skills-container-laptop">
          <i className="fas fa-server" />
          <h3>Express</h3>
        </div>
        <div className="skills-container-laptop">
          <i className="fas fa-database" />
          <h3>SQL/noSQL</h3>
        </div>
        <div className="skills-container-laptop">
          <i className="fab fa-git-square" />
          <h3>Git</h3>
        </div>
        <div className="skills-container-laptop">
          <i className="fab fa-npm" />
          <h3>npm</h3>
        </div>
        <div className="skills-container-laptop">
          <i className="fas fa-cube" />
          <h3>webpack/parcel</h3>
        </div>
      </div>
    </LaptopBreakpoint>
  </div>
);

export default Skills;

{
  /* <div className="skills-title">
      <h1>My Skills</h1>
      <hr className="skills-hr" />
    </div>
    <div className="skills-main-container">
      <div className="skills-container">
        <i className="fab fa-js-square" />
        <h3>Javascript</h3>
      </div>
      <div className="skills-container">
        <i className="fab fa-css3-alt" />
        <h3>Html5/CSS/Sass</h3>
      </div>
      <div className="skills-container">
        <i className="fab fa-react" />
        <h3>React</h3>
      </div>
      <div className="skills-container">
        <i className="fab fa-node" />
        <h3>Node.js</h3>
      </div>
      <div className="skills-container">
        <i className="fas fa-server" />
        <h3>Express</h3>
      </div>
      <div className="skills-container">
        <i className="fas fa-database" />
        <h3>SQL/noSQL</h3>
      </div>
      <div className="skills-container">
        <i className="fab fa-git-square" />
        <h3>Git</h3>
      </div>
      <div className="skills-container">
        <i className="fab fa-npm" />
        <h3>npm</h3>
      </div>
      <div className="skills-container">
        <i className="fas fa-cube" />
        <h3>webpack/parcel</h3>
      </div>
    </div> */
}
