import actions from "../actions";

const recentTrackReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GOT_TRACK:
      return [action.data.data, ...state];
    default:
      return state;
  }
};

export default recentTrackReducer;
