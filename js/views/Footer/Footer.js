import React from 'react';
import PropTypes from 'prop-types';

import 'js/views/Footer/Footer.scss';

import AAOM_LOGO from 'img/aaom_logo.png';
const TEMP_LINK_AAOM = 'https://autismallianceofmichigan.org/';
const TEMP_TEXT_PROJECT_BY_AAOM = 'Upbound at Work is powered by the:';
const TEMP_SUBTEXT_PROJECT_BY_AAOM = 'Please visit our site to get help or resources for an autism diagnosis';
const TEMP_TEXT_CONTACT_PHONE_NUMBER = '877.463.2266';
const TEMP_TEXT_CONTACT_EMAIL_ADDRESS = 'upbound@aaomi.org';
// const TEMP_TEXT_CONTACT_US = 'Contact Us';
const TEMP_LINK_LINKEDIN = 'https://www.linkedin.com/company/uboundatwork/';
const TEMP_HANDLE_LINKEDIN = 'upboundatwork';

const Footer = (/*{ loggedIn }*/) => (
  <div className='footer'>
    <div className='footer__contact clearfix'>
      {/* <div className=''>{TEMP_TEXT_CONTACT_US}</div> */}
      <a className='col col-4 footer__contact__item footer__contact__item--phone' href={`tel:${TEMP_TEXT_CONTACT_PHONE_NUMBER.replace('.', '')}`}>
        <i className='xs-hide fas fa-phone-square footer__contact__icon footer__contact__icon--phone'></i>
        <span className='footer__contact__text'>{TEMP_TEXT_CONTACT_PHONE_NUMBER}</span>
      </a>
      <a className='col col-4 footer__contact__item footer__contact__item--email' href={`mailto:${TEMP_TEXT_CONTACT_EMAIL_ADDRESS}`}>
        <i className='xs-hide fas fa-envelope-square footer__contact__icon footer__contact__icon--email'></i>
        <span className='footer__contact__text'>{TEMP_TEXT_CONTACT_EMAIL_ADDRESS}</span>
      </a>
      <a className='col col-4 footer__contact__item footer__contact__item--linkedin' href={TEMP_LINK_LINKEDIN}>
        <i className='fab fa-linkedin footer__contact__icon footer__contact__icon--linkedin'></i>
        <span className='xs-hide footer__contact__text'>{TEMP_HANDLE_LINKEDIN}</span>
      </a>
    </div>
    <div className='footer__project-by'>
      <div className='xs-hide footer__project-by__text'>
        <div className='footer__project-by__text__title'>
          {TEMP_TEXT_PROJECT_BY_AAOM}
        </div>
        <div className='footer__project-by__text__subtitle'>
          {TEMP_SUBTEXT_PROJECT_BY_AAOM}
        </div>
      </div>
      <a href={TEMP_LINK_AAOM}>
        <img
          className='footer__project-by__logo--aaom'
          src={AAOM_LOGO}
          alt='Autism Alliance of Michigan'
        />
      </a>
    </div>
  </div>
);

Footer.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

export default Footer;
