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
  Index,
  Signin,
  Signup,
  Licence,
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
    <Route path="/" component={LayoutContainer}>
      <IndexRoute component={Index} onEnter={scrollToTop} />
      <Route path="signup" component={Signup} onEnter={scrollToTop} />
      <Route path="signin" component={Signin} onEnter={scrollToTop} />
      <Route component={App} >
        <Route path="home" component={ConnectedHome} onEnter={scrollToTop} />
        <Route path="about" component={ConnectedAbout} onEnter={scrollToTop} />
        <Route path="opencase" component={ConnectedOpenCase} onEnter={scrollToTop} />
        <Route path="closeclaim" component={ConnectedCloseClaim} onEnter={scrollToTop} />
        <Route path="reports" component={ConnectedReports} onEnter={scrollToTop} />
        <Route path="profile" component={ConnectedProfile} onEnter={scrollToTop} />
        <Route path="password" component={ConnectedPassword} onEnter={scrollToTop} />
        <Route path="payment" component={ConnectedPayment} onEnter={scrollToTop} />
        <Route path="users" component={ConnectedUsers} onEnter={scrollToTop} />
        <Route path="licence" component={Licence} onEnter={scrollToTop} />
      </Route>
      <Route component={UserLayout}>
        <Route path="" component={SubInfo} onEnter={scrollToTop}>
          <Route path="user" component={ConnectedInfo} onEnter={scrollToTop} />
          <Route path="adoption" component={ConnectedInfo} onEnter={scrollToTop} />
          <Route path="aliases" component={ConnectedInfoAliase} onEnter={scrollToTop} />
          <Route path="/activities" component={ConnectedInfo} onEnter={scrollToTop} />
          <Route path="/awards" component={ConnectedInfo} onEnter={scrollToTop} />
          <Route path="/affiliations" component={ConnectedInfo} onEnter={scrollToTop} />
          <Route path="/family_history" component={ConnectedInfo} onEnter={scrollToTop} />
          <Route path="/education_history" component={ConnectedInfo} onEnter={scrollToTop} />
          <Route path="/residental_history" component={ConnectedInfo} onEnter={scrollToTop} />
          <Route path="/military_history" component={ConnectedInfo} onEnter={scrollToTop} />
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
