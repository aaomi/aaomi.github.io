import { connect } from 'react-redux';

import LogInButton from 'js/views/LogInButton/LogInButton';

import { push } from 'react-router-redux';

import { ROUTE_LOGIN_PAGE } from 'js/constants/routes';

export default connect(null, dispatch => ({
  goToLoginPage: () => {
    dispatch(push(ROUTE_LOGIN_PAGE));
  }
}))(LogInButton);
