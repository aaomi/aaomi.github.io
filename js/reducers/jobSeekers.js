import { JOB_SEEKERS_FETCH_BEGIN,
  JOB_SEEKERS_FETCH_SUCCEEDED,
  JOB_SEEKERS_FETCH_FAILED
} from 'js/actions/jobSeekers';

const STATE_DEFAULT = {
  loading: undefined,
  errorMessage: undefined,
  jobSeekers: undefined
};

export default function jobSeekers(state = STATE_DEFAULT, action) {
  if (action.type === JOB_SEEKERS_FETCH_BEGIN) {
    return {
      loading: true
    };
  }
  if (action.type === JOB_SEEKERS_FETCH_SUCCEEDED) {
    return {
      jobSeekers: action.jobSeekers
    };
  }
  if (action.type === JOB_SEEKERS_FETCH_FAILED) {
    return {
      errorMessage: action.errorMessage
    };
  }
  return state;
}
