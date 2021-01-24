import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './redux';
import { getApodByPeriod } from './redux/apod';
import { BrowserRouter } from 'react-router-dom';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

const DEFAULT_PERIOD = { startDate: '2021-01-18', endDate: '2021-01-22' };
const loadApod = () => {
  store.dispatch(getApodByPeriod(DEFAULT_PERIOD));
};
// const loadApod = () => {
//   store.dispatch(getApodByYear(2021));
// };

loadApod();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
