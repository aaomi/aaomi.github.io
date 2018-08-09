import { LOGIN_BEGIN,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED
} from 'js/actions/login';

const STATE_DEFAULT = {
  loading: undefined,
  errorMessage: undefined,
  token: undefined
};

export default function login(state = STATE_DEFAULT, action) {
  if (action.type === LOGIN_BEGIN) {
    return {
      loading: true
    };
  }
  if (action.type === LOGIN_SUCCEEDED) {
    return {
      token: action.token
    };
  }
  if (action.type === LOGIN_FAILED) {
    return {
      errorMessage: action.errorMessage
    };
  }
  return state;
}
