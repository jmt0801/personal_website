import "./home.scss";
import React from "react";

const Home = () => (
  <div id="home">
    <div className="home-container">
      <div className="text-box">
        <h1 className="home-h1">Jun Kim</h1>
        <h2 className="home-h2">Software Engineer</h2>
      </div>
    </div>
    <div className="social-btns">
      <a className="btn facebook" href="#">
        <i className="fab fa-linkedin-in" />
      </a>
      <a className="btn github" href="#">
        <i className="fab fa-github" />
      </a>
      <a className="btn resume" href="#">
        <i className="fab fa-adobe" />
      </a>
    </div>
  </div>
);

export default Home;
