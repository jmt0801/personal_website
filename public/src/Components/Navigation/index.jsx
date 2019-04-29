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
          <div className="nav-bar-container">
            <div className="nav-bar">
              <ul className="nav-menu">
                <li className="nav-menu-items">About Me</li>
                <li className="nav-menu-items">Skills</li>
                <li className="nav-menu-items">Recent Work</li>
                <li className="nav-menu-items">Contact</li>
              </ul>
            </div>
          </div>
        </LaptopBreakpoint>
      </div>
    );
  }
}

export default Navigation;
