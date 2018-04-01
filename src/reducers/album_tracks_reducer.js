import actions from "../actions";

const albumTracksReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GOT_ALBUM_TRACKS:
      return action.data.data;
    default:
      return state;
  }
};

export default albumTracksReducer;
