/*
 *
 * DashboardPage actions
 *
 */
import {UPDATE_CHART_ACTION, LOADING_CHART_ACTION, LOADED_CHART_ACTION} from "./constants";

export function updateChartAction(range) {
  return {
    type: UPDATE_CHART_ACTION,
    range,
  };
}


export function chartLoadingAction() {
  return {
    type: LOADING_CHART_ACTION,
  };
}


export function chartLoadedAction(data) {
  return {
    type: LOADED_CHART_ACTION,
    data,
  };
}

