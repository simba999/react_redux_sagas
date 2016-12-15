import expect from "expect";
import statisticsByCountryReducer from "../reducer";
import {fromJS} from "immutable";
describe('statisticsByCountryReducer', () => {
  it('returns the initial state', () => {
    expect(statisticsByCountryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
