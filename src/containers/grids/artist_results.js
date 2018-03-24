import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import TheComponent from "../../components/grids/artist_results";

const mapStateToProps = (state, ownProps) => {
  console.log("artist container: ", state);
  return { artistSearch: state.artistSearch };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    reloadArtist: query => {
      dispatch({ type: actions.GET_ARTIST, payload: query });
    }
  };
};

const ArtistResults = connect(mapStateToProps, mapDispatchToProps)(
  TheComponent
);

export default ArtistResults;
