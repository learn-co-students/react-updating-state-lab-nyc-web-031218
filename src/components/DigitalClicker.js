// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  onClick = () => {
    this.setState(
      {
        ...this.state, timesClicked: this.state.timesClicked + 1
      }
    )
  }
  render() {
    return (
      <button onClick={this.onClick}>{this.state.timesClicked}</button>
    )
  }
}
