import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store, { history } from 'js/store';

import AppWrapper from 'js/view_controllers/AppWrapper';

import HomePage from 'js/view_controllers/pages/HomePage';
// import ContactPage from 'js/view_controllers/pages/ContactPage';

import { ROUTE_HOME_PAGE } from 'js/constants/routes';

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppWrapper>
        <Switch>
          <Route exact component={HomePage} path={ROUTE_HOME_PAGE} />
          {/* <Route component={ContactPage} path={ROUTE_CONTACT_PAGE} /> */}
          <Redirect from='*' to={ROUTE_HOME_PAGE} />
        </Switch>
      </AppWrapper>
    </ConnectedRouter>
  </Provider>
), document.getElementById('upbound-root'));
