/*
 *
 * ModalsContainer reducer
 *
 */
import {fromJS} from "immutable";
import {LOADING_ACTION, LOADED_ACTION, DEFAULT_ACTION} from "./constants";
const initialState = fromJS({loading: true});
function modalsContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOADED_ACTION:
      return state.set('loading', false);
    case LOADING_ACTION:
      return state.set('loading', true);
    default:
      return state;
  }
}
export default modalsContainerReducer;
