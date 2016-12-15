import expect from "expect";
import uploadSuccessPageReducer from "../reducer";
import {fromJS} from "immutable";
describe('uploadSuccessPageReducer', () => {
  it('returns the initial state', () => {
    expect(uploadSuccessPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
