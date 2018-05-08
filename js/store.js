import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from 'js/reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    : compose(
      applyMiddleware(thunk)
    )
);

export default store;
