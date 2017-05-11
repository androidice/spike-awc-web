import { createSelector } from 'reselect';

/**
 * Direct selector to the orderPage state domain
 */
const selectOrderPageDomain = () => (state) => state.get('orderPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by OrderPage
 */

const makeSelectOrderPage = () => createSelector(
  selectOrderPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectOrderPage;
export {
  selectOrderPageDomain,
};
