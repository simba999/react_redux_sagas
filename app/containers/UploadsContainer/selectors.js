import {createSelector} from "reselect";
/**
 * Direct selector to the UploadsContainer state domain
 */
const selectUploadsContainerDomain = () => state => state.get('uploadsContainer');
/**
 * Other specific selectors
 */
/**
 * Default selector used by UploadsContainer
 */

const selectUploadsContainer = () => createSelector(
  selectUploadsContainerDomain(),
  (substate) => substate.toJS()
);
export default selectUploadsContainer;
export {
  selectUploadsContainerDomain,
};
