import React from 'react';

import 'js/views/pages/HomePage/HomePage.scss';

export default function HomePage() {
  return (
    <div className='upbound-page--home' id='start'>
      <div className='nav-container'>
        <div className='bar bar--sm visible-xs'>
          <div className='container'>
            <div className='row'>
              <div className='col-3 col-md-3'>
                <a href='/'>
                  <img className='logo logo-dark' alt='logo' src={require('img/upBound.png')} />
                  <img className='logo logo-light' alt='logo' src={require('img/upBound.png')} />
                </a>
              </div>
              <div className='col-9 col-md-10 text-right'>
                <a href='javascript:void(0)' className='hamburger-toggle' data-toggle-class='#menu1;hidden-xs'>
                  <i className='icon icon--sm stack-interface stack-menu'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav id='menu1' className='bar bar--sm bar-1 hidden-xs bar--absolute bar--transparent'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-1 col-md-3 hidden-xs'>
                <div className='bar__module'>
                  <a href='/'>
                    <img className='logo logo-dark' alt='logo' src={require('img/upBound.png')} />
                    <img className='logo logo-light' alt='logo' src={require('img/upBound.png')} />
                  </a>
                </div>
              </div>
              <div className='col-lg-11 col-md-12 text-right text-left-xs text-left-sm'>
                <div className='bar__module'>
                  <ul className='menu-horizontal text-left'></ul>
                </div>
                <div className='bar__module'>
                  <a className='btn btn--sm btn--primary type--uppercase' href='#contact'>
                    <span className='btn__text'>
                      Contact
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className='main-container'>
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
            <a className='btn btn--md btn--primary type--uppercase' href='#contact'>
              <span className='btn__text'>
                Contact Us
              </span>
            </a>
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
      </a>
    </div>
  );
}
