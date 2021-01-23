import { ApodState, ApodAction } from './types';
import { createReducer } from 'typesafe-actions';
import AT from './actionTypes';

const initialState: ApodState = {
  apodList: [],
};

const apod = createReducer<ApodState, ApodAction>(initialState, {
  [AT.GET_APOD_SUCCESS]: (state, { payload: apodList }) => ({
    apodList,
  }),
  [AT.GET_APOD_FAILURE]: (state, { payload: error }) => ({ ...state, error }),
});

export default apod;
