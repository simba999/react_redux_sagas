/*
 *
 * VideoManagerPage actions
 *
 */
import {GET_VIDEO_MANAGER_ACTION, DEFAULT_ACTION} from "./constants";
export function getVideoManagerAction(folder_id) {
  return {
    type: GET_VIDEO_MANAGER_ACTION,
    folder_id
  };
}
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
