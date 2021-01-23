import { createAction } from 'typesafe-actions';
import AT from './actionTypes';

export const getApod = createAction(AT.GET_APOD, ({ startDate, endDate }) => ({
  startDate,
  endDate,
}))();

export const getApodSuccess = createAction(
  AT.GET_APOD_SUCCESS,
  (apodList) => apodList,
)();
export const getApodFailure = createAction(
  AT.GET_APOD_FAILURE,
  (error) => error,
)();

export const selectApod = createAction(AT.SELECT_APOD, (apodSelected) => apodSelected)();
