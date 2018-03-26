import React, { Component } from "react";

const audioStyle = {
  width: "500px"
};

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    const audio = document.getElementById("nowPlaying");

    if (nextProps.currentTrack.id !== this.props.currentTrack.id)
      audio.load(), audio.play();
  }

  render() {
    if (this.props.currentTrack === undefined) return <div />;
    return (
      <div>
        <audio controls id="nowPlaying" style={audioStyle}>
          <source src={this.props.currentTrack.preview} type="audio/mp3" />
        </audio>
      </div>
    );
  }
}

export default AudioPlayer;
