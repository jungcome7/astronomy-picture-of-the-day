import { takeLatest } from 'redux-saga/effects';
import { getApodByPeriod, getApodByYear } from '../../api/api';
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
      type: AT.GET_APOD_BY_PERIOD_ERROR,
      payload: e,
      error: true,
    });
  }

  yield put(finishLoading(AT.GET_APOD_BY_PERIOD));
}

function* getApodByYearSaga(action: ApodAction) {
  yield put(startLoading(AT.GET_APOD_BY_YEAR));
  try {
    const response = yield call(getApodByYear, action.payload);
    yield put({
      type: AT.GET_APOD_BY_YEAR_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: AT.GET_APOD_BY_YEAR_ERROR,
      payload: e,
      error: true,
    });
  }

  yield put(finishLoading(AT.GET_APOD_BY_YEAR));
}

export function* apodSaga() {
  yield takeLatest(AT.GET_APOD_BY_PERIOD, getApodByPeriodSaga);
  yield takeLatest(AT.GET_APOD_BY_YEAR, getApodByYearSaga);
}
