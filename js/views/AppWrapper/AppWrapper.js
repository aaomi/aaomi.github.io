import React from 'react';
import PropTypes from 'prop-types';

import 'js/views/AppWrapper/AppWrapper.scss';

export default function AppWrapper({ children }) {
  return (
    <div className='upbound-app-wrapper'>
      {children}
    </div>
  );
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
