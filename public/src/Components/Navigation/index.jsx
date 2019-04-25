import React from "react";
import { bubble as Menu } from "react-burger-menu";

class Navigation extends React.Component {
  render() {
    return (
      <Menu>
        <a className="menu-item" href="#home">
          Home
        </a>
        <a className="menu-item" href="#about">
          About Me
        </a>
        <a className="menu-item" href="/contact">
          Skills
        </a>
        <a className="menu-item" href="/contact">
          Recent Work
        </a>
        <a className="menu-item" href="/contact">
          Contact Me
        </a>
      </Menu>
    );
  }
}
export default Navigation;
