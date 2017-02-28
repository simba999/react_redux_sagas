import {createSelector} from "reselect";
/**
 * Direct selector to the pageContainer state domain
 */
const selectPageContainer1Domain = () => state => state.get('pageContainer1');
/**
 * Other specific selectors
 */
/**
 * Default selector used by PageContainer1
 */

const selectPageContainer1 = () => createSelector(
  selectPageContainer1Domain(),
  (substate) => substate.toJS()
);
export default selectPageContainer1;
export {
  selectPageContainer1Domain,
};
