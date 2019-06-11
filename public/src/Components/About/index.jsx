import React from "react";
import "./about.scss";
import LaptopBreakpoint from "../responsive_utilities/laptop_bp";
import TabletBreakpoint from "../responsive_utilities/tablet_bp";
import PhoneBreakpoint from "../responsive_utilities/phone_bp";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => (
  <div id="about">
    <PhoneBreakpoint>
      <div>
        <div className="about-title">
          <h1>Who I Am</h1>
          <hr className="about-hr" />
        </div>
        <div className="ch-grid">
          <li>
            <div className="ch-item">
              <div className="ch-info" />
              <div className="ch-thumb ch-img-1" />
            </div>
          </li>
        </div>
        <div className="about-text-container">
          <ul className="about-text-list">
            <li>
              <span>am&ensp;</span> a fullstack engineer who is fascinated with
              Javascript
            </li>
            <li>
              <span>adore&ensp;</span> React, RESTful API design/dev, Node, &
              database technologies
            </li>
            <li>
              <span>value&ensp;</span> writing clean code & consistently
              practicing even better habits
            </li>
            <li>
              <span>strive&ensp;</span> to build immersive applications that can
              make a difference
            </li>
            <li>
              <span>care&ensp;</span> about my interactions & relationships with
              the people I work with
            </li>
          </ul>
        </div>
      </div>
    </PhoneBreakpoint>
    <TabletBreakpoint>
      <div className="about-title">
        <h1>Who I Am</h1>
        <hr className="about-hr" />
      </div>
      <div className="ch-grid">
        <li>
          <div className="ch-item">
            <div className="ch-info" />
            <div className="ch-thumb ch-img-1" />
          </div>
        </li>
      </div>
      <div className="about-text-container">
        <ul className="about-text-list">
          <li>
            <span>am&ensp;</span> a fullstack engineer who is fascinated with
            Javascript
          </li>
          <li>
            <span>adore&ensp;</span> React, RESTful API design/dev, Node, &
            database technologies
          </li>
          <li>
            <span>value&ensp;</span> writing clean code & consistently
            practicing even better habits
          </li>
          <li>
            <span>strive&ensp;</span> to build immersive applications that can
            make a difference
          </li>
          <li>
            <span>care&ensp;</span> about my interactions & relationships with
            the people I work with
          </li>
        </ul>
      </div>
    </TabletBreakpoint>
    <LaptopBreakpoint>
      <div className="about-title">
        <h1>Who I Am</h1>
        <hr className="about-hr" />
      </div>

      <div className="about-container">
        <div className="about-picture-container">
          <div className="ch-grid">
            <li>
              <div className="ch-item">
                <div className="ch-info" />
                <div className="ch-thumb ch-img-1" />
              </div>
            </li>
          </div>
        </div>
        <div className="about-text-container">
          <div className="about-text-letter-i">i</div>
          <ul className="about-text-list">
            <li>
              <span>am&ensp;</span> a fullstack engineer who is fascinated with
              Javascript
            </li>
            <li>
              <span className="list-item-word">adore&ensp;</span> React, RESTful
              API design/dev, Node, & database technologies
            </li>
            <li>
              <span>value&ensp;</span> writing clean code & consistently
              practicing even better habits
            </li>
            <li>
              <span>strive&ensp;</span> to build immersive applications that can
              make a difference
            </li>
            <li>
              <span>care&ensp;</span> about my interactions & relationships with
              the people I work with
            </li>
          </ul>
        </div>
      </div>
    </LaptopBreakpoint>
  </div>
);

export default About;
