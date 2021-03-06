import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import 'js/views/Header/Header.scss';

import {
  ROUTE_HOME_PAGE,
  ROUTE_JOB_SEEKERS_PAGE,
  ROUTE_EMPLOYERS_PAGE
} from 'js/constants/routes';

// import JobSeekersAdminLinkButton from 'js/view_controllers/JobSeekersAdminLinkButton';
//
// import LogInButton from 'js/view_controllers/LogInButton';
// import LogOutButton from 'js/views/LogOutButton/LogOutButton';

const TEMP_UPBOUND_AT_WORK_LOGO_ALT = 'Upbound at work';

const Header = (/*{ loggedIn }*/) => (
  <div className='header-wrapper'>
    <div className='header max-width-4 mx-auto'>
      <div className='header__link header__link--logo'>
        <Link to={ROUTE_HOME_PAGE}>
          <img className='header__link--logo__image' alt={TEMP_UPBOUND_AT_WORK_LOGO_ALT} src={require('img/upBound.png')} />
        </Link>
      </div>
      <div className='header__link-wrapper header__link-wrapper--right'>
        <div className='header__link'>
          <Link to={ROUTE_JOB_SEEKERS_PAGE}>Job Seekers</Link>
        </div>
        <div className='header__link'>
          <Link to={ROUTE_EMPLOYERS_PAGE}>Employers</Link>
        </div>
        {/* {loggedIn ? <div className='header__link'>
          <JobSeekersAdminLinkButton />
        </div> : null}
        {loggedIn ? <div className='header__link'>
          <LogOutButton />
        </div> : <div className='header__link'>
          <LogInButton />
        </div>} */}
      </div>
    </div>
  </div>
);

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

export default Header;
