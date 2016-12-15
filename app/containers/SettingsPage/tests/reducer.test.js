import expect from "expect";
import settingsPageReducer from "../reducer";
import {fromJS} from "immutable";
describe('settingsPageReducer', () => {
  it('returns the initial state', () => {
    expect(settingsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
