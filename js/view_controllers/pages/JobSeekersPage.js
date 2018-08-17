import _clone from 'lodash/clone';
import _debounce from 'lodash/debounce';

import { connect } from 'react-redux';

import JobSeekersPage from 'js/views/pages/JobSeekersPage/JobSeekersPage';

import { fetchJobSeekers } from 'js/actions/jobSeekers';

const JOB_SEEKERS_FETCH_DEBOUNCE_WAIT_TIME = 500;

export default connect(state => ({
  loggingIn: !!state.login.loading,
  loading: !!state.jobSeekers.loading,
  jobSeekers: state.jobSeekers.jobSeekers,
  jobSeekerErrorMessage: state.jobSeekers.errorMessage
}), dispatch => ({
  fetchJobSeekers: (query) => {
    dispatch(fetchJobSeekers(query));
  }
}), (stateProps, dispatchProps, ownProps) => {
  return Object.assign(stateProps, dispatchProps, ownProps, {
    fetchJobSeekers: _debounce((query) => {
      if (
        stateProps.loggingIn ||
        stateProps.jobSeekerErrorMessage
      ) {
        return;
      }

      dispatchProps.fetchJobSeekers(_clone(query));
    }, JOB_SEEKERS_FETCH_DEBOUNCE_WAIT_TIME)
  });
})(JobSeekersPage);
