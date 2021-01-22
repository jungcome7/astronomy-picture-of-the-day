import { createAction } from 'typesafe-actions';

export const GET_APOD = 'apod/GET_APOD';
export const GET_APOD_SUCCESS = 'apod/GET_APOD_SUCCESS';
export const GET_APOD_FAILURE = 'apod/GET_APOD_FAILURE';

export const getApod = createAction(GET_APOD, ({ startDate, endDate }) => ({
  startDate,
  endDate,
}))();

export const getApodSuccess = createAction(GET_APOD_SUCCESS, (apod) => apod)();
export const getApodFailure = createAction(
  GET_APOD_FAILURE,
  (error) => error,
)();
