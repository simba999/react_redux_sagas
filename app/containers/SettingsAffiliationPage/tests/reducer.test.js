import expect from 'expect';
import settingsAffiliationPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('settingsAffiliationPageReducer', () => {
  it('returns the initial state', () => {
    expect(settingsAffiliationPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
