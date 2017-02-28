import expect from 'expect';
import settingsPlayerPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('settingsPlayerPageReducer', () => {
  it('returns the initial state', () => {
    expect(settingsPlayerPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
