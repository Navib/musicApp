import actions from "../actions";

const searchReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GOT_SEARCH:
      return action.data;
    default:
      return state;
  }
};

export default searchReducer;
