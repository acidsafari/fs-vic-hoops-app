import React from 'react';
import YouTube from 'react-youtube';
import "./Header.css";

class HeaderVideo extends React.Component {
  render() {
    const videoId = "TOHaHEmRtKg"
    const opts = {
      height: '600',
      width: '900',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        mute: 1,
        controls: 1,
        showinfo: 0,
        rel: 0,
      },
    };

    return <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default HeaderVideo;
  


/*
<div class="iframe-container" type="featured-video">
  <iframe width="560" height="315" 
  src="https://www.youtube.com/embed/TOHaHEmRtKg?si=W87uGM0dzv3FfElz&amp;&mute=1&controls=1&showinfo=0&rel=0" 
    frameborder="0" allowfullscreen></iframe>
</div>
*/