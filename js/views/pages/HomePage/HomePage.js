import React from 'react';
// import { Link } from 'react-router-dom';

import 'js/views/pages/HomePage/HomePage.scss';

// import { ROUTE_CONTACT_PAGE } from 'js/constants/routes';

const TEMP_LINK_JOB_SEEKER_INTAKE = 'https://autismallianceofmichigan.org/employee-pre-assessment/';

const TEMP_TEXT_TITLE_EMPLOYERS = 'Employers';
const TEMP_TEXT_TITLE_JOB_SEEKERS = 'Job Seekers';

const TEMP_TEXT_DESCRIPTION_EMPLOYERS = 'Stay tuned for more information regarding employment opportunities.';
const TEMP_TEXT_DESCRIPTION_JOB_SEEKERS = 'Are you seeking a job? Fill out our form here:';

const TEMP_TEXT_BUTTON_JOB_SEEKERS = 'Job Seeker Intake';

export default function HomePage() {
  return (
    <div className='upbound-page upbound-page--home' id='start'>
      <div className='upbound-page--home__hero--coming-soon clearfix'>
        <h1 className='upbound-page--home__hero__title'>
          Upbound brings great workers and great companies together.
        </h1>
        <div className='col sm-col-6 col-12'>
          <h1 className='upbound-page--home__hero--coming-soon__text__coming-soon'>
            {TEMP_TEXT_TITLE_JOB_SEEKERS}
          </h1>
          <h2>{TEMP_TEXT_DESCRIPTION_JOB_SEEKERS}</h2>
          <h2>
            <a href={TEMP_LINK_JOB_SEEKER_INTAKE}>{TEMP_TEXT_BUTTON_JOB_SEEKERS}</a>
          </h2>
        </div>
        <div className='col sm-col-6 col-12'>
          <h1 className='upbound-page--home__hero--coming-soon__text__coming-soon'>
            {TEMP_TEXT_TITLE_EMPLOYERS}
          </h1>
          <h2>{TEMP_TEXT_DESCRIPTION_EMPLOYERS}</h2>
        </div>
      </div>
    </div>
  );
}
