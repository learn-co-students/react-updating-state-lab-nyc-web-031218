// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props)
    this.state = { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
  }

  onBitrate = () => {
    this.setState(
        {
    settings: {
      ...this.state.settings,
      bitrate: 12,
    },
  }
)
  }
  onResolve = () => {
    this.setState(
      {
        settings: {
          ...this.state.settings, video: {resolution: '720p'}
        }
      }
    )
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.onBitrate}/>
        <button className='resolution' onClick={this.onResolve}/>
      </div>
    )
  }
}
