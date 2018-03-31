import actions from "../actions";

const artistAlbumReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GOT_ARTIST_ALBUMS:
      return action.data.data;
    default:
      return state;
  }
};

export default artistAlbumReducer;
