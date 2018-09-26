import localforage from 'localforage';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { beginLogin, loginSucceded, loginFailed } from 'js/actions/login';
import { updateAuthenticationToken, AUTH_TOKEN_COOKIE_NAME } from 'js/actions/auth';

import AppWrapper from 'js/views/AppWrapper/AppWrapper';

import {
  ROUTE_HOME_PAGE
} from 'js/constants/routes';

export default withRouter(connect(() => ({
  footerExcluded: (pathname) => {
    return [ROUTE_HOME_PAGE].indexOf(pathname) !== -1;
  }
}), dispatch => ({
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
