import React from "react";
import PropTypes from "prop-types";
import "./field.scss";

const Field = props => (
  <div>
    <input
      onChange={props.onChange}
      type={props.textarea ? "textarea" : "text"}
      value={props.value}
      placeholder={props.label}
    />
  </div>
);

Field.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  textarea: PropTypes.bool.isRequired
};

Field.defaultProps = {
  textarea: false
};

export default Field;
