import { take, call, put } from 'redux-saga/effects';
import { REQUEST, success, failuer } from '../actions/examples';
import Api from '../utils/api';

export function* request() {
  while (true) {
    const action = yield take(REQUEST);
    const data = yield call(Api.get, action.payload.url);
    if (!!data) {
      yield put(success(data));
    } else {
      yield put(failuer);
    }
  }
}
