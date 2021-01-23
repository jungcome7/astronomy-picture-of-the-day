import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ApodAction = ActionType<typeof actions>;

export type Apod = {
  copyright?: string;
  date: string;
  explanantion: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  url?: string;
};

export type ApodState = {
  apodList: Apod[];
  error?: boolean;
};
