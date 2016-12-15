import {createSelector} from "reselect";
/**
 * Direct selector to the videoManagerPage state domain
 */
const selectVideoManagerPageDomain = () => state => state.get('videoManagerPage');
/**
 * Other specific selectors
 */
/**
 * Default selector used by VideoManagerPage
 */

const selectVideoManagerPage = () => createSelector(
  selectVideoManagerPageDomain(),
  (substate) => substate.toJS()
);
export default selectVideoManagerPage;
export {
  selectVideoManagerPageDomain,
};
