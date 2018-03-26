import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../actions";
import TheComponent from "../components/recent_play";

const mapStateToProps = (state, ownProps) => {
  return { recentTracks: state.recentTracks };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    playTrack: id => {
      dispatch({ type: actions.GET_TRACK, payload: id });
    }
  };
};

const RecentPlay = connect(mapStateToProps, mapDispatchToProps)(TheComponent);

export default RecentPlay;
