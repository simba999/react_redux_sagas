import React from 'react';
import {
  Route,
  IndexRoute
 }                              from 'react-router';
import {
  App,
  LayoutContainer,
  ConnectedHome,
  ConnectedAbout,
  ConnectedOpenCase,
  ConnectedCloseClaim,
  ConnectedReports,
  ConnectedInfo,
  ConnectedInfoIndex,
  ConnectedInfoAliase,
  ConnectedProfile,
  ConnectedPassword,
  ConnectedUsers,
  ConnectedPayment,
}                               from '../containers';

import UserLayout               from '../containers/user/User';
import SubInfo                  from '../containers/subinfo/SubInfo';
import ConncetedResearch        from '../containers/research/Research';
import ConncetedReview          from '../containers/review/Review';
import ConncetedAgreement       from '../containers/agreement/index';
import ConncetedClaimReport     from '../containers/ClaimReport/index';

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
        <Route path="/profile" component={ConnectedProfile} onEnter={scrollToTop} />
        <Route path="/password" component={ConnectedPassword} onEnter={scrollToTop} />
        <Route path="/payment" component={ConnectedPayment} onEnter={scrollToTop} />
        <Route path="/users" component={ConnectedUsers} onEnter={scrollToTop} />
      </Route>
      <Route component={UserLayout}>
        <Route path="/user" component={SubInfo} onEnter={scrollToTop}>
          <IndexRoute component={ConnectedInfo} onEnter={scrollToTop} />
          <Route path="/user/adoption" component={ConnectedInfo} onEnter={scrollToTop} />
          <Route path="/user/aliases" component={ConnectedInfoAliase} onEnter={scrollToTop} />
          <Route path="/user/activities" component={ConnectedInfo} onEnter={scrollToTop} />
          <Route path="/user/awards" component={ConnectedInfo} onEnter={scrollToTop} />
          <Route path="/user/affiliations" component={ConnectedInfo} onEnter={scrollToTop} />
          <Route path="/user/family_history" component={ConnectedInfo} onEnter={scrollToTop} />
          <Route path="/user/education_history" component={ConnectedInfo} onEnter={scrollToTop} />
          <Route path="/user/residental_history" component={ConnectedInfo} onEnter={scrollToTop} />
          <Route path="/user/military_history" component={ConnectedInfo} onEnter={scrollToTop} />
        </Route>
        <Route path="/index" component={ConnectedInfoIndex} />
        <Route path="/review" component={ConncetedReview} />
        <Route path="/research" component={ConncetedResearch} />
        <Route path="/agreement" component={ConncetedAgreement} />
        <Route path="/claimreport" component={ConncetedClaimReport} />
      </Route>
      <Route>
        <Route path="*" component={PageNotFound} onEnter={scrollToTop} />
      </Route>
    </Route>
  );
};

function scrollToTop() {
  window.scrollTo(0, 0);
}

export default Routes;
