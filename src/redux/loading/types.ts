import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type LoadingAction = ActionType<typeof actions>;

export type Loading = {
  ['GET_SUCCESS']?: boolean;
  ['GET_FAILURE']?: boolean;
};

export type LoadingState = Loading;
