import "./navigation.scss";
import React from "react";

const Navigation = () => (
  <div id="navigation">
    <div>
      <ul className="main-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Navigation;
