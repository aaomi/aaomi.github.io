import React from 'react';
import PropTypes from 'prop-types';

const LogInButton = ({ goToLoginPage }) => (
  <a
    onClick={goToLoginPage}
    role='button'
    tabIndex='0'
    href='javascript:void(0)'
  >
    {'Login'}
  </a>
);

LogInButton.propTypes = {
  goToLoginPage: PropTypes.bool.required
};

export default LogInButton;
