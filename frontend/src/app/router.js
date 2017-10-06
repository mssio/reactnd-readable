import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainContainer } from 'app/containers';
import { NotFound } from 'app/components';

export default function AppRouter () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/404' component={NotFound} />
        <Route path='/' component={MainContainer} />
      </Switch>
    </BrowserRouter>
  );
}
