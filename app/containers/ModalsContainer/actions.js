/*
 *
 * ModalsContainer actions
 *
 */
import {LOADING_ACTION, LOADED_ACTION, DEFAULT_ACTION} from "./constants";
export function loadingAction() {
  return {
    type: LOADING_ACTION,
  };
}
export function loadedAction() {
  return {
    type: LOADED_ACTION,
  };
}
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
