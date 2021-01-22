import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import apod, { apodSaga } from './apod';

const rootReducer = combineReducers({ apod });

export function* rootSaga() {
  yield all([apodSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
