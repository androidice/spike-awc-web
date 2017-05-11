import { createSelector } from 'reselect';

/**
 * Direct selector to the boothsPage state domain
 */
const selectBoothsPageDomain = () => (state) => state.get('boothsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BoothsPage
 */

const makeSelectBoothsPage = () => createSelector(
  selectBoothsPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectBoothsPage;
export {
  selectBoothsPageDomain,
};
