import expect from "expect";
import pageContainerReducer from "../reducer";
import {fromJS} from "immutable";
describe('pageContainerReducer', () => {
  it('returns the initial state', () => {
    expect(pageContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
