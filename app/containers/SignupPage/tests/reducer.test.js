import expect from 'expect';
import settingsAccountPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('settingsAccountPageReducer', () => {
  it('returns the initial state', () => {
    expect(settingsAccountPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
