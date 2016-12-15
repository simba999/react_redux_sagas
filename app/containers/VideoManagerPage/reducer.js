/*
 *
 * VideoManagerPage reducer
 *
 */
import {fromJS} from "immutable";
import {DEFAULT_ACTION} from "./constants";
const initialState = fromJS({
  files: []
});
function videoManagerPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case 'load':
      return fromJS({files: action.data.items});
    default:
      return state;
  }
}
export default videoManagerPageReducer;
