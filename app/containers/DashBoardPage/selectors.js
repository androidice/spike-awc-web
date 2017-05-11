import { createSelector } from 'reselect';

/**
 * Direct selector to the dashBoardPage state domain
 */
const selectDashBoardPageDomain = () => (state) => state.get('dashBoardPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DashBoardPage
 */

const makeSelectDashBoardPage = () => createSelector(
  selectDashBoardPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectDashBoardPage;
export {
  selectDashBoardPageDomain,
};
