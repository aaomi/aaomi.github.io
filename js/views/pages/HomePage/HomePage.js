import React from 'react';
// import { Link } from 'react-router-dom';

import 'js/views/pages/HomePage/HomePage.scss';

import AAOM_LOGO from 'img/aaom_logo.png';

// import { ROUTE_CONTACT_PAGE } from 'js/constants/routes';

const TEMP_LINK_AAOM = 'https://autismallianceofmichigan.org/';
const TEMP_LINK_JOB_SEEKER_INTAKE = 'https://autismallianceofmichigan.org/employee-pre-assessment/';

export default function HomePage() {
  return (
    <div className='upbound-page upbound-page--home' id='start'>
      <div className='upbound-page--home__hero--coming-soon'>
        <h1 className='upbound-page--home__hero--coming-soon__text__coming-soon'>Coming soon!</h1>
        <h2 className='upbound-page--home__hero--coming-soon__text__project-by'>A project by:</h2>
        <a href={TEMP_LINK_AAOM}><img className='upbound-page--home__hero--coming-soon__logo--aaom' src={AAOM_LOGO} alt='Autism Alliance of Michigan' /></a>
        <h2 className='upbound-page--home__hero--coming-soon__text--job-seeker-prompt'>Are you seeking a job? Fill out our form here: </h2>
        <h2>
          <a href={TEMP_LINK_JOB_SEEKER_INTAKE}>Job Seeker Intake</a>
        </h2>
      </div>
      {/* <div className='main-container'>
        <section className='cover imagebg videobg height-90 text-center' style={{ background: 'none' }}>
          <video autoPlay loop muted></video>
          <div className='background-image-holder'>
            <img alt='Education' src={require('img/education-1.jpg')} />
          </div>
          <div className='container pos-vertical-center'>
            <div className='row'>
              <div className='col-lg-12'>
                <h1 style={{ color: '#96c757' }}>Upbound brings great workers and great companies together.</h1>
                <h4 style={{ textAlign: 'left', color: '#3e5466' }}>
                  Countless talented, diligent, disciplined people with disabilities are
                  ready to make significant contributions to companies big and small. Many
                  companies—from international enterprises with tens of thousands of
                  employees to family-run businesses with a single office—want to hire the
                  very best people for each and every position.<br/><br/>
                  Great companies deserve exceptional employees. Upbound brings those
                  companies and the right employees together. Simple as that.
                </h4>
              </div>
            </div>
            <div style={{ width: 500 }} className='text-center'></div>
          </div>
          <div className='pos-bottom pos-absolute col-12 text-center'>
            <Link className='btn btn--md btn--primary type--uppercase' to={ROUTE_CONTACT_PAGE}>
              <span className='btn__text'>
                Contact Us
              </span>
            </Link>
          </div>
        </section>
        <section className='cover height-90 imagebg parallax' data-overlay='4'>
          <div className='background-image-holder'>
            <img alt='background' src={require('img/bg.jpg')} />
          </div>
          <div className='container pos-vertical-center'>
            <div className='row'>
              <div className='col-md-9 col-lg-7'>
                <h1>
                  Watch our story.
                </h1>
                <p className='lead'>
                  See how Upbound affects change in the workplace.
                </p>
                <div className='modal-instance block'>
                  <div className='video-play-icon video-play-icon--sm modal-trigger'></div>
                  <span>
                    <strong>Upbound Introduction</strong>&nbsp;&nbsp;&nbsp;138 Seconds
                  </span>
                  <div className='modal-container'>
                    <div className='modal-content bg-dark' data-width='60%' data-height='60%'>
                      <iframe title='Autism Alliance of Michigan Pillar of Work: Employment' data-src='https://www.youtube.com/embed/BrJsyBGuJNY' allowFullScreen='allowfullscreen'></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='space--md'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10 col-lg-9'>
                <span className='h2'>
                  <strong>
                    Here’s what we do for job-seekers with disabilities.
                  </strong>
                </span>
                <span className='h3'>
                  <ul>
                    <li>
                      •We help job candidates create effective resumes that will stand out from
                      the sea of resumes vying for an employer’s attention.
                    </li>
                    <li>
                      •We prepare job candidates for interviews.
                    </li>
                    <li>
                      •We support job candidates through every step of the employment process.
                    </li>
                    <li>
                      •We offer professional, multidisciplinary on-the-job support to employees we help place, as needed.
                    </li>
                    <li>
                      •We prepare job candidates for interviews.
                    </li>
                    <li>
                      •We continue to monitor the job situation well after a hiring—through
                      the first year and beyond—to ensure work performance and productivity
                      are maintained.
                    </li>
                    <li>
                      •We offer professional, multidisciplinary on-the-job support to employees
                      we help place, as needed.
                    </li>
                    <li>
                      •We continue to monitor the job situation well after a hiring—through
                      the first year and beyond—to ensure work performance and productivity
                      are maintained.
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className='cover height-90 imagebg parallax' data-overlay='4'>
          <div className='background-image-holder'>
            <img alt='background' src={require('img/banners1.jpg')} />
          </div>
          <div className='container pos-vertical-center'>
            <div className='row'>
              <div className='col-md-9 col-lg-7'>
                <p className='lead'></p>
              </div>
            </div>
          </div>
        </section>

        <section className='space--md'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10 col-lg-9'>
                <span className='h2'>
                  <strong>
                    Here’s what we do
                    for companies
                    looking to hire.
                  </strong>
                </span>
                <span className='h3'>
                  <ul>
                    <li>
                      •We inform employers about the skills and assets of neurodiverse individuals
                      of all abiliities in their local supply pool.
                    </li>
                    <li>
                      •Help institute accommodations and natural supports to enable a person
                      with a disability to thrive in the workplace.
                    </li>
                    <li>
                      •We bring the most qualified job candidates to each position.
                    </li>
                    <li>
                      •Serve as liaison between candidates and state and federal agencies.
                    </li>
                    <li>
                      •We collect results-driven data to monitor work performance, productivity
                      and quality.
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <a className='back-to-top inner-link' href='#start' data-scroll-class='100vh:active'>
        <i className='stack-interface stack-up-open-big'></i>
      </a> */}
    </div>
  );
}
