import { takeLatest } from 'redux-saga/effects';
import { getApodByPeriod, getApodByDate } from '../../api/api';
import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../loading';
import { ApodAction } from './types';
import AT from './actionTypes';

function* getApodByPeriodSaga(action: ApodAction) {
  yield put(startLoading(AT.GET_APOD_BY_PERIOD));
  try {
    const response = yield call(getApodByPeriod, action.payload);
    yield put({
      type: AT.GET_APOD_BY_PERIOD_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: AT.GET_APOD_BY_PERIOD_FAILURE,
      payload: e,
      error: true,
    });
  }

  yield put(finishLoading(AT.GET_APOD_BY_PERIOD));
}

function* getApodByDateSaga(action: ApodAction) {
  yield put(startLoading(AT.GET_APOD_BY_DATE));
  try {
    const response = yield call(getApodByDate, action.payload);
    yield put({
      type: AT.GET_APOD_BY_DATE_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: AT.GET_APOD_BY_DATE_FAILURE,
      payload: e,
      error: true,
    });
  }

  yield put(finishLoading(AT.GET_APOD_BY_DATE));
}

export function* apodSaga() {
  yield takeLatest(AT.GET_APOD_BY_DATE, getApodByDateSaga);
  yield takeLatest(AT.GET_APOD_BY_PERIOD, getApodByPeriodSaga);
}
