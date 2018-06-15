//flow
import { take, call, put } from 'redux-saga/effects';
import { REQUEST, success, failuer } from '../actions/examples';
import Api from '../utils/api';

type PostsData = {
  id: number,
  title: string,
  author: string
};
export function* request(): Generator<*, *, *> {
  while (true) {
    const action = yield take(REQUEST);
    try {
      const data = yield call(Api.get, action.payload.url);
      if (data && data.length) {
        //TODO: do not  this eval with string
        yield put(success(data));
      } else {
        yield put(
          failuer({
            error: {
              errorMessage: "Is server running?, please run localserver with 'json-server db.json'"
            }
          })
        );
      }
    } catch (e) {
      //TODO e is not defined
      yield put(
        failuer({
          error: {
            errorMessage: "Is server running?, please run localserver with 'json-server db.json'"
          }
        })
      );
    }
  }
}
