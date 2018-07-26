import React from 'react';
import PropTypes from 'prop-types';

import 'js/views/AppWrapper/AppWrapper.scss';

import Header from 'js/views/Header/Header';

export default function AppWrapper({ children }) {
  return (
    <div className='upbound-app-wrapper'>
      <Header />
      {children}
    </div>
  );
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
