import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import { getApod } from '../../api/api';
import { GET_APOD } from './actions';

const getApodSaga = createRequestSaga(GET_APOD, getApod);

export function* apodSaga() {
  yield takeLatest(GET_APOD, getApodSaga);
}
