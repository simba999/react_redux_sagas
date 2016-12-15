import {take, call, put} from "redux-saga/effects";

import { api } from 'modules/api';



import {GET_VIDEO_MANAGER_ACTION} from "./constants";
import {loadedAction} from "containers/ModalsContainer/actions";





export function* defaultSaga() {
  const {folder_id} = yield take(GET_VIDEO_MANAGER_ACTION);
  const {data} = yield api.get('/files', {folder_id});

  yield put({type: 'load', data});
  yield put(loadedAction());
  return;
}
// All sagas to be loaded
export default [
  defaultSaga,
];
