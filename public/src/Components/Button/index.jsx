import React, {Component} from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    }

    this.testProps = this.testProps.bind(this)
  }


  testProps = (event) => {
    console.log(this.props.formValues)
  }

  render() {
    return (
      <a onClick= {this.testProps}>
        Test
      </a>
    )
  }
}


export default Button;