import { connect } from 'react-redux';

import LoginPage from 'js/views/pages/LoginPage/LoginPage';

import { login } from 'js/actions/login';

import { ROUTE_ADMIN_JOB_SEEKERS_PAGE } from 'js/constants/routes';

import { push } from 'react-router-redux';

export default connect(state => ({
  loginSuccessful: !!state.login.token,
  loggingIn: state.login.loading,
  errorMessage: state.login.errorMessage
}), dispatch => ({
  onLogin: ({ username, password }) => {
    dispatch(login({
      username,
      password
    }));
  },
  redirectToAdminJobSeekersPage: () => {
    dispatch(push(ROUTE_ADMIN_JOB_SEEKERS_PAGE));
  }
}))(LoginPage);
