import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store, { history } from 'js/store';

import AppWrapper from 'js/view_controllers/AppWrapper';

import HomePage from 'js/view_controllers/pages/HomePage';
// import ContactPage from 'js/view_controllers/pages/ContactPage';
// import LoginPage from 'js/view_controllers/pages/LoginPage';
import JobSeekersPage from 'js/view_controllers/pages/JobSeekersPage';
import EmployersPage from 'js/view_controllers/pages/EmployersPage';

import {
  ROUTE_HOME_PAGE,
  ROUTE_JOB_SEEKERS_PAGE,
  ROUTE_EMPLOYERS_PAGE
  // ROUTE_LOGIN_PAGE,
  // ROUTE_SIGN_UP_PAGE,
  // ROUTE_RESET_PASSWORD_PAGE,
  // ROUTE_ADMIN_JOB_SEEKERS_PAGE
} from 'js/constants/routes';

// TODO: move this?
// Scrolls to the top of the page on ANY route change
history.listen(() => {
  window.scrollTo({
    'left': 0,
    'top': 0
  });
});

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppWrapper>
        <Switch>
          <Route exact component={HomePage} path={ROUTE_HOME_PAGE} />
          {/* <Route component={ContactPage} path={ROUTE_CONTACT_PAGE} /> */}
          {/* <Route component={LoginPage} path={ROUTE_LOGIN_PAGE} /> */}
          {/* <Route component={SignUpPage} path={ROUTE_SIGN_UP_PAGE} />
          <Route component={ResetPasswordPage} path={ROUTE_RESET_PASSWORD_PAGE} />*/}
          <Route component={JobSeekersPage} path={ROUTE_JOB_SEEKERS_PAGE} />
          <Route component={EmployersPage} path={ROUTE_EMPLOYERS_PAGE} />
          <Redirect from='*' to={ROUTE_HOME_PAGE} />
        </Switch>
      </AppWrapper>
    </ConnectedRouter>
  </Provider>
), document.getElementById('upbound-root'));
