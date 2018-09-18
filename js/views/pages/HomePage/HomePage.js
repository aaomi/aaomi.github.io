import React from 'react';
import { Link } from 'react-router-dom';

import 'js/views/pages/HomePage/HomePage.scss';

import {
  // ROUTE_CONTACT_PAGE,
  ROUTE_JOB_SEEKERS_PAGE,
  ROUTE_EMPLOYERS_PAGE
} from 'js/constants/routes';

const TEMP_TEXT_MOTTO = 'Upbound brings great workers and great companies together.';
const TEMP_TEXT_INTRO_PARAGRAPH = 'Countless talented, diligent, disciplined people with disabilities are ready to make significant contributions to companies big and small. Many companies—from international enterprises with tens of thousands of employees to family-run businesses with a single office—want to hire the very best people for each and every position. Great companies deserve exceptional employees. Upbound brings those companies and the right employees together. Simple as that.';

const TEMP_TEXT_TITLE_EMPLOYERS = 'Employers';
const TEMP_TEXT_TITLE_JOB_SEEKERS = 'Job Seekers';

const TEMP_TEXT_DESCRIPTION_EMPLOYERS = 'We help employers find the most qualified candidates to fill job openings';

const TEMP_TEXT_JOB_SEEKERS_DESCRIPTION = 'We help job-seekers with disabilities find meaningful employment opportunities';

const TEMP_TEXT_BUTTON_EMPLOYERS_LINK = 'Learn more';
const TEMP_TEXT_BUTTON_JOB_SEEKERS_LINK = 'Learn more';

export default function HomePage() {
  return (
    <div className='upbound-page upbound-page--home' id='start'>
      <h1 className='upbound-page--home__hero__title'>{TEMP_TEXT_MOTTO}</h1>
      <h2 className='upbound-page--home__intro-paragraph'>{TEMP_TEXT_INTRO_PARAGRAPH}</h2>
      <div className='col sm-col-6 col-12'>
        <h1 className='upbound-page--home__call-to-action__title'>
          {TEMP_TEXT_TITLE_JOB_SEEKERS}
        </h1>
        <h2 className='upbound-page--home__call-to-action__description'>{TEMP_TEXT_JOB_SEEKERS_DESCRIPTION}</h2>
        <Link to={ROUTE_JOB_SEEKERS_PAGE}><button className='btn rounded'>{TEMP_TEXT_BUTTON_JOB_SEEKERS_LINK}</button></Link>
      </div>
      <div className='col sm-col-6 col-12'>
        <h1 className='upbound-page--home__call-to-action__title'>
          {TEMP_TEXT_TITLE_EMPLOYERS}
        </h1>
        <h2 className='upbound-page--home__call-to-action__description'>{TEMP_TEXT_DESCRIPTION_EMPLOYERS}</h2>
        <Link to={ROUTE_EMPLOYERS_PAGE}><button className='btn rounded'>{TEMP_TEXT_BUTTON_EMPLOYERS_LINK}</button></Link>
      </div>
    </div>
  );
}
