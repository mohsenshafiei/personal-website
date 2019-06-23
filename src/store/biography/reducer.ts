import { ActionType } from './action-type';
import { BiographyAction } from './action';
import { BiographyInterface } from './model';

export interface BiographyState {
  post: BiographyInterface;
};

const userInitialState: BiographyState = {
  post: {
    title: '',
    description: '',
    author: '',
    time: '',
    date: '',
    content: [''],
    link: '',
  },
}

export const reducer = (state: BiographyState = userInitialState, action: BiographyAction): BiographyState => {
  switch (action.type) {
    case ActionType.SELECT_BIOGRAPHY_FULFILLED:
      return {
        ...state,
        post: action.post,
      };
    default:
      return state;
  }
}
