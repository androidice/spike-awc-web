
import { fromJS } from 'immutable';
import sponsorShipsPageReducer from '../reducer';

describe('sponsorShipsPageReducer', () => {
  it('returns the initial state', () => {
    expect(sponsorShipsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
