import { LoadingState, LoadingAction } from './types';
import { createReducer } from 'typesafe-actions';
import { START_LOADING, FINISH_LOADING } from './actions';

const initialState: LoadingState = {};

const loading = createReducer<LoadingState, LoadingAction>(initialState, {
  [START_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: true,
  }),
  [FINISH_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: false,
  }),
});

export default loading;
