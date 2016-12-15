import {createSelector} from "reselect";
/**
 * Direct selector to the statisticsPage state domain
 */
const selectStatisticsPageDomain = () => state => state.get('statisticsPage');
/**
 * Other specific selectors
 */
/**
 * Default selector used by StatisticsPage
 */

const selectStatisticsPage = () => createSelector(
  selectStatisticsPageDomain(),
  (substate) => substate.toJS()
);
export default selectStatisticsPage;
export {
  selectStatisticsPageDomain,
};
