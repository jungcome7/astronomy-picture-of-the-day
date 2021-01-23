import { LoadingState, LoadingAction } from './types';
import { createReducer } from 'typesafe-actions';
import AT from './actionTypes';

const initialState: LoadingState = {};

const loading = createReducer<LoadingState, LoadingAction>(initialState, {
  [AT.START_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: true,
  }),
  [AT.FINISH_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: false,
  }),
});

export default loading;
