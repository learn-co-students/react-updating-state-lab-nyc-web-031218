// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{
  constructor(){
    super()

    this.state = {
      timesClicked: 0,
    }
  }

  handleClick = () => {
    let clicked = this.state.timesClicked
    clicked++
    this.setState({timesClicked: clicked})

  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
