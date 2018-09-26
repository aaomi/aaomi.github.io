import React from 'react';
import { Link } from 'react-router-dom';

import 'js/views/pages/HomePage/HomePage.scss';

import {
  // ROUTE_CONTACT_PAGE,
  ROUTE_JOB_SEEKERS_PAGE,
  ROUTE_EMPLOYERS_PAGE
} from 'js/constants/routes';

import Footer from 'js/view_controllers/Footer';

const TEMP_TEXT_HERO_TAGLINE = 'They can. They will.';

const TEMP_TEXT_MOTTO = 'Upbound brings great workers and great companies together.';
const TEMP_TEXT_INTRO_PARAGRAPH = 'Countless talented, diligent, disciplined people with disabilities are ready to make significant contributions to companies big and small. Many companies—from international enterprises with tens of thousands of employees to family-run businesses with a single office—want to hire the very best people for each and every position. Great companies deserve exceptional employees. Upbound brings those companies and the right employees together. Simple as that.';

const TEMP_TEXT_TITLE_EMPLOYERS = 'Employers';
const TEMP_TEXT_TITLE_JOB_SEEKERS = 'Job Seekers';

const TEMP_TEXT_DESCRIPTION_EMPLOYERS = 'We help employers find the most qualified candidates to fill job openings';

const TEMP_TEXT_JOB_SEEKERS_DESCRIPTION = 'We help job-seekers with disabilities find meaningful employment opportunities';

const TEMP_TEXT_BUTTON_EMPLOYERS_LINK = 'Learn more';
const TEMP_TEXT_BUTTON_JOB_SEEKERS_LINK = 'Learn more';

import TEMP_IMAGE_LINK_JOSH_HEADSHOT from 'img/josh_headshot_smaller.jpg';
// const TEMP_IMAGE_ALT_JOSH_HEADSHOT = 'Josh Headshot';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.mottoRef = React.createRef();

    this._scrollBelowHero = this._scrollBelowHero.bind(this);
  }
  _scrollBelowHero() {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': this.mottoRef.current.offsetTop
    });
  }
  render() {
    return (
      <div className='upbound-page upbound-page--home max-width-4 mx-auto'>
        <div className='upbound-page--home__hero__background' style={{ backgroundImage: `url("${TEMP_IMAGE_LINK_JOSH_HEADSHOT}")` }}>
          {/* <img className='upbound-page--home__hero__background__image' src={TEMP_IMAGE_LINK_JOSH_HEADSHOT} alt={TEMP_IMAGE_ALT_JOSH_HEADSHOT} /> */}
        </div>
        <div className='upbound-page--home__hero'>
          <h1 className='upbound-page--home__hero__title'>{TEMP_TEXT_HERO_TAGLINE}</h1>
          <a role='button' tabIndex={-1} className='upbound-page--home__hero__icon--down' onClick={this._scrollBelowHero} onKeyPress={() => {}}>
            <i className='fas fa-angle-down' />
          </a>
        </div>
        <h1 className='upbound-page--home__motto mt4' ref={this.mottoRef}>{TEMP_TEXT_MOTTO}</h1>
        <h2 className='upbound-page--home__intro-paragraph'>{TEMP_TEXT_INTRO_PARAGRAPH}</h2>
        <div className='clearfix mb4'>
          <div className='col sm-col-6 col-12'>
            <h1 className='upbound-page--home__call-to-action__title'>
              {TEMP_TEXT_TITLE_JOB_SEEKERS}
            </h1>
            <h2 className='upbound-page--home__call-to-action__description'>{TEMP_TEXT_JOB_SEEKERS_DESCRIPTION}</h2>
            <Link to={ROUTE_JOB_SEEKERS_PAGE}><button className='btn rounded upbound-page--home__call-to-action__button'>{TEMP_TEXT_BUTTON_JOB_SEEKERS_LINK}</button></Link>
          </div>
          <div className='col sm-col-6 col-12'>
            <h1 className='upbound-page--home__call-to-action__title'>
              {TEMP_TEXT_TITLE_EMPLOYERS}
            </h1>
            <h2 className='upbound-page--home__call-to-action__description'>{TEMP_TEXT_DESCRIPTION_EMPLOYERS}</h2>
            <Link to={ROUTE_EMPLOYERS_PAGE}><button className='btn rounded upbound-page--home__call-to-action__button'>{TEMP_TEXT_BUTTON_EMPLOYERS_LINK}</button></Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
