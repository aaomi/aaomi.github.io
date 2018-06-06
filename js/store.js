import { compose, createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import reducer from 'js/reducer';
import { routerMiddleware } from 'react-router-redux';

export const history = createHistory();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
      applyMiddleware(routerMiddleware(history)),
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    : compose(
      applyMiddleware(routerMiddleware(history)),
      applyMiddleware(thunk)
    )
);

export default store;
