import {createSelector} from "reselect";
/**
 * Direct selector to the dashboardPage state domain
 */
const selectLoginPageDomain = () => state => state.get('loginPage');
const selectChartDomain = () => state => state.getIn(['loginPage','chart']);
/**
 * Other specific selectors
 */
/**
 * Default selector used by LoginPage
 */

const selectLoginPage = createSelector(
  selectLoginPageDomain(),
  (substate) => substate.toJS()
);
const selectChart = createSelector(
  selectChartDomain(),
  (substate) => substate.toJS()
);
export default selectLoginPage;
export {
  selectLoginPage,
  selectChart,
};
