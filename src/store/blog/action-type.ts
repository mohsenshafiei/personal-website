import { PostInterface } from './model';
export enum ActionType {
  START_BLOG = 'START_BLOG',
  SELECT_POST = 'SELECT_POST',
  SELECT_POST_FULFILLED = 'SELECT_POST_FULFILLED',
  SELECT_POST_FAILED = 'SELECT_POST_FAILED',
}

export interface StartBlogAction {
  type: ActionType.START_BLOG;
}

export interface SelectPostAction {
  type: ActionType.SELECT_POST;
  post: PostInterface;
}

export interface SelectPostFulfilledAction {
  type: ActionType.SELECT_POST_FULFILLED;
  post: PostInterface;
}
