import { createSelector } from 'reselect';

/**
 * Direct selector to the meetingRoomsPage state domain
 */
const selectMeetingRoomsPageDomain = () => (state) => state.get('meetingRoomsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MeetingRoomsPage
 */

const makeSelectMeetingRoomsPage = () => createSelector(
  selectMeetingRoomsPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectMeetingRoomsPage;
export {
  selectMeetingRoomsPageDomain,
};
