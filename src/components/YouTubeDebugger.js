// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component{
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
       },
    }
    this.setBitRate = this.setBitRate.bind(this)
    this.setResolution = this.setResolution.bind(this)
    
  }
  setBitRate(){
    console.log(this)
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }
  setResolution(){
    this.setState({
      settings: {
        ...this.state.settings,
        video:{
          resolution: '720p'
        }
      }
    })
  }
  render(){
    return(
      <div>
        <button onClick={this.setBitRate} className="bitrate">bit</button>
        <button onClick={this.setResolution} className="resolution">res</button>
      </div>
    )
  }
}
