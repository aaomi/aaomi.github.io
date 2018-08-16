import React from 'react';
import PropTypes from 'prop-types';

const JobSeekersAdminLinkButton = ({ goToJobSeekersPage }) => (
  <a
    onClick={goToJobSeekersPage}
    role='button'
    tabIndex='0'
    href='javascript:void(0)'
  >
    {'Job Seekers'}
  </a>
);

JobSeekersAdminLinkButton.propTypes = {
  goToJobSeekersPage: PropTypes.func.isRequired
};

export default JobSeekersAdminLinkButton;
