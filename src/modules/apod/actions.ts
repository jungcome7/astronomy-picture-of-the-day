import { createAction } from 'typesafe-actions';
import AT from './actionTypes'

export const getApod = createAction(AT.GET_APOD, ({ startDate, endDate }) => ({
  startDate,
  endDate,
}))();

export const getApodSuccess = createAction(AT.GET_APOD_SUCCESS, (apod) => apod)();
export const getApodFailure = createAction(
  AT.GET_APOD_FAILURE,
  (error) => error,
)();
