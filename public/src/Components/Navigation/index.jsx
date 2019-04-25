import React from "react";
import { bubble as Menu } from "react-burger-menu";

class Navigation extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu>
        <a className="menu-item" href="#home">
          Home
        </a>
        <a className="menu-item" href="#about">
          About
        </a>
        <a className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
    );
  }
}
export default Navigation;
