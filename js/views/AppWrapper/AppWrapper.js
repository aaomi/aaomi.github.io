import React from 'react';
import PropTypes from 'prop-types';

import 'js/views/AppWrapper/AppWrapper.scss';

import Header from 'js/view_controllers/Header';
import Footer from 'js/view_controllers/Footer';

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
        <Footer />
      </div>
    );
  }
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  authenticate: PropTypes.func.isRequired
};
