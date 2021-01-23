import { ApodState, ApodAction } from './types';
import { createReducer } from 'typesafe-actions';
import { GET_APOD_SUCCESS, GET_APOD_FAILURE } from './actions';

const initialState: ApodState = {
  apodList: [],
};

const apod = createReducer<ApodState, ApodAction>(initialState, {
  [GET_APOD_SUCCESS]: (state, { payload: apodList }) => ({
    apodList,
  }),
  [GET_APOD_FAILURE]: (state, { payload: error }) => ({ ...state, error }),
});

export default apod;
