import {
  ActionType,
  SelectPostAction,
  SelectPostFulfilledAction,
} from './action-type';
import { PostInterface } from './model';

export const selectPostAction = (post: PostInterface): SelectPostAction => (
  {
    type: ActionType.SELECT_POST,
    post,
  }
);

export const selectPostFulfilledAction = (post: PostInterface): SelectPostFulfilledAction => (
  {
    type: ActionType.SELECT_POST_FULFILLED,
    post,
  }
);


export type BlogAction = SelectPostAction
  | SelectPostFulfilledAction;
