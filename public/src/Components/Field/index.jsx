import React from "react";
import PropTypes from "prop-types";

const Field = props => (
  <div>
    <h4>{props.label}</h4>
    <input
      onChange={props.onChange}
      type={props.textarea ? "textarea" : "text"}
      value={props.value}
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
