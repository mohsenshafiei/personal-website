import {
  ActionType,
  SelectBiographyAction,
  SelectBiographyFulfilledAction,
  StartBiographyAction,
} from './action-type';
import { BiographyInterface } from './model';

export const startBiography = (): StartBiographyAction => (
  {
    type: ActionType.START_BIOGRAPHY,
  }
);

export const selectBiographyAction = (post: BiographyInterface): SelectBiographyAction => (
  {
    type: ActionType.SELECT_BIOGRAPHY,
    post,
  }
);

export const selectBiographyFulfilledAction = (post: BiographyInterface): SelectBiographyFulfilledAction => (
  {
    type: ActionType.SELECT_BIOGRAPHY_FULFILLED,
    post,
  }
);


export type BiographyAction = SelectBiographyAction
  | SelectBiographyFulfilledAction;
