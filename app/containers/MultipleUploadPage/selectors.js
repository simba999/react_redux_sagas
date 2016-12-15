import {createSelector} from "reselect";
/**
 * Direct selector to the multipleUploadPage state domain
 */
const selectMultipleUploadPageDomain = () => state => state.get('multipleUploadPage');
const selectUploadsContainerDomain = () => state => state.get('uploadsContainer');
/**
 * Other specific selectors
 */
/**
 * Default selector used by MultipleUploadPage
 */

const selectMultipleUploadPage = () => createSelector(
  selectMultipleUploadPageDomain(),
  selectUploadsContainerDomain(),
  (uploadPage, uploadsContainer) => uploadsContainer.toJS()
);
export default selectMultipleUploadPage;
export {
  selectMultipleUploadPageDomain,
};
