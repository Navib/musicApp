import { combineReducers } from "redux";
import searchReducer from "./search_reducer";
import artistReducer from "./artist_reducer";
import albumReducer from "./album_reducer";
import recentReducer from "./recent_reducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  routing: routerReducer,
  search: searchReducer,
  artistSearch: artistReducer,
  albumSearch: albumReducer,
  recentSearch: recentReducer
});

export default rootReducer;
