// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

// user spread operator
  changeBit = () => {
    const bitNum = this.state.settings.bitrate === 8 ? 12 : 8

    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: bitNum
      }
    })
  }

  changeRes = () => {
    const res = this.state.settings.video.resolution === '1080p' ? '720p' : '1080p'

    this.setState(js => ({
      ...js,
      settings: {
        ...js.settings,
        video: {
          ...js.settings.video,
            resolution: res
        }
      }
    }))
    
  }

  render(){
    return(
      <div>
        <h1>YouTube</h1>
        <label>Bitrate</label>
        <button className="bitrate" onClick={this.changeBit}>{this.state.settings.bitrate}</button>
        <br/>
        <label>Bitrate</label>
        <button className="resolution" onClick={this.changeRes}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

export default YouTubeDebugger
