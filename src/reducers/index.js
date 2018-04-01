import { combineReducers } from "redux";
import searchReducer from "./search_reducer";
import artistReducer from "./artist_reducer";
import singleArtistReducer from "./single_artist_reducer";
import albumReducer from "./album_reducer";
import recentReducer from "./recent_reducer";
import trackReducer from "./track_reducer";
import recentTrackReducer from "./recent_track_reducer";
import artistAlbumsReducer from "./artist_albums_reducer";
import topTracksReducer from "./top_tracks_reducer";
import albumTracksReducer from "./album_tracks_reducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  routing: routerReducer,
  search: searchReducer,
  artistSearch: artistReducer,
  albumSearch: albumReducer,
  recentSearch: recentReducer,
  currentTrack: trackReducer,
  recentTracks: recentTrackReducer,
  artistPage: singleArtistReducer,
  artistAlbums: artistAlbumsReducer,
  artistTracks: topTracksReducer,
  albumTracks: albumTracksReducer
});

export default rootReducer;
