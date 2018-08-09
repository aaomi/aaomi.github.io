import React from 'react';
import PropTypes from 'prop-types';

import 'js/views/pages/LoginPage/LoginPage.scss';

const LOGIN_PAGE_TEXT_USERNAME_PLACEHOLDER = 'Username or email';
const LOGIN_PAGE_TEXT_PASSWORD_PLACEHOLDER = 'Password';
const LOGIN_PAGE_TEXT_LOGIN_SUCCESSFUL = 'Login successful!';

const LOGIN_PAGE_SUCCESS_REDIRECT_DELAY_TIME = 2000;

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this._onUsernameChange = this._onUsernameChange.bind(this);
    this._onPasswordChange = this._onPasswordChange.bind(this);
    this._onLogin = this._onLogin.bind(this);
  }
  _onUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }
  _onPasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }
  _onLogin(event) {
    event.preventDefault();

    this.props.onLogin({
      username: this.state.username,
      password: this.state.password
    });
  }
  componentDidUpdate() {
    if (this.props.loginSuccessful) {
      setTimeout(() => {
        this.props.redirectToJobSeekersPage();
      }, LOGIN_PAGE_SUCCESS_REDIRECT_DELAY_TIME);
    }
  }
  render() {
    return (
      <form className='upbound-page upbound-page--login' onSubmit={this._onLogin}>
        {this.props.loginSuccessful ? <div>{LOGIN_PAGE_TEXT_LOGIN_SUCCESSFUL}</div> : null}
        <input placeholder={LOGIN_PAGE_TEXT_USERNAME_PLACEHOLDER} name='username' onChange={this._onUsernameChange} />
        <input placeholder={LOGIN_PAGE_TEXT_PASSWORD_PLACEHOLDER} name='password' onChange={this._onPasswordChange} />
        {this.props.errorMessage ? <div>{this.props.errorMessage}</div> : null}
        <button type='submit' disabled={this.props.loggingIn || this.props.loginSuccessful}>Submit</button>
      </form>
    );
  }
}

LoginPage.propTypes = {
  redirectToJobSeekersPage: PropTypes.func.required,
  onLogin: PropTypes.func.required,
  loginSuccessful: PropTypes.bool,
  loggingIn: PropTypes.bool,
  errorMessage: PropTypes.string
};
