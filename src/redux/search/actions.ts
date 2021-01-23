import { createAction } from 'typesafe-actions';
import AT from './actionTypes';

export const changeInput = createAction(
  AT.CHANGE_INPUT,
  (input: string) => input,
)();
export const removeInput = createAction(AT.REMOVE_INPUT)();
