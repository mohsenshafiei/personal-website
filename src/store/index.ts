import { createStore, combineReducers, Store, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer as userReducer, UserState } from 'store/user/reducer';
import { reducer as blogReducer, BlogState } from 'store/blog/reducer';
import { reducer as biographyReducer, BiographyState } from 'store/biography/reducer';
import { sagas } from './sagas';

export interface State {
  user: UserState;
  blog: BlogState;
  biography: BiographyState;
}

const reducers = combineReducers({
  user: userReducer,
  blog: blogReducer,
  biography: biographyReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store: Store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (noop: any) => noop,
  ),
);

sagaMiddleware.run(sagas);
