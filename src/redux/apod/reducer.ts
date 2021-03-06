import { createReducer } from 'typesafe-actions';
import { ApodState, ApodAction } from './types';
import AT from './actionTypes';

const initialState: ApodState = {
  apodList: [],
  // 필요시 list에서 가져오면 됨. 굳이 저장할 필요 x. 핵심: key를 url path에서 가져온다
  year: 2021,
  page: 1,
};

// switch case

const apod = createReducer<ApodState, ApodAction>(initialState, {
  [AT.REQUEST_GET_APOD_BY_PERIOD_SUCCESS]: (state, { payload: apodList }) => ({
    ...state,
    apodList: [...state.apodList, ...apodList],
  }),
  [AT.REQUEST_GET_APOD_BY_PERIOD_ERROR]: (state, { payload: error }) => ({
    ...state,
    error,
  }),
  // PERIOD로 통합 가능
  // get list 가 있다고 하면 get next list가 있음
  // get list -> 초기화
  // get next list -> 백엔드에서 받아온 페이지 버전(초기화 하면 안됨 , API값에 있는 걸 upsert)
  [AT.REQUEST_GET_APOD_BY_YEAR]: (state, { payload: year }) => ({
    ...state,
    page: 1,
    year,
  }),
  [AT.REQUEST_GET_APOD_BY_YEAR_SUCCESS]: (state, { payload: apodList }) => ({
    ...state,
    apodList,
  }),
  [AT.REQUEST_GET_APOD_BY_YEAR_ERROR]: (state, { payload: error }) => ({
    ...state,
    error,
  }),
});

export default apod;

// export default (state: ApodState = initialState, action: ApodAction) => {
//   switch (action.type) {
//     case AT.GET_APOD_BY_PERIOD_SUCCESS:
//       return {
//         ...state,
//         apodList: [...state.apodList, ...action.payload.apodList],
//       };

//     case AT.GET_APOD_BY_PERIOD_ERROR:
//       return {
//         ...state,
//         error: action.payload.error,
//       };

//     case AT.GET_APOD_BY_YEAR:
//       return {
//         ...state,
//         page: 1,
//         year: action.payload.year,
//       };

//     case AT.GET_APOD_BY_YEAR_SUCCESS:
//       return {
//         ...state,
//         apodList: action.payload.apodList,
//       };

//     case AT.GET_APOD_BY_YEAR_ERROR:
//       return {
//         ...state,
//         error: action.payload.error,
//       };
//   }
// };
