// // Code DigitalClicker Component Here
// In the components/DigitalClicker.js file, create a DigitalClicker React component.
// This component has an initial state property called timesClicked, which is initially defined as 0.
// The component renders out a button with a label that shows the timesClicked value. This means that, at the start, your button should just say 0.
// Whenever the button is clicked, update the state by incrementing the timesClicked by 1.
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0,
    };
  }

//dont call state inside state make it a variable//
  handleClick = () => {
    let curr = ++this.state.timesClicked
    this.setState({
      timesClicked: curr,
    }, () => console.log(this.state.timesClicked))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;
