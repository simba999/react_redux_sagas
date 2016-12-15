/*
 *
 * UploadContainer actions
 *
 */
import {CONTAINER_MOUNTED_ACTION, ADD_FILES_ACTION, DELETE_FILE_ACTION, DEFAULT_ACTION} from "./constants";
export function containerMountedAction() {
  return {
    type: CONTAINER_MOUNTED_ACTION,
  };
}
export function addFilesAction(files) {
  return {
    type: ADD_FILES_ACTION,
    files,
  };
}
export function deleteFileAction(id) {
  return {
    type: DELETE_FILE_ACTION,
    id,
  };
}
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
