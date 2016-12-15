import {createSelector} from "reselect";
/**
 * Direct selector to the dashboardPage state domain
 */
const selectDashboardPageDomain = () => state => state.get('dashboardPage');
const selectChartDomain = () => state => state.getIn(['dashboardPage','chart']);
/**
 * Other specific selectors
 */
/**
 * Default selector used by DashboardPage
 */

const selectDashboardPage = createSelector(
  selectDashboardPageDomain(),
  (substate) => substate.toJS()
);
const selectChart = createSelector(
  selectChartDomain(),
  (substate) => substate.toJS()
);
export default selectDashboardPage;
export {
  selectDashboardPage,
  selectChart,
};
