import React from 'react';
import { Link } from 'react-router-dom';

import 'js/views/Header/Header.scss';

import { ROUTE_HOME_PAGE, ROUTE_CONTACT_PAGE } from 'js/constants/routes';

const Header = () => (
  <div className='nav-container'>
    <div className='bar bar--sm visible-xs'>
      <div className='container'>
        <div className='row'>
          <div className='col-3 col-md-3'>
            <Link to={ROUTE_HOME_PAGE}>
              <img className='logo logo-dark' alt='logo' src={require('img/upBound.png')} />
              <img className='logo logo-light' alt='logo' src={require('img/upBound.png')} />
            </Link>
          </div>
          <div className='col-9 col-md-10 text-right'>
            <a href='javascript:void(0)' className='hamburger-toggle' data-toggle-class='#menu1;hidden-xs'>
              <i className='icon icon--sm stack-interface stack-menu'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <nav id='menu1' className='bar bar--sm bar-1 hidden-xs bar--absolute bar--transparent'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-1 col-md-3 hidden-xs'>
            <div className='bar__module'>
              <Link to={ROUTE_HOME_PAGE}>
                <img className='logo logo-dark' alt='logo' src={require('img/upBound.png')} />
                <img className='logo logo-light' alt='logo' src={require('img/upBound.png')} />
              </Link>
            </div>
          </div>
          <div className='col-lg-11 col-md-12 text-right text-left-xs text-left-sm'>
            <div className='bar__module'>
              <ul className='menu-horizontal text-left'></ul>
            </div>
            <div className='bar__module'>
              <Link className='btn btn--sm btn--primary type--uppercase' to={ROUTE_CONTACT_PAGE}>
                <span className='btn__text'>
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
