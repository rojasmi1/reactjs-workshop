import { takeLatest, all, put } from "redux-saga/effects";
import {
  LOAD_CHARACTERS_REQUEST,
  LOAD_CHARACTERS_SUCCESS
} from "store/charactersReducer";

/** WORKERS */

function* loadCharacters(action) {
  const response = yield fetch("https://rickandmortyapi.com/api/character/");
  const data = yield response.json();
  const characters = data.results;
  yield put({ type: LOAD_CHARACTERS_SUCCESS, payload: characters });
}

/** WATCHERS */

function* loadCharactersRequested() {
  yield takeLatest(LOAD_CHARACTERS_REQUEST, loadCharacters);
}

function* characters() {
  yield all([loadCharactersRequested()]);
}

export default characters;
