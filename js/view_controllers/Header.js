import { connect } from 'react-redux';

import Header from 'js/views/Header/Header';

export default connect(state => ({
  loggedIn: !!state.login.token
}))(Header);
