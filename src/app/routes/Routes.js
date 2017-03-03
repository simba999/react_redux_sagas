import React from 'react';
import {
  Route,
  IndexRoute
 }                              from 'react-router';
import {
  App,
  ConnectedHome,
  ConnectedAbout,
  ConnectedOpenCase
}                               from '../containers';
import {
  PageNotFound
}                               from '../views';

const Routes = () => {
  return (
    <Route path="/" component={App} >
    <IndexRoute component={ConnectedHome} onEnter={scrollToTop} />
    <Route path="/about" component={ConnectedAbout} onEnter={scrollToTop} />
    <Route path="/opencase" component={ConnectedOpenCase} onEnter={scrollToTop} />
    <Route path="*" component={PageNotFound} onEnter={scrollToTop} />
    </Route>
  );
};

function scrollToTop() {
  window.scrollTo(0, 0);
}

export default Routes;
