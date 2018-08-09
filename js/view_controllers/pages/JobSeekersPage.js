import { connect } from 'react-redux';

import JobSeekersPage from 'js/views/pages/JobSeekersPage/JobSeekersPage';

import { fetchJobSeekers } from 'js/actions/jobSeekers';

export default connect(state => ({
  loggedIn: !!state.login.token,
  jobSeekers: state.jobSeekers.jobSeekers
}), dispatch => ({
  fetchJobSeekers: () => {
    dispatch(fetchJobSeekers());
  }
}))(JobSeekersPage);
