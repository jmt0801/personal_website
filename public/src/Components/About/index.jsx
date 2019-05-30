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
        <ScrollAnimation animateIn="bounceInUp">
          <div className="about-title">
            <h1>Who I Am</h1>
            <hr className="about-hr" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInUp">
          <div className="ch-grid">
            <li>
              <div className="ch-item">
                <div className="ch-info" />
                <div className="ch-thumb ch-img-1" />
              </div>
            </li>
          </div>
        </ScrollAnimation>
        <div className="about-text-container">
          <ul className="about-text-list">
            <ScrollAnimation animateIn="bounceInUp">
              <li>
                <span>am&ensp;</span> a fullstack engineer who is fascinated
                with Javascript
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInUp">
              <li>
                <span>adore&ensp;</span> React, RESTful API design/dev, Node, &
                database technologies
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInUp">
              <li>
                <span>value&ensp;</span> writing clean code & consistently
                practicing even better habits
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInUp">
              <li>
                <span>strive&ensp;</span> to build immersive applications that
                can make a difference
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInUp">
              <li>
                <span>care&ensp;</span> about my interactions & relationships
                with the people I work with
              </li>
            </ScrollAnimation>
          </ul>
        </div>
      </div>
    </PhoneBreakpoint>
    <TabletBreakpoint>
      <ScrollAnimation animateIn="bounceInUp">
        <div className="about-title">
          <h1>Who I Am</h1>
          <hr className="about-hr" />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInUp">
        <div className="ch-grid">
          <li>
            <div className="ch-item">
              <div className="ch-info" />
              <div className="ch-thumb ch-img-1" />
            </div>
          </li>
        </div>
      </ScrollAnimation>
      <div className="about-text-container">
        <ScrollAnimation animateIn="bounceInUp">
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
        </ScrollAnimation>
      </div>
    </TabletBreakpoint>
    <LaptopBreakpoint>
      <ScrollAnimation animateIn="bounceInUp">
        <div className="about-title">
          <h1>Who I Am</h1>
          <hr className="about-hr" />
        </div>
      </ScrollAnimation>

      <div className="about-container">
        <ScrollAnimation animateIn="bounceInUp">
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
        </ScrollAnimation>
        <div className="about-text-container">
          <ScrollAnimation animateIn="bounceInUp">
            <div className="about-text-letter-i">i</div>
          </ScrollAnimation>
          <ul className="about-text-list">
            <ScrollAnimation animateIn="bounceInUp">
              <li>
                <span>am&ensp;</span> a fullstack engineer who is fascinated
                with Javascript
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInUp">
              <li>
                <span className="list-item-word">adore&ensp;</span> React,
                RESTful API design/dev, Node, & database technologies
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInUp">
              <li>
                <span>value&ensp;</span> writing clean code & consistently
                practicing even better habits
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInUp">
              <li>
                <span>strive&ensp;</span> to build immersive applications that
                can make a difference
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInUp">
              <li>
                <span>care&ensp;</span> about my interactions & relationships
                with the people I work with
              </li>
            </ScrollAnimation>
          </ul>
        </div>
      </div>
    </LaptopBreakpoint>
  </div>
);

export default About;
