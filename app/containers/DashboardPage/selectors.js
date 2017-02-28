import { createSelector } from 'reselect';

/**
 * Direct selector to the DashboardPage state domain
 */
const selectDashboardPageDomain = () => state => state.get('dashboardPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DashboardPage
 */

const selectDashboardPage = () => createSelector(
  selectDashboardPageDomain(),
  (substate) => substate.toJS()
);

export default selectDashboardPage;
export {
  selectDashboardPageDomain,
};
