import React from 'react';
import './about.scss';
import selfImage from '../../../dist/images/about_self_image.jpeg'

const About = () => (
  <div id="about">
    <div>
      <h1>A few things you'd probably want to know about me</h1>
    </div>
    <br></br>
    <div className="about-container">
      <div className="about-picture-container">
        <img src= {selfImage}></img>
      </div>
      <div className="about-text-container">
        <ul className="about-text-list">
          <li>I am a fullstack engineer who is fascinated with Javascript</li>
          <li>I adore React, RESTful API design and development, Node, and database technologies</li>
          <li>I value writing good, clean code and consistently practicing even better habits.</li>
          <li>I strive to build immersive applications that can make a difference</li>
          <li>I genuinely care about my interactions and relationships with the people I work with</li>
        </ul>
      </div>
    </div>
  </div>
)

export default About;