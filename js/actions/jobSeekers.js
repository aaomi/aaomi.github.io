import _get from 'lodash/get';

import api from 'js/actions/api';

export const JOB_SEEKERS_FETCH_BEGIN = 'JOB_SEEKERS_FETCH_BEGIN';
export const JOB_SEEKERS_FETCH_SUCCEEDED = 'JOB_SEEKERS_FETCH_SUCCEEDED';
export const JOB_SEEKERS_FETCH_FAILED = 'JOB_SEEKERS_FETCH_FAILED';

function beginJobSeekersFetch() {
  return {
    type: JOB_SEEKERS_FETCH_BEGIN
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

export function fetchJobSeekers() {
  return dispatch => {
    dispatch(beginJobSeekersFetch());

    api.get('job_seekers').then((response) => {
      dispatch(jobSeekersFetchSucceeded(_get(response, 'data.data')));
    }).catch((error) => {
      dispatch(jobSeekersFetchFailed(_get(error, 'response.data.message')));
    });
  };
}
