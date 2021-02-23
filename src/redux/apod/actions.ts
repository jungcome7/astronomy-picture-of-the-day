import { createAction } from 'typesafe-actions';
import AT from './actionTypes';

export const requestGetApodByPeriod = createAction(AT.REQUEST_GET_APOD_BY_PERIOD, ({ startDate, endDate }) => ({
  startDate,
  endDate,
}))();

export const requestGetApodByPeriodSuccess = createAction(
  AT.REQUEST_GET_APOD_BY_PERIOD_SUCCESS,
  (apodList) => apodList,
)();

export const requestGetApodByPeriodError = createAction(AT.REQUEST_GET_APOD_BY_PERIOD_ERROR, (error) => error)();

export const requestGetApodByYear = createAction(AT.REQUEST_GET_APOD_BY_YEAR, (year) => year)();

export const requestGetApodByYearSuccess = createAction(AT.REQUEST_GET_APOD_BY_YEAR_SUCCESS, (apodList) => apodList)();

export const requestGetApodByYearError = createAction(AT.REQUEST_GET_APOD_BY_YEAR_ERROR, (error) => error)();
