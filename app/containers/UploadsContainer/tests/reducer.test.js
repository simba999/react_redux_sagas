import expect from "expect";
import uploadsContainerReducer from "../reducer";
import {fromJS} from "immutable";
describe('uploadsContainerReducer', () => {
  it('returns the initial state', () => {
    expect(uploadsContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
