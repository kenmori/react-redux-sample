// grupOne and Two are exporting several watcher sagas
import { fork, all } from 'redux-saga/effects';
import * as examples from './examples';
import { map } from 'ramda';

const combinedSagas = {
  ...examples
};

//https://github.com/redux-saga/redux-saga/issues/171
export default function* rootSaga() {
  yield all(map(fork, combinedSagas));
}
