/*
 *
 * UploadsContainer reducer
 *
 */
import {fromJS, Map, OrderedMap} from "immutable";
import {
  UPDATE_TOTAL_ACTION,
  UPLOAD_FINISHED_ACTION,
  UPDATE_PROGRESS_ACTION,
  ADD_FILE_TO_STORE_ACTION,
  DELETE_FILE_ACTION,
  DEFAULT_ACTION,
  UPLOAD_DONE_ACTION
} from "./constants";
var humanize = require('humanize');

const initialState = Map({
  totals: Map({speed: 0}), uploads: OrderedMap({}), uploaded: OrderedMap({})
});
function uploadsContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    // case ADD_FILES_ACTION:
    //
    //   const temp_result = {};
    //
    //   for (let file of action.files) {
    //     const hash = md5(file.name);
    //     // const hash = file.id;
    //     // console.log(hash)
    //     temp_result[hash] = getFileStructure(file);
    //   }
    //
    //   return state.mergeIn(['uploads'],fromJS(temp_result));
    case ADD_FILE_TO_STORE_ACTION:
      return state.setIn(['uploads', action.file.id], getFileStructure(action.file))
    case UPDATE_PROGRESS_ACTION:
      let result;
      for (let key of Object.keys(action.data)) {
        result = state.mergeIn(['uploads', key], {loaded: action.data[key].loaded, progress: action.data[key].progress})
      }
      return result
    case UPLOAD_FINISHED_ACTION:
      return state.mergeIn(['uploads', action.file.id], {
        loaded: state.getIn(['uploads', action.file.id, 'size']),
        progress: 100
      }).setIn(['uploaded', action.code], action.file.name);
    case DELETE_FILE_ACTION:
      return state.deleteIn(['uploads', action.id]);
    case UPDATE_TOTAL_ACTION:
      console.log(action.total);
      const new_stte = state.mergeIn(['totals'], {speed: action.total.bytesPerSec});
      console.log(new_stte.toJS());
      return new_stte;
    case UPLOAD_DONE_ACTION:
      return state
      //return state.setIn(['uploads'],OrderedMap({}));

    default:
      return state;
  }
}
function getFileStructure(file) {
  return fromJS({
    name: file.name,
    loaded: 0,
    size: file.size,
    content_type: file.type,
    progress: 0,
  })
}
export default uploadsContainerReducer;
