import React, { Component } from "react";
import Subheader from "material-ui/Subheader";

const audioStyle = {
  width: "500px"
};
const audioHeadStyle = {
  height: "20px",
  position: "relative",
  bottom: "15px",
  textAlign: "center"
};

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    const audio = document.getElementById("nowPlaying");

    if (nextProps.currentTrack.id !== this.props.currentTrack.id)
      audio.load(), audio.play();
  }

  render() {
    if (this.props.currentTrack === undefined) return <div />;
    return (
      <div>
        <Subheader style={audioHeadStyle}>
          <span>
            {this.props.currentTrack.artist
              ? `${this.props.currentTrack.artist.name} - ${
                  this.props.currentTrack.title
                }`
              : " "}
          </span>
        </Subheader>
        <audio controls id="nowPlaying" style={audioStyle}>
          <source src={this.props.currentTrack.preview} type="audio/mp3" />
        </audio>
      </div>
    );
  }
}

export default AudioPlayer;
