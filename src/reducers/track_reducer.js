import actions from "../actions";

const trackReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GOT_TRACK:
      return action.data.data;
    default:
      return state;
  }
};

export default trackReducer;
