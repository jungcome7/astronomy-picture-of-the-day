/* eslint-disable @typescript-eslint/ban-types */
import { Action } from 'redux';
export interface ReduxActionMessage<T, S = {}> {
  uuid: string;
  type: string;
  payload: T;
  meta: S;
}

// Meta ?
export interface ReduxPromisedActionMeta {
  uuid: string;
  lifecycle: {
    resolve: string;
    reject: string;
  };
}

export type ActionFunc<T, S> = (payload?: T, meta?: S) => ReduxActionMessage<T extends undefined ? {} : T, S>;

export type PromisedActionFunc<T, S> = (
  payload?: T,
  meta?: S,
) => ReduxActionMessage<T extends undefined ? {} : T, S & ReduxPromisedActionMeta>;

export interface MyAction<T = string, P = any> extends Action<T> {
  uuid: string;
  type: T;
  payload: P;
}
