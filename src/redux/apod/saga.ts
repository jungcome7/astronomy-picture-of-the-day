import { takeLatest } from 'redux-saga/effects';
import { getApod } from '../../api/api';
import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../loading';
import { ApodAction } from './types';
import AT from './actionTypes';

function* getApodSaga(action: ApodAction) {
  yield put(startLoading(AT.GET_APOD));
  try {
    const response = yield call(getApod, action.payload);
    yield put({
      type: AT.GET_APOD_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: AT.GET_APOD_FAILURE,
      payload: e,
      error: true,
    });
  }

  yield put(finishLoading(AT.GET_APOD));
}

export function* apodSaga() {
  yield takeLatest(AT.GET_APOD, getApodSaga);
}
