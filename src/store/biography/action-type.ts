import { BiographyInterface } from './model';
export enum ActionType {
  START_BIOGRAPHY = 'START_BIOGRAPHY',
  SELECT_BIOGRAPHY = 'SELECT_BIOGRAPHY',
  SELECT_BIOGRAPHY_FULFILLED = 'SELECT_BIOGRAPHY_FULFILLED',
  SELECT_BIOGRAPHY_FAILED = 'SELECT_BIOGRAPHY_FAILED',
}

export interface StartBiographyAction {
  type: ActionType.START_BIOGRAPHY;
}

export interface SelectBiographyAction {
  type: ActionType.SELECT_BIOGRAPHY;
  post: BiographyInterface;
}

export interface SelectBiographyFulfilledAction {
  type: ActionType.SELECT_BIOGRAPHY_FULFILLED;
  post: BiographyInterface;
}
