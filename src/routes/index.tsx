import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ApodPage } from '../containers/ApodPage';
import { Main } from '../containers/Main';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/apod/:apod">
        <ApodPage />
      </Route>
    </Switch>
  );
};

export default AppRouter;
