import React, { Component } from "react";

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("mounted");
  }
  componentWillReceiveProps(nextProps) {
    console.log("updating: ", nextProps);
    console.log("updating: ", this.props);
    const audio = document.getElementById("nowPlaying");

    if (nextProps.currentTrack.id !== this.props.currentTrack.id)
      audio.load(), audio.play();
  }
  render() {
    if (this.props.currentTrack === undefined) return <div />;
    return (
      <div>
        <audio controls id="nowPlaying">
          <source src={this.props.currentTrack.preview} type="audio/mp3" />
        </audio>
      </div>
    );
  }
}

export default AudioPlayer;
