import { createStore, combineReducers, Store, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer as userReducer, UserState } from 'store/user/reducer';
import { sagas } from './sagas';

export interface State { user: UserState }

const reducers = combineReducers({ user: userReducer });
const sagaMiddleware = createSagaMiddleware();

export const store: Store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (noop: any) => noop,
  ),
);

sagaMiddleware.run(sagas);
