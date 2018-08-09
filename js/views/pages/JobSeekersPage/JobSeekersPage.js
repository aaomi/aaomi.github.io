import React from 'react';
import PropTypes from 'prop-types';

import 'js/views/pages/JobSeekersPage/JobSeekersPage.scss';

export default class JobSeekersPage extends React.Component {
  constructor(props) {
    super(props);

    if (props.loggedIn) {
      props.fetchJobSeekers();
    }
  }
  componentDidUpdate(previousProps) {
    if (!this.props.loggedIn || previousProps.loggedIn === this.props.loggedIn) {
      return;
    }

    this.props.fetchJobSeekers();
  }
  render() {
    return (
      <div className='upbound-page upbound-page--job-seekers'>
        <h1>Job Seekers Page</h1>
        {this.props.jobSeekers ? <ul>
          {this.props.jobSeekers.map((jobSeeker, index) => (
            <li key={`job-seeker-${index}`}>
              <span>{jobSeeker['first_name']}</span>
              <span>{jobSeeker['last_name']}</span>
            </li>
          ))}
        </ul> : null}
      </div>
    );
  }
}

JobSeekersPage.propTypes = {
  loggedIn: PropTypes.bool.required,
  jobSeekers: PropTypes.array,
  fetchJobSeekers: PropTypes.func.required
};
