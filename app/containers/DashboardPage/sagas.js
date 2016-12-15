import { take, call, put, fork, cancel } from 'redux-saga/effects';


import {UPDATE_CHART_ACTION} from "./constants";
import {chartLoadingAction, chartLoadedAction} from "./actions";

import { api } from 'modules/api';
import { LOCATION_CHANGE } from 'react-router-redux';

// debug
const wait = ms => (
  new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
)


export function* runChartUpdater() {
  while (true) {
   let {range} =  yield take(UPDATE_CHART_ACTION);

   yield put(chartLoadingAction());
   const {data} = yield api.get('/stats', {grouping: range});
   yield put(chartLoadedAction(data));

  }
}

export function* defaultSaga() {
  const {data} = yield api.get('/stats', {});
  yield put(chartLoadedAction(data));

  const chartUpdaterWatcher = yield fork(runChartUpdater);
  yield take(LOCATION_CHANGE);
  yield cancel(chartUpdaterWatcher);
  return;
}
// All sagas to be loaded
export default [
  defaultSaga,
];
