import React from "react";
import { bubble as Menu } from "react-burger-menu";
import logo from "../../../dist/images/website_logo_whiteish.jpg";
import "./hamburger.scss";

class Hamburger extends React.Component {
  render() {
    return (
      <Menu>
        <img src={logo} width="142" height="120" />
        <a className="menu-item" href="#home">
          Home
        </a>
        <a className="menu-item" href="#about">
          About Me
        </a>
        <a className="menu-item" href="#skills">
          Skills
        </a>
        <a className="menu-item" href="#portfolio">
          Recent Work
        </a>
        <a className="menu-item" href="#contact">
          Contact Me
        </a>
      </Menu>
    );
  }
}
export default Hamburger;
