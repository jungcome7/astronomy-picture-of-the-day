import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { Apod } from '../../types';

export type ApodAction = ActionType<typeof actions>;

export type ApodState = {
  apodList: Apod[];
  error?: unknown;
};