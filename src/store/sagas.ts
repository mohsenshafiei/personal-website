import { all } from 'redux-saga/effects';
import UserSaga from 'store/user/saga';

export function* sagas() {
  yield all([ ...UserSaga ]);
}
