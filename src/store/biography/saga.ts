import { takeLatest, put } from 'redux-saga/effects';
import {
  ActionType,
  SelectBiographyAction,
} from './action-type';
import { selectBiographyFulfilledAction } from './action';

function* selectBiography(action: SelectBiographyAction) {
  localStorage.setItem('biographyPost', JSON.stringify(action.post));
  yield put(selectBiographyFulfilledAction(action.post));
}

function* startBiography() {
  const post = localStorage.getItem('biographyPost');
  yield put(selectBiographyFulfilledAction(JSON.parse(post)));
}

export default [
  takeLatest(ActionType.START_BIOGRAPHY, startBiography),
  takeLatest(ActionType.SELECT_BIOGRAPHY, selectBiography),
]
