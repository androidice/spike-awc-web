
import { fromJS } from 'immutable';
import boothsPageReducer from '../reducer';

describe('boothsPageReducer', () => {
  it('returns the initial state', () => {
    expect(boothsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
