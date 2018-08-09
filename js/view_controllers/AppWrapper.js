import localforage from 'localforage';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { beginLogin, loginSucceded, loginFailed } from 'js/actions/login';
import { updateAuthenticationToken, AUTH_TOKEN_COOKIE_NAME } from 'js/actions/auth';

import AppWrapper from 'js/views/AppWrapper/AppWrapper';

export default withRouter(connect(null, dispatch => ({
  authenticate: () => {
    dispatch(beginLogin());

    localforage.getItem(AUTH_TOKEN_COOKIE_NAME).then((token) => {
      if (!token) {
        return dispatch(loginFailed(token));
      }
      updateAuthenticationToken(token);
      dispatch(loginSucceded(token));
    }).catch(() => {
      dispatch(loginFailed());
    });
  }
}))(AppWrapper));
