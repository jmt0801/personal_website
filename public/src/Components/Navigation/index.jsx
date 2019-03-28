import "./navigation.scss";
import React from "react";

const Navigation = () => (
  <div id="navigation">
    <div>
      <ul className="main-menu">
        <li className ="menu-item"><a href="#home">Home</a></li>
        <li className ="menu-item"><a href="#about">About</a></li>
        <li className ="menu-item"><a href="#">Skills</a></li>
        <li className ="menu-item"><a href="#">Portfolio</a></li>
        <li className ="menu-item"><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
)

export default Navigation