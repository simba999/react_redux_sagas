import expect from "expect";
import videoManagerPageReducer from "../reducer";
import {fromJS} from "immutable";
describe('videoManagerPageReducer', () => {
  it('returns the initial state', () => {
    expect(videoManagerPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
