import { ActionType } from './action-type';
import { UserAction } from './action';

export interface UserState {
  fullname: string;
};

const userInitialState: UserState = {
  fullname: null,
}

export const reducer = (state: UserState = userInitialState, action: UserAction): UserState => {
  switch (action.type) {
    case ActionType.USER_PROFILE_INFO_FULFILLED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
