import React, { Component } from "react";
import axios from "axios";
import Field from "../Field";
import Button from "../Button";
import "./form.scss";
import LaptopBreakpoint from "../responsive_utilities/laptop_bp";
import TabletBreakpoint from "../responsive_utilities/tablet_bp";
import PhoneBreakpoint from "../responsive_utilities/phone_bp";
import ScrollAnimation from "react-animate-on-scroll";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...this.state
      })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, message } = this.state;

    return (
      <div id="form">
        <div className="contact-container">
          <h1>I'd love to hear from you.</h1>
          <h2>Feedbacks of any kind are welcome too!</h2>
          {/* /* Name Field */}
          <form className="contform" onSubmit={this.handleSubmit}>
            <p>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Your Name"
                onChange={this.handleChange}
              />
            </p>
            <p>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Your E-mail"
                onChange={this.handleChange}
              />
            </p>
            <p>
              <input
                type="phone"
                name="phone"
                value={phone}
                placeholder="Your Phone Number"
                onChange={this.handleChange}
              />
            </p>
            <p>
              <textarea
                name="message"
                value={message}
                onChange={this.handleChange}
                placeholder="Message"
              />
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
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
