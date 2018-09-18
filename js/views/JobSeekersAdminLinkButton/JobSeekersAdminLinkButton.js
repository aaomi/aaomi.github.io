import React from 'react';
import PropTypes from 'prop-types';

const JobSeekersAdminLinkButton = ({ goToAdminJobSeekersPage }) => (
  <a
    onClick={goToAdminJobSeekersPage}
    role='button'
    tabIndex='0'
    href='javascript:void(0)'
  >
    {'Job Seekers'}
  </a>
);

JobSeekersAdminLinkButton.propTypes = {
  goToAdminJobSeekersPage: PropTypes.func.isRequired
};

export default JobSeekersAdminLinkButton;
