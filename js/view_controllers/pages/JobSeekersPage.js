import { connect } from 'react-redux';

import JobSeekersPage from 'js/views/pages/JobSeekersPage/JobSeekersPage';

import { fetchJobSeekers } from 'js/actions/jobSeekers';

export default connect(state => ({
  loggingIn: !!state.login.loading,
  loading: !!state.jobSeekers.loading,
  jobSeekers: state.jobSeekers.jobSeekers
}), (dispatch, ownProps) => ({
  fetchJobSeekers: () => {
    if (ownProps.loggingIn) {
      return;
    }
    dispatch(fetchJobSeekers());
  }
}))(JobSeekersPage);
