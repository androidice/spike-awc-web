/*
 *
 * MainPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectMainPage from './selectors';

export class MainPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount(){
    console.log("MainPage Will Mount");
  }

  _renderChildren(){
    return this.props.children;
  }

  render() {
    return (
      <div>
        {this._renderChildren()}
      </div>
    );
  }
}

MainPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  MainPage: makeSelectMainPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
