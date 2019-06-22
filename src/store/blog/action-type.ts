import { PostInterface } from './model';
export enum ActionType {
  SELECT_POST = 'SELECT_POST',
  SELECT_POST_FULFILLED = 'SELECT_POST_FULFILLED',
  SELECT_POST_FAILED = 'SELECT_POST_FAILED',
}

export interface SelectPostAction {
  type: ActionType.SELECT_POST;
  post: PostInterface;
}

export interface SelectPostFulfilledAction {
  type: ActionType.SELECT_POST_FULFILLED;
  post: PostInterface;
}
