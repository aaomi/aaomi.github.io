import _get from 'lodash/get';

import { updateAuthenticationToken } from 'js/actions/auth';
import api from 'js/actions/api';

export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';

export function beginLogin() {
  return {
    type: LOGIN_BEGIN
  };
}

export function loginSucceded(token) {
  return {
    type: LOGIN_SUCCEEDED,
    token
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    errorMessage
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function login({ username, password }) {
  return dispatch => {
    dispatch(beginLogin());

    api.post('sessions/create', {
      username,
      password
    }).then((response) => {
      const token = _get(response, 'data.data.token');
      updateAuthenticationToken(token);
      dispatch(loginSucceded(token));
    }).catch((response) => {
      dispatch(loginFailed(_get(response, 'data.message')));
    });
  };
}
