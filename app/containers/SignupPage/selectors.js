import { createSelector } from 'reselect';

/**
 * Direct selector to the SignupPage state domain
 */
const selectSignupPageDomain = () => state => state.get('signupPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignupPage
 */

const selectSignupPage = () => createSelector(
  selectSignupPageDomain(),
  (substate) => substate.toJS()
);

export default selectSignupPage;
export {
  selectSignupPageDomain,
};
