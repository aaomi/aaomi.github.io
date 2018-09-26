import React from 'react';
// import PropTypes from 'prop-types';

import 'js/views/pages/JobSeekersPage/JobSeekersPage.scss';

const TEMP_TEXT_DESCRIPTION_JOB_SEEKERS = 'Are you seeking a job? Fill out our form here:';

const TEMP_OBJECTIVES = [
  'We help job candidates create effective resumes that will stand out from the sea of resumes vying for an employer’s attention.',
  'We prepare job candidates for interviews.',
  'We support job candidates through every step of the employment process.',
  'We offer professional, multidisciplinary on-the-job support to employees we help place, as needed.',
  'We continue to monitor the job situation well after a hiring—through the first year and beyond—to ensure work performance and productivity are maintained.'
];

const JobSeekersPage = function() {
  return (
    <div className='upbound-page upbound-page--job-seekers max-width-4 mx-auto'>
      <h1 className='upbound-page--job-seekers__title'>Job Seekers</h1>
      <h1 className='upbound-page--job-seekers__objective-list-title'>{'Here\'s what we do for job seekers with disabilities:'}</h1>
      <ul className='upbound-page--job-seekers__objective-list'>
        {TEMP_OBJECTIVES.map((objective, index) => (
          <li key={`objective-${index}`}><h2>{objective}</h2></li>
        ))}
      </ul>
      <div className='center'>
        <h2>{TEMP_TEXT_DESCRIPTION_JOB_SEEKERS}</h2>
        <iframe
          title='Job Seeker Intake'
          src='https://docs.google.com/forms/d/e/1FAIpQLSdGoY1xqYNjAUdkj5jYy2rf32q8LqdUhs6433fGtnSEtjdFiQ/viewform?embedded=true'
          width='700'
          height='3000'
          frameBorder='0'
          marginHeight='0'
          marginWidth='0'
        >
          {'Loading...'}
        </iframe>
      </div>
    </div>
  );
};

JobSeekersPage.propTypes = {
};

export default JobSeekersPage;
