import { combineReducers } from "redux";
import basicReducer from "./basic_reducer";
import searchReducer from "./search_reducer";
import artistReducer from "./artist_reducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  routing: routerReducer,
  text: basicReducer,
  search: searchReducer,
  artistSearch: artistReducer
});

export default rootReducer;
