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
          11111111111
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
          222222222222222
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
          333333333333
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
