import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import TheComponent from "../../components/grids/top_tracks";

const mapStateToProps = (state, ownProps) => {
  return { artistTracks: state.artistTracks };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    reloadTopTracks: id => {
      dispatch({ type: actions.GET_TOP_TRACKS, payload: id });
    },
    playTrack: id => {
      dispatch({ type: actions.GET_TRACK, payload: id });
    }
  };
};

const TopTracks = connect(mapStateToProps, mapDispatchToProps)(TheComponent);

export default TopTracks;
