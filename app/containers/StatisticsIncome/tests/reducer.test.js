import expect from "expect";
import statisticsIncomeReducer from "../reducer";
import {fromJS} from "immutable";
describe('statisticsIncomeReducer', () => {
  it('returns the initial state', () => {
    expect(statisticsIncomeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
