import { createSelector } from 'reselect';

/**
 * Direct selector to the settingsAffiliationPage state domain
 */
const selectSettingsAffiliationPageDomain = () => state => state.get('settingsAffiliationPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SettingsAffiliationPage
 */

const selectSettingsAffiliationPage = () => createSelector(
  selectSettingsAffiliationPageDomain(),
  (substate) => substate.toJS()
);

export default selectSettingsAffiliationPage;
export {
  selectSettingsAffiliationPageDomain,
};
