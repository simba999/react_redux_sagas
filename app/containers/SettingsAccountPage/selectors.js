import { createSelector } from 'reselect';

/**
 * Direct selector to the settingsAccountPage state domain
 */
const selectSettingsAccountPageDomain = () => state => state.get('settingsAccountPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SettingsAccountPage
 */

const selectSettingsAccountPage = () => createSelector(
  selectSettingsAccountPageDomain(),
  (substate) => substate.toJS()
);

export default selectSettingsAccountPage;
export {
  selectSettingsAccountPageDomain,
};
