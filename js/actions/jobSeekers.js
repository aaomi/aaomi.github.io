import _get from 'lodash/get';
import _isEqual from 'lodash/isEqual';

import api from 'js/actions/api';

import store from 'js/store';

import axios from 'axios';
const CancelToken = axios.CancelToken;

export const JOB_SEEKERS_FETCH_BEGIN = 'JOB_SEEKERS_FETCH_BEGIN';
export const JOB_SEEKERS_FETCH_SUCCEEDED = 'JOB_SEEKERS_FETCH_SUCCEEDED';
export const JOB_SEEKERS_FETCH_FAILED = 'JOB_SEEKERS_FETCH_FAILED';

export const JOB_SEEKERS_FETCH_CANCELLATION_MESSAGE = 'Job Seeker fetch cancelled';

function beginJobSeekersFetch(query, cancelTokenSource) {
  return {
    type: JOB_SEEKERS_FETCH_BEGIN,
    query,
    cancelTokenSource
  };
}

function jobSeekersFetchSucceeded(jobSeekers) {
  return {
    type: JOB_SEEKERS_FETCH_SUCCEEDED,
    jobSeekers
  };
}

function jobSeekersFetchFailed(errorMessage) {
  return {
    type: JOB_SEEKERS_FETCH_FAILED,
    errorMessage
  };
}

export function fetchJobSeekers(query) {
  return dispatch => {
    const jobSeekersState = store.getState().jobSeekers;

    if (jobSeekersState.cancelTokenSource) {
      jobSeekersState.cancelTokenSource.cancel(JOB_SEEKERS_FETCH_CANCELLATION_MESSAGE);
    }

    if (jobSeekersState.errorMessage ||
      (jobSeekersState.jobSeekers &&
      _isEqual(query, jobSeekersState.query))
    ) {
      return;
    }

    const cancelTokenSource = CancelToken.source();

    dispatch(beginJobSeekersFetch(query, cancelTokenSource));

    api.get('job_seekers', {
      params: query,
      cancelToken: cancelTokenSource.token
    }).then((response) => {
      dispatch(jobSeekersFetchSucceeded(_get(response, 'data.data')));
    }).catch((error) => {
      dispatch(jobSeekersFetchFailed(_get(error, 'response.data.message')));
    });
  };
}
