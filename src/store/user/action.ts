import {
  ActionType,
  UserProfileInfoAction,
  UserProfileInfoFulfilledAction
} from './action-type';
import { UserInfo } from './model';

export const userProfileInfoAction = (): UserProfileInfoAction => (
  {
    type: ActionType.USER_PROFILE_INFO_REQUESTED,
  }
);

export const userProfileInfoFulfilledAction = (payload: UserInfo): UserProfileInfoFulfilledAction => (
  {
    type: ActionType.USER_PROFILE_INFO_FULFILLED,
    payload,
  }
);


export type UserAction = UserProfileInfoAction
  | UserProfileInfoFulfilledAction;
