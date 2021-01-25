import { ApodState, ApodAction } from './types';
import { createReducer } from 'typesafe-actions';
import AT from './actionTypes';

const initialState: ApodState = {
  apodList: [],
  // 필요시 list에서 가져오면 됨. 굳이 저장할 필요 x. 핵심: key를 url path에서 가져온다
  year: 2021,
  page: 1,
};

// switch case

const apod = createReducer<ApodState, ApodAction>(initialState, {
  [AT.GET_APOD_BY_PERIOD_SUCCESS]: (state, { payload: apodList }) => ({
    ...state,
    apodList: [...state.apodList, ...apodList],
  }),
  [AT.GET_APOD_BY_PERIOD_ERROR]: (state, { payload: error }) => ({
    ...state,
    error,
  }),
  [AT.GET_APOD_BY_YEAR]: (state, { payload: year }) => ({
    ...state,
    page: 1,
    year,
  }),
  [AT.GET_APOD_BY_YEAR_SUCCESS]: (state, { payload: apodList }) => ({
    ...state,
    apodList,
  }),
  [AT.GET_APOD_BY_YEAR_ERROR]: (state, { payload: error }) => ({
    ...state,
    error,
  }),
});

export default apod;
