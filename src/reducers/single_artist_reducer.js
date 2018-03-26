import actions from "../actions";

const singleArtistReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GOT_SINGLE_TOP_ARTIST:
      return action.data.data;
    default:
      return state;
  }
};

export default singleArtistReducer;
