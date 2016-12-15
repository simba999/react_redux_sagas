import expect from "expect";
import multipleUploadPageReducer from "../reducer";
import {fromJS} from "immutable";
describe('multipleUploadPageReducer', () => {
  it('returns the initial state', () => {
    expect(multipleUploadPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
