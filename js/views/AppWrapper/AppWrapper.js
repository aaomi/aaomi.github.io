import React from 'react';
import PropTypes from 'prop-types';

import 'js/views/AppWrapper/AppWrapper.scss';

import Header from 'js/view_controllers/Header';

export default class AppWrapper extends React.Component {
  constructor(props) {
    super(props);

    props.authenticate();
  }
  render() {
    return (
      <div className='upbound-app-wrapper max-width-4 mx-auto px1'>
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
