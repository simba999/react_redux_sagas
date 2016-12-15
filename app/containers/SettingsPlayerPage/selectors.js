import { createSelector } from 'reselect';

/**
 * Direct selector to the settingsPlayerPage state domain
 */
const selectSettingsPlayerPageDomain = () => state => state.get('settingsPlayerPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SettingsPlayerPage
 */

const selectSettingsPlayerPage = () => createSelector(
  selectSettingsPlayerPageDomain(),
  (substate) => substate.toJS()
);

export default selectSettingsPlayerPage;
export {
  selectSettingsPlayerPageDomain,
};
