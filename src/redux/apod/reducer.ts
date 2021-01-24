import { ApodState, ApodAction } from './types';
import { createReducer } from 'typesafe-actions';
import AT from './actionTypes';

const initialState: ApodState = {
  apodList: [],
  apodSelected: null,
  year: 2021,
  page: 1,
};

const apod = createReducer<ApodState, ApodAction>(initialState, {
  [AT.GET_APOD_BY_PERIOD_SUCCESS]: (state, { payload: apodList }) => ({
    ...state,
    apodList,
  }),
  [AT.GET_APOD_BY_PERIOD_FAILURE]: (state, { payload: error }) => ({
    ...state,
    error,
  }),
  [AT.GET_APOD_BY_DATE_SUCCESS]: (state, { payload: apodSelected }) => ({
    ...state,
    apodSelected,
  }),
  [AT.GET_APOD_BY_DATE_FAILURE]: (state, { payload: error }) => ({
    ...state,
    error,
  }),
  [AT.INITIALIZE_SELECTED_APOD]: (state) => ({
    ...state,
    apodSelected: null,
  }),
  [AT.GET_APOD_BY_YEAR_SUCCESS]: (state, { payload: apodList }) => ({
    ...state,
    apodList,
  }),
  [AT.GET_APOD_BY_YEAR_FAILURE]: (state, { payload: error }) => ({
    ...state,
    error,
  }),
  [AT.SET_YEAR]: (state, { payload: year }) => ({
    ...state,
    year,
  }),
});

export default apod;
