import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ApodPage } from '../containers/ApodPage';
import { Main } from '../containers/Main';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/apod/:apod" component={ApodPage} />
    </Switch>
  );
};

export default AppRouter;
