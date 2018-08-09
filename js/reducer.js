import { combineReducers } from 'redux';

import login from 'js/reducers/login';
import jobSeekers from 'js/reducers/jobSeekers';

var reducer = combineReducers({
  login,
  jobSeekers
});

export default reducer;
