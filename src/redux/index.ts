import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import apod, { apodSaga } from './apod';
import search from './search';

const rootReducer = combineReducers({ apod, search });

export function* rootSaga() {
  yield all([apodSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
