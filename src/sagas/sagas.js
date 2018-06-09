import { fork, take, call, put } from 'redux-saga/effects';

function* submitSaga() {
  while (true) {
    const action = yield take('SUBMITT');
    //something ex...
    ////const data = yield call(api.fetch())
    //if(!!data.error){
    //    put(success)
    //} else {
    //    put(failuer)
    //}
  }
  //somthing
}

export function* rootSaga() {
  yield fork(submitSaga);
}
