import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ApodDetail } from '../containers/ApodDetail';
import { Main } from '../containers/Main';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/apod/:apod">
        <ApodDetail />
      </Route>
    </Switch>
  );
};

export default AppRouter;
