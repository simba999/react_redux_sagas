import {take, fork, call, put} from "redux-saga/effects";
import { push } from 'react-router-redux';
import plupload from "../../../static/plupload.full.min";
import cookie from 'react-cookie';

import {
  UPDATE_TOTAL_ACTION,
  UPLOAD_FINISHED_ACTION,
  UPDATE_PROGRESS_ACTION,
  ADD_FILE_TO_STORE_ACTION,
  CONTAINER_MOUNTED_ACTION,
  ADD_FILES_ACTION,
  UPLOAD_DONE_ACTION,
} from "./constants";
const uploaders = [];
let temp = {};
class Queue {
  constructor() {
    this.stack = [];
    this.current_resolve = undefined;
  }

  push(value) {
    this.stack.push(value);
    if (this.current_resolve) {
      this.current_resolve(this.stack.pop());
      this.current_resolve = undefined;
    }
  }

  get() {
    if (this.stack.length) {
      return Promise.resolve(this.stack.pop());
    } else {
      return this.newPromise();
    }
  }

  newPromise() {
    const self = this;
    return new Promise(function (resolve, reject) {
      self.current_resolve = resolve
    });
  }
}
const queue = new Queue();
const wait = ms => (
  new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
)
export function* addFileWatcher() {
  while (true) {
    const {files} = yield take(ADD_FILES_ACTION);
    for (let file of files) {
      add_file(file)
    }
  }
}
export function* uploadTimer() {
  while (true) {
    yield call(wait, 1000);
    const my = Object.assign({}, temp);
    temp = {};
    if (Object.keys(my).length) {
      yield put({type: UPDATE_TOTAL_ACTION, total: {bytesPerSec: uploaders[0].total.bytesPerSec}})
      yield put({type: UPDATE_PROGRESS_ACTION, data: my});
    }
    // sum from all uploaders
    // check if same as previous
    // yield put({type: UPDATE_TOTAL_ACTION, total: uploaders[0].total})
  }
}
export function* dispatcher() {
  while (true) {
    const event = yield queue.get();
    yield put(event)
  }
}
// Individual exports for testing
export function* defaultSaga() {
  yield take(CONTAINER_MOUNTED_ACTION);
  uploaders[0] = init_uploader('http://up1.stream.rexuni.com/upload/01');


  yield fork(addFileWatcher);
  yield fork(uploadTimer);
  yield fork(dispatcher);
  return;
}
function init_uploader(url) {
  console.log('init uploader')
  queue.push({type: UPLOAD_DONE_ACTION});
  // queue.push({type: UPLOAD_DONE_ACTION});
  const uploader = new plupload.Uploader({
    runtimes: 'html5',
    headers: {'Authorization': cookie.load('jwt_token')},
    browse_button: 'upload_container',
    // filters: [
    //   { title: "Image files", extensions: "jpg,gif,png" },
    //   { title: "Zip files", extensions: "iso" },
    //   { title: "Document files", extensions: "doc,pdf,txt" }
    // ],
    url: url,
    chunk_size: '10mb',
    init: {
      PostInit: function () {
        console.log("init");
      },
      FilesAdded: function (up, files) {
        console.log('added')
        plupload.each(files, function (file) {
          queue.push({type: ADD_FILE_TO_STORE_ACTION, file});
          console.log("file added", file);
        });
      },
      FileUploaded: function (up, file, info) {
        // Called when file has finished uploading
        var responce = JSON.parse(info.response);
        queue.push({type: UPLOAD_FINISHED_ACTION, file: file, code: responce.code})
      },
      UploadComplete: function (uploader, files) {
        // todo check all uploaders
        console.log('all files where uploaded');
        queue.push({type: UPLOAD_DONE_ACTION});
        queue.push(push('/upload-success'));
      },
      UploadProgress: function (up, file) {
        // console.log("progress", file);
        temp[file.id] = {
          loaded: file.loaded,
          progress: file.percent,
        };
      },
    }
  });
  uploader.init();
  return uploader;
}
function add_file(file) {
  uploaders[0].addFile(file);
  uploaders[0].start();
}
// All sagas to be loaded
export default [
  defaultSaga,
];