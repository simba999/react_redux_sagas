import expect from "expect";
import notificationsContainerReducer from "../reducer";
import {fromJS} from "immutable";
describe('notificationsContainerReducer', () => {
  it('returns the initial state', () => {
    expect(notificationsContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
