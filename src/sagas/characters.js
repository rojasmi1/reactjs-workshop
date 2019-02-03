import { takeLatest, all, put } from "redux-saga/effects";
import {
  LOAD_CHARACTERS_REQUEST,
  LOAD_CHARACTERS_SUCCESS,
  LOAD_CHARACTERS_FAIL,
} from "store/charactersReducer";

/** WORKERS */

function* loadCharacters(action) {
  const { payload = '' } = action;

  try {
    const response = yield fetch(`https://rickandmortyapi.com/api/character/?name=${payload}`);
    const data = yield response.json();
    const characters = data.results;
    yield put({ type: LOAD_CHARACTERS_SUCCESS, payload: characters });
  } catch (error) {
    yield put({ type: LOAD_CHARACTERS_FAIL, payload: error.message });
  }
}

/** WATCHERS */

function* loadCharactersRequested() {
  yield takeLatest(LOAD_CHARACTERS_REQUEST, loadCharacters);
}

function* characters() {
  yield all([loadCharactersRequested()]);
}

export default characters;
