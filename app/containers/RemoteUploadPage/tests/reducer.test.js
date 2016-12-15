import expect from "expect";
import remoteUploadPageReducer from "../reducer";
import {fromJS} from "immutable";
describe('remoteUploadPageReducer', () => {
  it('returns the initial state', () => {
    expect(remoteUploadPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
