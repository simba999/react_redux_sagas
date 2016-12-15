import expect from "expect";
import modalsContainerReducer from "../reducer";
import {fromJS} from "immutable";
describe('modalsContainerReducer', () => {
  it('returns the initial state', () => {
    expect(modalsContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
