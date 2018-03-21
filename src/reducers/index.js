import { combineReducers } from "redux";
import basicReducer from "./basic_reducer";
import searchReducer from "./search_reducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  routing: routerReducer,
  text: basicReducer,
  search: searchReducer
});

export default rootReducer;
