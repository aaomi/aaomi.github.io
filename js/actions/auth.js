import localforage from 'localforage';

import { updateApiAuthenticationToken } from 'js/actions/api';

export const AUTH_TOKEN_COOKIE_NAME = 'authToken';

export function updateAuthenticationToken(token) {
  updateApiAuthenticationToken(token);
  localforage.setItem(AUTH_TOKEN_COOKIE_NAME, token);
}

export function clearAuthenticationToken() {
  localforage.removeItem(AUTH_TOKEN_COOKIE_NAME);
}
