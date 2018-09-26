import React from 'react';
// import PropTypes from 'prop-types';

import 'js/views/pages/EmployersPage/EmployersPage.scss';

const TEMP_TEXT_TITLE_EMPLOYERS_PAGE = 'Employers';

const TEMP_OBJECTIVES = [
  'We inform employers about the skills and assets of neurodiverse individuals of all abiliities in their local supply pool.',
  'Help institute accommodations and natural supports to enable a person with a disability to thrive in the workplace.',
  'We bring the most qualified job candidates to each position.',
  'Serve as liaison between candidates and state and federal agencies.',
  'We collect results-driven data to monitor work performance, productivity and quality.'
];

const EmployersPage = function() {
  return (
    <div className='upbound-page upbound-page--employers max-width-4 mx-auto'>
      <h1 className='upbound-page--employers__title'>{TEMP_TEXT_TITLE_EMPLOYERS_PAGE}</h1>
      <h1 className='upbound-page--employers__objective-list-title'>{'Here\'s what we do for companies looking to hire:'}</h1>
      <ul className='upbound-page--employers__objective-list'>
        {TEMP_OBJECTIVES.map((objective, index) => (
          <li key={`objective-${index}`}><h2>{objective}</h2></li>
        ))}
      </ul>
    </div>
  );
};

EmployersPage.propTypes = {
};

export default EmployersPage;
