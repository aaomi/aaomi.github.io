import { connect } from 'react-redux';

import Footer from 'js/views/Footer/Footer';

export default connect(state => ({
  loggedIn: !!state.login.token
}))(Footer);
