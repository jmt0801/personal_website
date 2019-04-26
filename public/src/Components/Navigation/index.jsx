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
      </div>
    );
  }
}

export default Navigation;
