// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{
  constructor(){
    super()

    this.state = {

      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }

    }

    this.handleBitrateClick = this.handleBitrateClick.bind(this)
  }

  handleBitrateClick(){
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate: 12
      }
    }, () => console.log(this.state)
    )


    /*
  Or this can be defined as
  this.setState({
    settings: {
      ...this.state.settings,
      video: {
        ...this.state.settings.video,
        resolution: '720p'
      }
    },
  });
*/



  }

  handleResolutionClick = () => {
    this.setState({
      settings:{
        ... this.state.settings,
        video:{
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    }, ()=>{debugger})



    // debugger

  }

  render(){
    return(
      <div>
        <button className='bitrate' onClick={this.handleBitrateClick}>Bitrate</button>
        <button className='resolution' onClick={this.handleResolutionClick}>Resolution</button>
      </div>

    )

  }
}

export default YouTubeDebugger

// In the components/YouTubeDebugger.js file, create a YouTubeDebugger React component.
// This component has several state properties. The initial state shape looks like this: js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
