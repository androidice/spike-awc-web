
import { fromJS } from 'immutable';
import dashBoardPageReducer from '../reducer';

describe('dashBoardPageReducer', () => {
  it('returns the initial state', () => {
    expect(dashBoardPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
