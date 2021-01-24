enum ActionTypes {
  GET_APOD_BY_PERIOD = 'apod/GET_APOD_BY_PERIOD',
  GET_APOD_BY_PERIOD_SUCCESS = 'apod/GET_APOD_BY_PERIOD_SUCCESS',
  GET_APOD_BY_PERIOD_FAILURE = 'apod/GET_APOD_BY_PERIOD_FAILURE',

  GET_APOD_BY_DATE = 'apod/GET_APOD_BY_DATE',
  GET_APOD_BY_DATE_SUCCESS = 'apod/GET_APOD_BY_DATE_SUCCESS',
  GET_APOD_BY_DATE_FAILURE = 'apod/GET_APOD_BY_DATE_FAILURE',

  INITIALIZE_SELECTED_APOD = 'apod/INITIALIZE_SELECTED_APOD',

  GET_APOD_BY_YEAR = 'apod/GET_APOD_BY_YEAR',
  GET_APOD_BY_YEAR_SUCCESS = 'apod/GET_APOD_BY_YEAR_SUCCESS',
  GET_APOD_BY_YEAR_FAILURE = 'apod/GET_APOD_BY_YEAR_FAILURE',

  SET_YEAR = 'apod/SET_YEAR',
}

export default ActionTypes;
