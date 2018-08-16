import _get from 'lodash/get';

import { connect } from 'react-redux';

import JobSeekersPage from 'js/views/pages/JobSeekersPage/JobSeekersPage';

import { fetchJobSeekers } from 'js/actions/jobSeekers';

export default connect(state => ({
  loggingIn: !!state.login.loading,
  loading: !!state.jobSeekers.loading,
  jobSeekers: state.jobSeekers.jobSeekers,
  jobSeekerErrorMessage: state.jobSeekers.errorMessage
}), dispatch => ({
  fetchJobSeekers: () => {
    dispatch(fetchJobSeekers());
  }
}), (stateProps, dispatchProps, ownProps) => {
  return Object.assign(stateProps, dispatchProps, ownProps, {
    fetchJobSeekers: () => {
      if (
        stateProps.loggingIn ||
        stateProps.loading ||
        _get(stateProps, 'jobSeekers.length') ||
        stateProps.jobSeekerErrorMessage
      ) {
        return;
      }

      dispatchProps.fetchJobSeekers();
    }
  });
})(JobSeekersPage);
