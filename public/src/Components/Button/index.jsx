import React, { Component } from "react";
import axios from "axios";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };

    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit = e => {
    e.preventDefault();
    console.log("form values", this.props.formValues);
  };

  render() {
    return <a onClick={this.formSubmit}>Test</a>;
  }
}

export default Button;
