import React from 'react';
import PropTypes from 'prop-types';

import 'js/views/pages/JobSeekersPage/JobSeekersPage.scss';

export default class JobSeekersPage extends React.Component {
  constructor(props) {
    super(props);

    this.props.fetchJobSeekers();
  }
  componentDidUpdate() {
    this.props.fetchJobSeekers();
  }
  render() {
    return (
      <div className='upbound-page upbound-page--job-seekers'>
        <h1>Job Seekers Page</h1>
        {this.props.jobSeekerErrorMessage
          ? <span>{this.props.jobSeekerErrorMessage}</span>
          : null
        }
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
  loggingIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  jobSeekers: PropTypes.array,
  fetchJobSeekers: PropTypes.func.isRequired,
  jobSeekerErrorMessage: PropTypes.string
};
