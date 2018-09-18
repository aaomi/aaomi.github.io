import { connect } from 'react-redux';

import JobSeekersAdminLinkButton from 'js/views/JobSeekersAdminLinkButton/JobSeekersAdminLinkButton';

import { push } from 'react-router-redux';

import { ROUTE_ADMIN_JOB_SEEKERS_PAGE } from 'js/constants/routes';

export default connect(null, dispatch => ({
  goToAdminJobSeekersPage: () => {
    dispatch(push(ROUTE_ADMIN_JOB_SEEKERS_PAGE));
  }
}))(JobSeekersAdminLinkButton);
