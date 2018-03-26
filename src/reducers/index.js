import { combineReducers } from "redux";
import searchReducer from "./search_reducer";
import artistReducer from "./artist_reducer";
import albumReducer from "./album_reducer";
import recentReducer from "./recent_reducer";
import trackReducer from "./track_reducer";
import recentTrackReducer from "./recent_track_reducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  routing: routerReducer,
  search: searchReducer,
  artistSearch: artistReducer,
  albumSearch: albumReducer,
  recentSearch: recentReducer,
  currentTrack: trackReducer,
  recentTracks: recentTrackReducer
});

export default rootReducer;
