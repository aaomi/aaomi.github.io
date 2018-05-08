# Upbound at work - front-end

#### To get started:
- Clone the repo `git clone https://github.com/aaomi/upbound-front-end.git`
- Run `npm install`
- Run `npm start`
- Browse to [http://localhost:8080](http://localhost:8080)
- Calvin - for now, just work exclusively in 'js/views/pages/HomePage/HomePage.js' and 'js/views/pages/HomePage/HomePage.scss'

### Front End Priorities:
- Landing Page with Video (All Tammy wants at first is [this video](https://www.youtube.com/watch?v=BrJsyBGuJNY), a nice header, a nice footer with link to AAoM, and maybe a call to action section with 3+ buttons/pages/descriptions for employers, job seekers, and young professionals)
- Job Seeker Form
- Job Seeker Database
- Employer Features (ex. posting jobs, searching candidates)

#### Tech Stack:
- ReactJS - for views / tools
- Redux - for state control
- React-Router - for handling URLs - hopefully with server-side rendering to speed up eventually
- SASS - CSS preprocessor
- Lodash - JS toolset
- Webpack - JS compiler - might change to yarn or something else new and fancy/simpler
- ES6+ and babel - ability to use new JS features and have it be compatable with older browsers still
- [BEM CSS naming system](http://getbem.com/naming/)

#### Important things to consider:
- Ease of use / lack of commitment / not overwhelming intake process for job seekers
- Ford and other companies linking to the site
- Accessibility
- I18N
- Ability to pass development on to someone else (Good testing, comments, documentation, etc.)
