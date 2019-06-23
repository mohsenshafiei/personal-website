import { takeLatest, put } from 'redux-saga/effects';
import {
  ActionType,
  SelectPostAction,
} from './action-type';
import { selectPostFulfilledAction } from './action';

function* selectPost(action: SelectPostAction) {
  localStorage.setItem('blogpost', JSON.stringify(action.post));
  yield put(selectPostFulfilledAction(action.post));
}

function* startBlog() {
  const post = localStorage.getItem('blogpost');
  yield put(selectPostFulfilledAction(JSON.parse(post)));
}

export default [
  takeLatest(ActionType.START_BLOG, startBlog),
  takeLatest(ActionType.SELECT_POST, selectPost),
]
