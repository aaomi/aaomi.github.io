import _map from 'lodash/map';
import _filter from 'lodash/filter';

import React from 'react';
import PropTypes from 'prop-types';

import 'js/views/pages/AdminJobSeekersPage/AdminJobSeekersPage.scss';

const JOB_SEEKER_TABLE_COLUMN_TITLE_FIRST_NAME = 'First Name';
const JOB_SEEKER_TABLE_COLUMN_TITLE_LAST_NAME = 'Last Name';
const JOB_SEEKER_TABLE_COLUMN_TITLE_REGION = 'Region';

const JOB_SEEKER_TABLE_INPUT_PLACEHOLDER_SEARCH_BY_NAME = 'Search by name';

const TEMP_JOB_SEEKER_REGION_VALUES = ['1- UP', '10- Metro Detroit', '10a- Oakland', '10b- Wayne', '10c- Macomb', '2- NW-LP', '4- West', '5- Central East', '6- East', '7- Central', '8- SW-LP', '9- SE-LP', '9-SE-LP'];

export default class AdminJobSeekersPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: {
        ['name']: undefined,
        ['region_aaom_mi']: []
      }
    };

    this.props.fetchJobSeekers(this.state.query);

    this._onChangeQueryName = this._onChangeQueryName.bind(this);
    this._onChangeQueryRegion = this._onChangeQueryRegion.bind(this);
  }
  componentDidUpdate() {
    this.props.fetchJobSeekers(this.state.query);
  }
  _onChangeQueryName(event) {
    this.setState({
      query: Object.assign({}, this.state.query, {
        ['name']: event.target.value
      })
    });
  }
  _onChangeQueryRegion(event) {
    this.setState({
      query: Object.assign({}, this.state.query, {
        ['region_aaom_mi']: _map(_filter(event.target.options, 'selected'), 'value')
      })
    });
  }
  render() {
    return (
      <div className='upbound-page upbound-page--admin-job-seekers'>
        <h1>Job Seekers</h1>
        {this.props.jobSeekerErrorMessage
          ? <span>{this.props.jobSeekerErrorMessage}</span>
          : null
        }
        <input
          className='form-control'
          type='text'
          placeholder={JOB_SEEKER_TABLE_INPUT_PLACEHOLDER_SEARCH_BY_NAME}
          onChange={this._onChangeQueryName}
        />
        <select
          className='upbound-page--admin-job-seekers__multiselect'
          value={this.state.query['region_aaom_mi']}
          multiple={true}
          onChange={this._onChangeQueryRegion}
          onBlur={() => {} /* TODO: fix for accessibility? */}
        >
          {TEMP_JOB_SEEKER_REGION_VALUES.map((region, index) => (
            <option
              key={`region-${index}`}
            >
              {region}
            </option>
          ))}
        </select>
        <table>
          <thead>
            <tr>
              <th>
                <input type='checkbox' />
              </th>
              <th>{JOB_SEEKER_TABLE_COLUMN_TITLE_FIRST_NAME}</th>
              <th>{JOB_SEEKER_TABLE_COLUMN_TITLE_LAST_NAME}</th>
              <th>{JOB_SEEKER_TABLE_COLUMN_TITLE_REGION}</th>
            </tr>
          </thead>
          <tbody>
            {this.props.loading ? <tr>
              <td><span>Loading...</span></td>
            </tr> : null}
            {this.props.jobSeekers ? this.props.jobSeekers.map((jobSeeker, index) => (
              <tr key={`job-seeker-${index}`}>
                <td>
                  <input type='checkbox' />
                </td>
                <td>{jobSeeker['first_name']}</td>
                <td>{jobSeeker['last_name']}</td>
                <td>{jobSeeker['region_aaom_mi']}</td>
              </tr>
            )) : null}
          </tbody>
        </table>
      </div>
    );
  }
}

AdminJobSeekersPage.propTypes = {
  loggingIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  jobSeekers: PropTypes.array,
  fetchJobSeekers: PropTypes.func.isRequired,
  jobSeekerErrorMessage: PropTypes.string
};
