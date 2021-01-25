import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './redux';
import { getApodByYear } from './redux/apod';
import { BrowserRouter } from 'react-router-dom';
import { THIS_YEAR } from './constants';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

// store에 직접 접근 x
// useDispatch
function loadApod() {
  store.dispatch(getApodByYear(THIS_YEAR));
}
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
