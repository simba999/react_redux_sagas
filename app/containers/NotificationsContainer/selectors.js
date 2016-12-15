import {createSelector} from "reselect";
/**
 * Direct selector to the notificationsContainer state domain
 */
const selectNotificationsContainerDomain = () => state => state.get('notificationsContainer');
/**
 * Other specific selectors
 */
/**
 * Default selector used by NotificationsContainer
 */

const selectNotificationsContainer = () => createSelector(
  selectNotificationsContainerDomain(),
  (substate) => substate.toJS()
);
export default selectNotificationsContainer;
export {
  selectNotificationsContainerDomain,
};
