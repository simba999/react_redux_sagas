import {createSelector} from "reselect";
/**
 * Direct selector to the remoteUploadPage state domain
 */
const selectRemoteUploadPageDomain = () => state => state.get('remoteUploadPage');
/**
 * Other specific selectors
 */
/**
 * Default selector used by RemoteUploadPage
 */

const selectRemoteUploadPage = () => createSelector(
  selectRemoteUploadPageDomain(),
  (substate) => substate.toJS()
);
export default selectRemoteUploadPage;
export {
  selectRemoteUploadPageDomain,
};
