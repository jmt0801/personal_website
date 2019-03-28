import React from 'react';
import './about.scss';
import selfImage from '../../../dist/images/about_self_image.jpeg'

const About = () => (
  <div id="about">
    <div className="about-title">
      <h1>Who I Am</h1>
      <hr className="about-hr"></hr>
    </div>
    <div className="about-container">
      <div className="about-picture-container"> </div>
      <img className="about-picture" src= {selfImage}></img>
      
        
      <div className="about-shape">
      Something here?
      </div>
      <div className="about-text-container">
        <div className="about-text-letter-i">i</div>
        <ul className="about-text-list">
          <li><span className="list-item-word">am&ensp;</span> a fullstack engineer who is fascinated with Javascript</li>
          <li className="about-item-2"><span className="list-item-word">adore&ensp;</span> React, RESTful API design/dev, Node, & database technologies</li>
          <li><span className="list-item-word">value&ensp;</span> writing clean code & consistently practicing even better habits</li>
          <li><span className="list-item-word">strive&ensp;</span> to build immersive applications that can make a difference</li>
          <li><span className="list-item-word">care&ensp;</span> about my interactions & relationships with the people I work with</li>
        </ul>
      </div>
    </div>
  </div>
)

export default About;