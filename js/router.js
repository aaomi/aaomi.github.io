import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store from 'js/store';

import AppWrapper from 'js/view_controllers/AppWrapper';

import HomePage from 'js/view_controllers/pages/HomePage';

// ReactDOM.render((
//   <Provider store={store} >
//     <BrowserRouter>
//       <AppWrapper>
//         <Route component={HomePage} path='/' />
//         <Redirect from='*' to='/' />
//       </AppWrapper>
//     </BrowserRouter>
//   </Provider>
// ), document.getElementById('upbound-root'));
