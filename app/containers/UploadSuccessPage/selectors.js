import {createSelector} from "reselect";
/**
 * Direct selector to the uploadSuccessPage state domain
 */
const selectUploadSuccessPageDomain = () => state => state.get('uploadsContainer');
/**
 * Other specific selectors
 */
/**
 * Default selector used by UploadSuccessPage
 */

const selectUploadSuccessPage = () => createSelector(
  selectUploadSuccessPageDomain(),
  (substate) => substate.toJS()
);
export default selectUploadSuccessPage;
export {
  selectUploadSuccessPageDomain,
};
