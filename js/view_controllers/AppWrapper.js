import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import AppWrapper from 'js/views/AppWrapper/AppWrapper';

export default withRouter(connect()(AppWrapper));
