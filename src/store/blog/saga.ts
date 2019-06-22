import { takeLatest, put } from 'redux-saga/effects';
import {
  ActionType,
  SelectPostAction,
} from './action-type';
import { selectPostFulfilledAction } from './action';

function* selectPost(action: SelectPostAction) {
  yield put(selectPostFulfilledAction(action.post));
}

export default [
  takeLatest(ActionType.SELECT_POST, selectPost),
]
