import React from "react";
import PropTypes from "prop-types";

import "./modal.scss";

const Modal = ({ customClass, show, closeCallback, cardId }) => {
  if (cardId === "1") {
    return (
      <div
        className={`modal ${customClass}`}
        style={{ display: show ? "block" : "none" }}
      >
        <div className="overlay" onClick={closeCallback} />
        <div className="modal_content">
          <div className="detail-stack">
            <h2>Stack</h2>
            <hr />
            <i className="fab fa-react blue" />
            <i className="fab fa-node green" />
            <i class="fab fa-sass pink" />
          </div>
          <div className="detail-desc">
            <ul>
              <li>
                <i class="far fa-star" /> Designed portfolio website using
                modular components
              </li>
              <li>
                <i class="far fa-star" /> Dynamically responsive to multiple
                viewports
              </li>
              <li>
                <i class="far fa-star" /> Utilized SMTP and Gmail API to
                transport messages submitted from website
              </li>
            </ul>
          </div>

          <button title="Close" className="close_modal" onClick={closeCallback}>
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
    );
  } else if (cardId === "2") {
    return (
      <div
        className={`modal ${customClass}`}
        style={{ display: show ? "block" : "none" }}
      >
        <div className="overlay" onClick={closeCallback} />
        <div className="modal_content">
          <div className="detail-stack">
            <h2>Stack</h2>
            <hr />
            <i className="fab fa-node green" />
            <i class="fab fa-aws orange" />
            <div className="amaz-stack">
              Postgres <span>& </span> Nginx
            </div>
          </div>
          <div className="detail-desc">
            <ul>
              <li>
                <i class="far fa-star" /> Utilized indexes to improve SQL/noSQL
                database query speed
              </li>
              <li>
                <i class="far fa-star" /> Perfomance increase of ~3 orders of
                magnitude
              </li>
              <li>
                <i class="far fa-star" /> Implemented load balancers; # of
                successful requests per sec increased from 80 to 1000
              </li>
            </ul>
          </div>
          <button title="Close" className="close_modal" onClick={closeCallback}>
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
    );
  } else if (cardId === "3") {
    return (
      <div
        className={`modal ${customClass}`}
        style={{ display: show ? "block" : "none" }}
      >
        <div className="overlay" onClick={closeCallback} />
        <div className="modal_content">
          <div className="detail-stack">
            <h2>Stack</h2>
            <hr />
            <i className="fab fa-react blue" />
            <i className="fab fa-node green" />
            <i class="fab fa-css3-alt cssblue" />
            <i class="fab fa-aws orange" />

            <div className="amaz-stack">MongoDB</div>
          </div>
          <div className="detail-desc">
            <ul>
              <li>
                <i class="far fa-star" /> Replicated a functional mockup of
                Airbnb’s Listings Page
              </li>
              <li>
                <i class="far fa-star" /> Designed amenities modal with pure
                JS/CSS
              </li>
              <li>
                <i class="far fa-star" /> Combined and deployed modules from
                group using proxy servers and AWS EC2
              </li>
            </ul>
          </div>
          <button title="Close" className="close_modal" onClick={closeCallback}>
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

Modal.propTypes = {
  customClass: PropTypes.string,
  show: PropTypes.bool,
  closeCallback: PropTypes.func
};

Modal.defaultProps = {
  customClass: "",
  show: false,
  closeCallback: () => false
};

export default Modal;
