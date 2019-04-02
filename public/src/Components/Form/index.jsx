import React, {Component} from 'react';

import Field from '../Field';
import Button from '../Button';


class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };

    //self reminder: to ensure 'this' when calling 'this.updateField' refers to Form and not Field
    this.updateField = this.updateField.bind(this);
  }
// field could be 'name' 'email' or 'message'
// value is whatever the use types into the input field
  updateField(field, value ) {
    //self reminder: remember, without the [], it's looking for field:value which does not exist
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div>
        {/* Name Field */}
        <Field 
          label="Name"
          onChange={(event) => this.updateField('name', event.target.value) } 
          value={this.state.name}
        />

        {/* Email Field */}
        <Field 
          label="E-mail"
          onChange={(event) => this.updateField('email', event.target.value) } 
          value={this.state.email}
        />

        {/* Message textarea */}
        <Field 
          label="Message"
          onChange={(event) => this.updateField('message', event.target.value) } 
          textarea= {true}
          value={this.state.message}
        />
        
        <Button 
          formValues={this.state} 
          email="hjk013@gmail.com" />
      </div>
    )
  }
}

export default Form;