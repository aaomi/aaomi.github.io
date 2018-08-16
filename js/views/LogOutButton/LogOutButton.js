import React from 'react';

import { clearApiAuthenticationToken } from 'js/actions/api';

const LogOutButton = () => (
  <a
    onClick={() => {
      clearApiAuthenticationToken();
    }}
    role='button'
    tabIndex='0'
    href='javascript:void(0)'
  >
    {'Logout'}
  </a>
);

export default LogOutButton;
