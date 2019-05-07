import React from "react";
import "./about.scss";
import selfImage from "../../../dist/images/about_self_image.jpeg";
import LaptopBreakpoint from "../responsive_utilities/laptop_bp";
import TabletBreakpoint from "../responsive_utilities/tablet_bp";
import PhoneBreakpoint from "../responsive_utilities/phone_bp";

const About = () => (
  <div id="about">
    <PhoneBreakpoint>
      <div className="dev">
        <div className="about-title-phone dev">
          <h1>Who I Am</h1>
          <hr className="about-hr-phone" />
        </div>
        <div className="ch-grid">
          <li>
            <div className="ch-item">
              <div className="ch-info">
                {/* <h3>Music poster</h3>
                  <p>by Jonathan Quintin </p> */}
              </div>
              <div className="ch-thumb ch-img-1" />
            </div>
          </li>
        </div>
      </div>
    </PhoneBreakpoint>
    {/* <div className="about-title">
      <h1>Who I Am</h1>
      <hr className="about-hr" />
    </div>
    <div className="about-container">
      <div className="about-picture-container"> </div>
      <img className="about-picture" src={selfImage} />

      <div className="about-shape">Something here?</div>
      <div className="about-text-container">
        <div className="about-text-letter-i">i</div>
        <ul className="about-text-list">
          <li>
            <span className="list-item-word">am&ensp;</span> a fullstack
            engineer who is fascinated with Javascript
          </li>
          <li className="about-item-2">
            <span className="list-item-word">adore&ensp;</span> React, RESTful
            API design/dev, Node, & database technologies
          </li>
          <li>
            <span className="list-item-word">value&ensp;</span> writing clean
            code & consistently practicing even better habits
          </li>
          <li>
            <span className="list-item-word">strive&ensp;</span> to build
            immersive applications that can make a difference
          </li>
          <li>
            <span className="list-item-word">care&ensp;</span> about my
            interactions & relationships with the people I work with
          </li>
        </ul>
      </div>
    </div> */}
  </div>
);

export default About;
