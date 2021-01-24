import { ApodState, ApodAction } from './types';
import { createReducer } from 'typesafe-actions';
import AT from './actionTypes';

const initialState: ApodState = {
  apodList: [],
  apodSelected: null,
  year: 2021,
  page: 1,
  finishLoad: false,
};

const apod = createReducer<ApodState, ApodAction>(initialState, {
  [AT.GET_APOD_BY_PERIOD_SUCCESS]: (state, { payload: apodList }) => ({
    ...state,
    apodList: [...state.apodList, ...apodList],
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
  [AT.SET_PAGE]: (state, { payload: page }) => ({
    ...state,
    page,
  }),
  [AT.REMOVE_APOD_LIST]: (state) => ({
    ...state,
    apodList: [],
  }),
  [AT.FINISH_LOAD_APODS]: (state, { payload: isFinish }) => ({
    ...state,
    finishLoad: isFinish,
  }),
});

export default apod;
