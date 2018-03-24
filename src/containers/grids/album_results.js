import React from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import TheComponent from "../../components/grids/album_results";

const mapStateToProps = (state, ownProps) => {
  return { albumSearch: state.albumSearch };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    reloadAlbum: query => {
      dispatch({ type: actions.GET_ALBUMS, payload: query });
    }
  };
};

const AlbumResults = connect(mapStateToProps, mapDispatchToProps)(TheComponent);

export default AlbumResults;
