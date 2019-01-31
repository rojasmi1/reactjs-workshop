import { all } from "redux-saga/effects";
import characters from "./characters";

function* allSagas() {
  yield all([characters()]);
}

export default allSagas;
