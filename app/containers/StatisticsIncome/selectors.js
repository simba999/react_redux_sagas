import {createSelector} from "reselect";
/**
 * Direct selector to the statisticsIncome state domain
 */
const selectStatisticsIncomeDomain = () => state => state.get('statisticsIncome');
const selectChartDomain = () => state => state.getIn(['statisticsIncome','chart']);
/**
 * Other specific selectors
 */
/**
 * Default selector used by StatisticsIncome
 */

const selectStatisticsIncome = createSelector(
  selectStatisticsIncomeDomain(),
  (substate) => substate.toJS()
);


const selectChart = createSelector(
  selectChartDomain(),
  test,
  //(substate) => substate.toJS()
);

function test(substate) {
  console.log(substate)
  console.log('here');
  return substate.toJS();
}

export default selectStatisticsIncome;
export {
  selectStatisticsIncome,
  selectChart,
};
