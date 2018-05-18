// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {

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

  handleChangeBitrate = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            bitrate: 12
          }
        })
  }

  handleChangeResolution = () => {
    this.setState({
          settings: {
          ...this.state.settings,
          video: {
              resolution: '720p'
            }
          }
        })
    };

  // handleClick = (e) => {
  //   if (e.target.className === "bitrate") {
  //     this.setState({
  //       settings: {
  //         ...this.state.settings,
  //         bitrate: 12
  //       }
  //     })
  //   }
  //   else if (e.target.className === "resolution") {
  //     this.setState({
  //       settings: {
  //       ...this.state.settings,
  //       video: {
  //           resolution: '720p'
  //         }
  //       }
  //     })
  //   }
  // }


  render () {
    console.log(this.state)
    return (
      <div>
        <button className="bitrate" onClick={ this.handleChangeBitrate }>{ this.state.settings.bitrate }</button>
        <button className="resolution" onClick={ this.handleChangeResolution }>{ this.state.settings.video.resolution }</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
