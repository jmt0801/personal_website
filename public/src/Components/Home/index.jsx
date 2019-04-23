import "./home.scss";
import React from "react";
import LaptopBreakpoint from "../responsive_utilities/laptop_bp";
import TabletBreakpoint from "../responsive_utilities/tablet_bp";
import PhoneBreakpoint from "../responsive_utilities/phone_bp";

const Home = () => (
  <div id="home">
    <PhoneBreakpoint>
      <div className="home-container">
        <div className="text-box">
          <h1 className="home-h1">Jun Kim</h1>
          <h2 className="home-h2">Software Engineer</h2>
          <div className="social-btns">
            <a className="btn resume" href="#">
              <i className="fab fa-adobe" />
            </a>
            <a className="btn linkedin" href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="btn github" href="#">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
    </PhoneBreakpoint>
    <TabletBreakpoint>
      <div className="home-container">
        <div className="text-box">
          <h1 className="home-h1">Jun</h1>
          <h1 className="home-h1">Kim</h1>
          <h2 className="home-h2">Software Engineer</h2>
          <div className="social-btns">
            <a className="btn resume" href="#">
              <i className="fab fa-adobe" />
            </a>
            <a className="btn linkedin" href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="btn github" href="#">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
    </TabletBreakpoint>

    <LaptopBreakpoint>
      <div className="home-container">
        <div className="text-box">
          <h1 className="home-h1">Jun</h1>
          <h1 className="home-h1">Kim</h1>
          <h2 className="home-h2">Software Engineer</h2>
          <div className="social-btns">
            <a className="btn resume" href="#">
              <i className="fab fa-adobe" />
            </a>
            <a className="btn linkedin" href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="btn github" href="#">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
    </LaptopBreakpoint>
  </div>
);

export default Home;
