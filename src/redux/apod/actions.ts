import { createAction } from 'typesafe-actions';
import { Apod } from '../../types';
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

interface PayLoad {
  apodList: Apod[];
  year: number;
  error?: string;
}

export const getApodByPeriodError = createAction(
  AT.GET_APOD_BY_PERIOD_ERROR,
  (error) => error,
)<PayLoad>();

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
