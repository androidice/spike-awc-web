
import { fromJS } from 'immutable';
import meetingRoomsPageReducer from '../reducer';

describe('meetingRoomsPageReducer', () => {
  it('returns the initial state', () => {
    expect(meetingRoomsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
