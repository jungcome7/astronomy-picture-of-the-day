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

export const getApodByPeriodError = createAction(
  AT.GET_APOD_BY_PERIOD_ERROR,
  (error) => error,
)();

export const getApodByYear = createAction(
  AT.GET_APOD_BY_YEAR,
  (year) => year,
)();

export const getApodByYearSuccess = createAction(
  AT.GET_APOD_BY_YEAR_SUCCESS,
  (apodList) => apodList,
)();

export const getApodByYearError = createAction(
  AT.GET_APOD_BY_YEAR_ERROR,
  (error) => error,
)();
