import _ from 'lodash';
import UUID from 'uuid';
import Immutable from 'immutable';
import { createSelectorCreator, defaultMemoize } from 'reselect';
import { ActionFunc, PromisedActionFunc } from '../types/Redux';

export type ActionGenerator<T, S = {}> = ActionFunc<T, S>;

export type PromiseActionGenerator<T, S = {}> = PromisedActionFunc<T, S>;

export function actionCreator<T, S = {}>(requestType: string): ActionGenerator<T, S> {
  return (payload: any = {}, meta: any = {}) => {
    const uuid = _.get(meta, 'uuid', UUID.v4());
    _.unset(meta, 'uuid');
    return {
      uuid: !_.isEmpty(uuid) ? (uuid as string) : UUID.v4(),
      type: requestType,
      payload,
      meta,
    };
  };
}

export function actionCreatorWithPromise<T, S = {}>(requestType: any): PromiseActionGenerator<T, S> {
  return (payload: any = {}, meta: any = {}) => {
    const uuid = _.get(meta, 'uuid', UUID.v4());
    _.unset(meta, 'uuid');
    return {
      uuid: !_.isEmpty(uuid) ? (uuid as string) : UUID.v4(),
      type: requestType,
      meta: {
        ...meta,
        lifecycle: {
          resolve: `${requestType}_SUCCESS`,
          reject: `${requestType}_ERROR`,
        },
      },
      payload,
    };
  };
}

export const createImmutableEqualSelector = createSelectorCreator(defaultMemoize, Immutable.is);
