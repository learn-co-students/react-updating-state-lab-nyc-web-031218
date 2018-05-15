// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {

  state = {
    timesClicked: 0,
  };

  handleClick = (event) => {
    let oldState = this.state.timesClicked
    oldState += 1
    this.setState({timesClicked: oldState})
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}
