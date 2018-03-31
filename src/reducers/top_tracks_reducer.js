import actions from "../actions";

const topTracksReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GOT_TOP_TRACKS:
      return action.data.data;
    default:
      return state;
  }
};

export default topTracksReducer;
