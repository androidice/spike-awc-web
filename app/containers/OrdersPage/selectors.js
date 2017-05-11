import { createSelector } from 'reselect';

/**
 * Direct selector to the ordersPage state domain
 */
const selectOrdersPageDomain = () => (state) => state.get('ordersPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by OrdersPage
 */

const makeSelectOrdersPage = () => createSelector(
  selectOrdersPageDomain(),
  (substate) => substate.toJS()
);

export {
  selectOrdersPageDomain,
};
