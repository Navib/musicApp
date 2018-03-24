import actions from "../actions";

const recentReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GOT_RECENT:
      return [action.term.payload, ...state];
    default:
      return state;
  }
};

export default recentReducer;
