import actions from "../actions";

const albumReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GOT_ALBUMS:
      return action.data.data;
    default:
      return state;
  }
};

export default albumReducer;
