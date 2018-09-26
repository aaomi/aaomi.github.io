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
      <div className='upbound-app-wrapper'>
        <Header />
        {this.props.children}
        {this.props.footerExcluded(this.props.location.pathname) ? null : <Footer />}
      </div>
    );
  }
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  authenticate: PropTypes.func.isRequired,
  footerExcluded: PropTypes.func.isRequired
};
