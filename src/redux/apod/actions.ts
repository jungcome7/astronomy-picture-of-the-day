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

export const initializeSelectedApod = createAction(
  AT.INITIALIZE_SELECTED_APOD,
  () => ({}),
)();

export const getApodByYear = createAction(
  AT.GET_APOD_BY_YEAR,
  (year) => year,
)();

export const getApodByYearSuccess = createAction(
  AT.GET_APOD_BY_YEAR_SUCCESS,
  (apodList) => apodList,
)();

export const getApodByYearFailure = createAction(
  AT.GET_APOD_BY_YEAR_FAILURE,
  (error) => error,
)();

export const setYear = createAction(AT.SET_YEAR, (year) => year)();

export const removeApodList = createAction(AT.REMOVE_APOD_LIST, () => [])();
