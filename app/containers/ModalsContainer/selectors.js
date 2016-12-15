import {createSelector} from "reselect";
/**
 * Direct selector to the modalsContainer state domain
 */
const selectModalsContainerDomain = () => state => state.get('modalsContainer');
/**
 * Other specific selectors
 */
/**
 * Default selector used by ModalsContainer
 */

const selectModalsContainer = () => createSelector(
  selectModalsContainerDomain(),
  (substate) => substate.toJS()
);
export default selectModalsContainer;
export {
  selectModalsContainerDomain,
};
