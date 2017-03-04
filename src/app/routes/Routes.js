import React from 'react';
import {
  Route,
  IndexRoute
 }                              from 'react-router';
import {
  App,
  User,
  LayoutContainer,
  ConnectedHome,
  ConnectedAbout,
  ConnectedOpenCase,
  ConnectedCloseClaim,
  ConnectedReports,
}                               from '../containers';
import {
  PageNotFound
}                               from '../views';

const Routes = () => {
  return (
    <Route component={LayoutContainer}>
      <Route path="/" component={App} >
        <IndexRoute component={ConnectedHome} onEnter={scrollToTop} />
        <Route path="/about" component={ConnectedAbout} onEnter={scrollToTop} />
        <Route path="/opencase" component={ConnectedOpenCase} onEnter={scrollToTop} />
        <Route path="/closeclaim" component={ConnectedCloseClaim} onEnter={scrollToTop} />
        <Route path="/reports" component={ConnectedReports} onEnter={scrollToTop} />
        <Route path="*" component={PageNotFound} onEnter={scrollToTop} />
      </Route>
      <Route component={User}>
        <Route path="/user" component={ConnectedHome} onEnter={scrollToTop} />
      </Route>
    </Route>
  );
};

function scrollToTop() {
  window.scrollTo(0, 0);
}

export default Routes;
