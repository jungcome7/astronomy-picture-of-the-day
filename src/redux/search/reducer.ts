import { SearchState, SearchAction } from './types';
import { createReducer } from 'typesafe-actions';
import AT from './actionTypes';

const initialState: SearchState = {
  input: '',
};

const search = createReducer<SearchState, SearchAction>(initialState, {
  [AT.CHANGE_INPUT]: (state, { payload: input }) => ({
    ...state,
    input,
  }),
  [AT.REMOVE_INPUT]: () => initialState,
});

export default search;
