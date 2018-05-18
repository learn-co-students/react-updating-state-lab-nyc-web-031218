// Code DigitalClicker Component Here
import React, {Component} from 'react'

class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  }

  incrementor = () => {
    const newCount = this.state.timesClicked += 1

    this.setState({
      timesClicked: newCount
    })
  }

  render(){
    return(
      <div>
        <h1>Clicker</h1>
        <button onClick={this.incrementor} >{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
