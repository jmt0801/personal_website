import React, { Component } from "react";
import axios from "axios";
import Field from "../Field";
import Button from "../Button";
import "./form.scss";
import LaptopBreakpoint from "../responsive_utilities/laptop_bp";
import TabletBreakpoint from "../responsive_utilities/tablet_bp";
import PhoneBreakpoint from "../responsive_utilities/phone_bp";
import ScrollAnimation from "react-animate-on-scroll";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      phone: "",
      sent: false,
      buttonText: "Send Message"
    };

    //self reminder: to ensure 'this' when calling 'this.updateField' refers to Form and not Field
    this.updateField = this.updateField.bind(this);
  }
  // field could be 'name' 'email' or 'message'
  // value is whatever the use types into the input field
  updateField(field, value) {
    //self reminder: remember, without the [], it's looking for field:value which does not exist
    this.setState({ [field]: value });
  }

  //form submit func
  formSubmit = e => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending"
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
    };

    axios
      .post(DEPLOY_URL, data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(err => {
        console.log("Message not sent because of", err);
      });
  };

  //reset after sending func
  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      phone: "",
      buttonText: "Message Sent!"
    });
  };

  render() {
    return (
      <div id="form">
        <div className="contact-container">
          <h1>I'd love to hear from you.</h1>
          <h2>Feedbacks of any kind are welcome too!</h2>
          {/* /* Name Field */}
          <Field
            label="Name"
            onChange={event => this.updateField("name", event.target.value)}
            value={this.state.name}
          />
          {/* {/* /* Email Field * */}
          <Field
            label="E-mail"
            onChange={event => this.updateField("email", event.target.value)}
            value={this.state.email}
          />
          <Field
            label="Phone"
            onChange={event => this.updateField("phone", event.target.value)}
            value={this.state.phone}
          />
          {/* Message textarea */}
          <Field
            label="Message"
            onChange={event => this.updateField("message", event.target.value)}
            textarea={true}
            value={this.state.message}
          />
          {/* <Button formValues={this.state} email="hjk013@gmail.com" /> */}

          <button onClick={this.formSubmit}>{this.state.buttonText}</button>
        </div>
        <div className="info-container">
          <i className="fa fa-envelope" aria-hidden="true" />
          <span>hjk013@gmail.com</span>
          <i className="fa fa-phone-square" aria-hidden="true" />
          <span>(909)292-5001 </span>
          <i className="fa fa-location-arrow" aria-hidden="true" />
          <span>Los Angeles, CA </span>
        </div>
      </div>
    );
  }
}

export default Form;
