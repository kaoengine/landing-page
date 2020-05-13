import { takeEvery, put, call } from "redux-saga/effects";

// import actions:
import { RequestedAPI, RequestAPISuccess, RequestAPIFailed } from "../Actions/";

export function* watchFetchAPI() {
  yield takeEvery("FETCH_API", fetchAPIAsync);
}

function* fetchAPIAsync() {
  try {
    yield put(RequestedAPI());
    const data = yield call(() => {
      return fetch(
        "https://api.thecatapi.com/v1/images/search"
      ).then((reponse) => reponse.json());
    });
    yield put(RequestAPISuccess(data[0], data[0].id));
  } catch (error) {
    yield put(RequestAPIFailed());
  }
}
