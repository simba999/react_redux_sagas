import expect from "expect";
import statisticsPageReducer from "../reducer";
import {fromJS} from "immutable";
describe('statisticsPageReducer', () => {
  it('returns the initial state', () => {
    expect(statisticsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
