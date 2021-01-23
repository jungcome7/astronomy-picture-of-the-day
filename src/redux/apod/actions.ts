import { createAction } from 'typesafe-actions';
import AT from './actionTypes';

export const getApodByPeriod = createAction(
  AT.GET_APOD_BY_PERIOD,
  ({ startDate, endDate }) => ({
    startDate,
    endDate,
  }),
)();

export const getApodByPeriodSuccess = createAction(
  AT.GET_APOD_BY_PERIOD_SUCCESS,
  (apodList) => apodList,
)();

export const getApodByPeriodFailure = createAction(
  AT.GET_APOD_BY_PERIOD_FAILURE,
  (error) => error,
)();

export const getApodByDate = createAction(
  AT.GET_APOD_BY_DATE,
  (date) => date,
)();

export const getApodByDateSuccess = createAction(
  AT.GET_APOD_BY_DATE_SUCCESS,
  (apodSelected) => apodSelected,
)();

export const getApodByDateFailure = createAction(
  AT.GET_APOD_BY_DATE_FAILURE,
  (error) => error,
)();
