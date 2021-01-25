import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import apod, { apodSaga } from './apod';
import loading from './loading';

const rootReducer = combineReducers({ apod, loading });

export function* rootSaga() {
  yield all([apodSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
