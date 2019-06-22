import { UserInfo } from './model';
export enum ActionType {
  USER_PROFILE_INFO_REQUESTED = 'USER_PROFILE_INFO_REQUESTED',
  USER_PROFILE_INFO_FULFILLED = 'USER_PROFILE_INFO_FULFILLED',
  USER_PROFILE_INFO_FAILED = 'USER_PROFILE_INFO_FAILED',
}

export interface UserProfileInfoAction {
  type: ActionType.USER_PROFILE_INFO_REQUESTED;
}

export interface UserProfileInfoFulfilledAction {
  type: ActionType.USER_PROFILE_INFO_FULFILLED;
  payload: UserInfo;
}
