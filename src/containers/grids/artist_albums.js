import React from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import TheComponent from "../../components/grids/artist_albums";

const mapStateToProps = (state, ownProps) => {
  return { artistAlbums: state.artistAlbums };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    reloadArtistAlbums: id => {
      dispatch({ type: actions.GET_ARTIST_ALBUMS, payload: id });
    }
  };
};

const ArtistAlbums = connect(mapStateToProps, mapDispatchToProps)(TheComponent);

export default ArtistAlbums;
