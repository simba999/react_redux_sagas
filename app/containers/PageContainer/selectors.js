import {createSelector} from "reselect";
/**
 * Direct selector to the pageContainer state domain
 */
const selectPageContainerDomain = () => state => state.get('pageContainer');
/**
 * Other specific selectors
 */
/**
 * Default selector used by PageContainer
 */

const selectPageContainer = () => createSelector(
  selectPageContainerDomain(),
  (substate) => substate.toJS()
);
export default selectPageContainer;
export {
  selectPageContainerDomain,
};
