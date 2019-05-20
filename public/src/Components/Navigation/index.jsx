import "./navigation.scss";
import React from "react";
import LaptopBreakpoint from "../responsive_utilities/laptop_bp";
import TabletBreakpoint from "../responsive_utilities/tablet_bp";
import PhoneBreakpoint from "../responsive_utilities/phone_bp";
import Hamburger from "../Hamburger";

class Navigation extends React.Component {
  render() {
    return (
      <div id="navigation">
        <PhoneBreakpoint>
          <Hamburger />
        </PhoneBreakpoint>
        <TabletBreakpoint>
          <Hamburger />
        </TabletBreakpoint>
        <LaptopBreakpoint>
          <Hamburger />
          {/* <div className="nav-bar-container">
            <a href="#home">
              <div id="btn0" className="nav-button">
                <h1>Home</h1>
              </div>
            </a>
            <a href="#about">
              <div id="btn1" className="nav-button">
                <h1>About Me</h1>
              </div>
            </a>

            <a href="#skills">
              <div id="btn2" className="nav-button">
                <h1>Skills</h1>
              </div>
            </a>

            <a href="#portfolio">
              <div id="btn3" className="nav-button">
                <h1>Recent Work</h1>
              </div>
            </a>

            <a href="#contact">
              <div id="btn4" className="nav-button">
                <h1>Contact Me</h1>
              </div>
            </a>
          </div> */}
        </LaptopBreakpoint>
      </div>
    );
  }
}

export default Navigation;
