import { connect } from 'react-redux';

import JobSeekersAdminLinkButton from 'js/views/JobSeekersAdminLinkButton/JobSeekersAdminLinkButton';

import { push } from 'react-router-redux';

import { ROUTE_JOB_SEEKERS_PAGE } from 'js/constants/routes';

export default connect(null, dispatch => ({
  goToJobSeekersPage: () => {
    dispatch(push(ROUTE_JOB_SEEKERS_PAGE));
  }
}))(JobSeekersAdminLinkButton);
