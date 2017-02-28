import { createSelector } from 'reselect';

/**
 * Direct selector to the SigninPage state domain
 */
const selectSigninPageDomain = () => state => state.get('signinPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SigninPage
 */

const selectSigninPage = () => createSelector(
  selectSigninPageDomain(),
  (substate) => substate.toJS()
);

export default selectSigninPage;
export {
  selectSigninPageDomain,
};
