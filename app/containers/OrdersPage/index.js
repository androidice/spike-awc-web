/*
 *
 * OrdersPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import messages from './messages';

export class OrdersPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <h1>Welcome to Orders</h1>
      </div>
    );
  }
}

OrdersPage.propTypes = {

};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
