import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import TheComponent from "../../components/grids/album_tracks";

const mapStateToProps = (state, ownProps) => {
  return { albumTracks: state.albumTracks };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    reloadAlbumTracks: id => {
      dispatch({ type: actions.GET_ALBUM_TRACKS, payload: id });
    },
    playTrack: id => {
      dispatch({ type: actions.GET_TRACK, payload: id });
    }
  };
};

const AlbumTracks = connect(mapStateToProps, mapDispatchToProps)(TheComponent);

export default AlbumTracks;
