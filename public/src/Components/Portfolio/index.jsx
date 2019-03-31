import "./portfolio.scss";
import React from 'react';

const Portfolio = () => (
  <div id="portfolio">
    <div className="portfolio-title">
      <h1>Most Recent Projects</h1>
      <hr className="portfolio-hr"></hr>
    </div>
    <div className="portfolio-container">
      <div className="card">
        <div className="card-side card-side-front">
          <div className="card__picture card__picture--1"> 
          </div>
          <h4 className="card__heading">
            <span className="card__heading-span">
            Currently Viewing
            </span>
          </h4>
          <div className="card__details">
            Details
          </div>
        </div>
        <div className="card-side card-side-back ">
          Back
        </div>
      </div>
    </div>
  </div>
)

export default Portfolio;