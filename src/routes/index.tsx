import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from '../containers/Main';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/:apod">
        {/* <ApodPage /> */}
      </Route>
    </Switch>
  );
};

export default AppRouter;
