import { takeEvery, put, call } from "redux-saga/effects";
import { FETCH_API, PURCHASE_BY_ID } from "../Actions/Type";
// import actions:
import { RequestedAPI, RequestAPISuccess, RequestAPIFailed } from "../Actions/";

export function* watchFetchAPI() {
  yield takeEvery(FETCH_API, fetchAPIAsync);
  yield takeEvery(PURCHASE_BY_ID, PurchaseButtonAsync);
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

function* PurchaseButtonAsync() {
  yield put({ type: "PURCHASE_BY_ID_ASYNC", value: 1 });
}
