
import { fork } from 'redux-saga/effects';

function* submitSaga() {
    //somthing
}

export function* rootSaga() {
    yield [
        fork(submitSaga),
    ]
}
