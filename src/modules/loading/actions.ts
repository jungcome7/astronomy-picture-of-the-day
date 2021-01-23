import { createAction } from 'typesafe-actions';
import AT from './actionTypes';

export const startLoading = createAction(
  AT.START_LOADING,
  (requestType) => requestType,
)<string>();

export const finishLoading = createAction(
  AT.FINISH_LOADING,
  (requestType) => requestType,
)<string>();
