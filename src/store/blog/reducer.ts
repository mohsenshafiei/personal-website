import { ActionType } from './action-type';
import { BlogAction } from './action';
import { PostInterface } from './model';

export interface BlogState {
  post: PostInterface;
};

const userInitialState: BlogState = {
  post: {
    title: '',
    description: '',
    author: '',
    time: '',
    date: '',
    content: '',
    link: '',
  },
}

export const reducer = (state: BlogState = userInitialState, action: BlogAction): BlogState => {
  switch (action.type) {
    case ActionType.SELECT_POST_FULFILLED:
      return {
        ...state,
        post: action.post,
      };
    default:
      return state;
  }
}
