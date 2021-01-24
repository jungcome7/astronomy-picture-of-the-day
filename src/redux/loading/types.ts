import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type LoadingAction = ActionType<typeof actions>;

export type Loading = {
  ['apod/GET_APOD_BY_PERIOD']?: boolean;
  ['apod/GET_APOD_BY_DATE']?: boolean;
  ['apod/GET_APOD_BY_YEAR']?: boolean;
};

export type LoadingState = Loading;
