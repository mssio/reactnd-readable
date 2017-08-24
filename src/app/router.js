import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { PostListContainer, PostDetailContainer } from 'app/containers';
import { NotFound } from 'app/components';

export default function AppRouter () {
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={PostListContainer} />
          <Route exact path='/404' component={NotFound} />
          <Route exact path='/:categoryId/:postId' component={PostDetailContainer} />
          <Route exact path='/:categoryId' component={PostListContainer} />
          <Redirect to='/404' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
