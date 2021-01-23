import { takeLatest } from 'redux-saga/effects';
import { getApod } from '../../api/api';
import { GET_APOD } from './actions';
import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../loading';
import { ApodAction } from '../apod/types';

function getSaga(type: string, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action: ApodAction) {
    yield put(startLoading(type));
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }

    yield put(finishLoading(type));
  };
}

export function* apodSaga() {
  yield takeLatest(GET_APOD, getSaga(GET_APOD, getApod));
}
