import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../actions";
import TheComponent from "../components/audio_player";

const mapStateToProps = (state, ownProps) => {
  return { currentTrack: state.currentTrack };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const AudioPlayer = connect(mapStateToProps, mapDispatchToProps)(TheComponent);

export default AudioPlayer;
