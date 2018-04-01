import { takeLatest, put, call, all } from "redux-saga/effects";
import actions from "../actions";
import api from "../api";
import search from "../api/search";
import artist from "../api/artist_search";
import album from "../api/album_search";
import track from "../api/get_track";

function* getStuff() {
  console.log("Stuff");
  try {
    const data = yield call(api.getStuff);
    yield put({ type: actions.GOT_STUFF, data });
  } catch (error) {
    console.log("saga fail: ", error);
    yield put({ type: actions.GOT_NO_STUFF, error });
  }
}

function* getSearch(term) {
  try {
    const data = yield call(search.getSearch, term.payload);
    yield put({ type: actions.GOT_SEARCH, data });
  } catch (error) {
    console.log("saga fail: ", error);
    yield put({ type: actions.GOT_NO_STUFF, error });
  }
}

function* getArtist(term) {
  try {
    const data = yield call(artist.getArtist, term.payload);
    yield put({ type: actions.GOT_ARTIST, data });
  } catch (error) {
    console.log("saga fail: ", error);
    yield put({ type: actions.GOT_NO_STUFF, error });
  }
}

function* getSingleTopArtist(id) {
  try {
    const data = yield call(artist.getSingleTopArtist, id.payload);
    yield put({ type: actions.GOT_SINGLE_TOP_ARTIST, data });
  } catch (error) {
    console.log("saga fail: ", error);
    yield put({ type: actions.GOT_NO_STUFF, error });
  }
}

function* getAlbum(term) {
  try {
    const data = yield call(album.getAlbum, term.payload);
    yield put({ type: actions.GOT_ALBUMS, data });
  } catch (error) {
    console.log("saga fail: ", error);
    yield put({ type: actions.GOT_NO_STUFF, error });
  }
}

function* getArtistAlbums(id) {
  try {
    const data = yield call(album.getArtistAlbum, id.payload);
    yield put({ type: actions.GOT_ARTIST_ALBUMS, data });
  } catch (error) {
    console.log("saga fail: ", error);
    yield put({ type: actions.GOT_NO_STUFF, error });
  }
}

function* recentSearch(term) {
  try {
    yield put({ type: actions.GOT_RECENT, term });
  } catch (error) {
    console.log("saga fail: ", error);
    yield put({ type: actions.GOT_NO_STUFF, error });
  }
}

function* getTrack(id) {
  try {
    const data = yield call(track.getTrack, id.payload);
    yield put({ type: actions.GOT_TRACK, data });
  } catch (error) {
    console.log("saga fail: ", error);
    yield put({ type: actions.GOT_NO_STUFF, error });
  }
}

function* getTopTracks(id) {
  try {
    const data = yield call(track.getTopTracks, id.payload);
    yield put({ type: actions.GOT_TOP_TRACKS, data });
  } catch (error) {
    console.log("saga fail: ", error);
    yield put({ type: actions.GOT_NO_STUFF, error });
  }
}

function* getAlbumTracks(id) {
  try {
    const data = yield call(track.getAlbumTracks, id.payload);
    yield put({ type: actions.GOT_ALBUM_TRACKS, data });
  } catch (error) {
    console.log("saga fail: ", error);
    yield put({ type: actions.GOT_NO_STUFF, error });
  }
}

export function* sagas() {
  yield all([
    takeLatest(actions.GET_STUFF, getStuff),
    takeLatest(actions.GET_SEARCH, getSearch),
    takeLatest(actions.GET_ARTIST, getArtist),
    takeLatest(actions.GET_SINGLE_TOP_ARTIST, getSingleTopArtist),
    takeLatest(actions.GET_ALBUMS, getAlbum),
    takeLatest(actions.GET_ARTIST_ALBUMS, getArtistAlbums),
    takeLatest(actions.GET_RECENT, recentSearch),
    takeLatest(actions.GET_TRACK, getTrack),
    takeLatest(actions.GET_TOP_TRACKS, getTopTracks),
    takeLatest(actions.GET_ALBUM_TRACKS, getAlbumTracks)
  ]);
}
