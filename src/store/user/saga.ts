import { takeLatest } from 'redux-saga/effects';
import {
  ActionType,
} from './action-type';

function* getUserProfileInfo() {
  // eslint-disable-next-line
  yield console.log('mohsen');
}

export default [
  takeLatest(ActionType.USER_PROFILE_INFO_REQUESTED, getUserProfileInfo),
]
