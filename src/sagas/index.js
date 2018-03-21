import { takeLatest, put, call, all } from "redux-saga/effects";
import actions from "../actions";
import api from "../api";
import search from "../api/search";

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
  console.log("Search Sagas: ", term.payload);
  try {
    const data = yield call(search.getSearch, term.payload);
    yield put({ type: actions.GOT_SEARCH, data });
  } catch (error) {
    console.log("saga fail: ", error);
    yield put({ type: actions.GOT_NO_STUFF, error });
  }
}

export function* sagas() {
  yield all([
    takeLatest(actions.GET_STUFF, getStuff),
    takeLatest(actions.GET_SEARCH, getSearch)
  ]);
}
