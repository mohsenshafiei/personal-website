import { all } from 'redux-saga/effects';
import UserSaga from 'store/user/saga';
import BlogSaga from 'store/blog/saga';

export function* sagas() {
  yield all([
    ...UserSaga,
    ...BlogSaga,
  ]);
}
