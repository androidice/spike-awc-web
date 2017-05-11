import { createSelector } from 'reselect';

/**
 * Direct selector to the sponsorShipsPage state domain
 */
const selectSponsorShipsPageDomain = () => (state) => state.get('sponsorShipsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SponsorShipsPage
 */

const makeSelectSponsorShipsPage = () => createSelector(
  selectSponsorShipsPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSponsorShipsPage;
export {
  selectSponsorShipsPageDomain,
};
