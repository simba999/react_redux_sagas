import {createSelector} from "reselect";
/**
 * Direct selector to the statisticsByCountry state domain
 */
const selectStatisticsByCountryDomain = () => state => state.get('statisticsByCountry');
/**
 * Other specific selectors
 */
/**
 * Default selector used by StatisticsByCountry
 */

const selectStatisticsByCountry = () => createSelector(
  selectStatisticsByCountryDomain(),
  (substate) => substate.toJS()
);
export default selectStatisticsByCountry;
export {
  selectStatisticsByCountryDomain,
};
