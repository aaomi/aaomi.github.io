import React from 'react';
import PropTypes from 'prop-types';

import 'js/views/AppWrapper/AppWrapper.scss';

import Header from 'js/views/Header/Header';

export default class AppWrapper extends React.Component {
  constructor(props) {
    super(props);

    props.authenticate();
  }
  render() {
    return (
      <div className='upbound-app-wrapper'>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  authenticate: PropTypes.func.isRequired
};
