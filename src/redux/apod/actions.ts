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

export const getApodByDate = createAction(
  AT.GET_APOD_BY_DATE,
  (date) => date,
)();

export const getApodByDateSuccess = createAction(
  AT.GET_APOD_BY_DATE_SUCCESS,
  (apodSelected) => apodSelected,
)();

export const getApodByDateError = createAction(
  AT.GET_APOD_BY_DATE_ERROR,
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

export const getApodByYearError = createAction(
  AT.GET_APOD_BY_YEAR_ERROR,
  (error) => error,
)();

export const setYear = createAction(AT.SET_YEAR, (year) => year)();

export const setPage = createAction(AT.SET_PAGE, (page) => page)();

export const setInitialPageByYear = createAction(
  AT.SET_INITIAL_PAGE_BY_YEAR,
  (year) => year,
)();
