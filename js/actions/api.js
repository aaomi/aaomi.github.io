import axios from 'axios';

import { push } from 'react-router-redux';

import store from 'js/store';

import { ROUTE_LOGIN_PAGE } from 'js/constants/routes';

import { clearAuthenticationToken } from 'js/actions/auth';

import { logout } from 'js/actions/login';

const STATUS_OK = 200;
const STATUS_UNAUTHORIZED = 401;

const UPBOUND_API_BASE_URL = __DEV__ ? 'http://localhost:3000/' : '?';

const api = axios.create({
  baseURL: UPBOUND_API_BASE_URL,
  validateStatus: function (status) {
    if (status === STATUS_UNAUTHORIZED) {
      clearApiAuthenticationToken();
    }
    return status >= STATUS_OK && status < 300; // default
  }
});

export function updateApiAuthenticationToken(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export function clearApiAuthenticationToken() {
  axios.defaults.headers.common['Authorization'] = undefined;
  clearAuthenticationToken();
  store.dispatch(logout());
  store.dispatch(push(ROUTE_LOGIN_PAGE));
}

export default api;
