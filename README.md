# Upbound at work - front-end

#### To get started:
- Clone the repo `git clone https://github.com/aaomi/upbound-front-end.git`
- Run `npm install`
- Run `npm start`
- Browse to [http://localhost:8080](http://localhost:8080)
- Calvin - for now, just work exclusively in 'js/views/pages/HomePage/HomePage.js', 'js/views/pages/HomePage/HomePage.scss', 'js/views/pages/ContactPage/ContactPage.scss', and 'js/views/pages/ContactPage/ContactPage.js'

#### To push a new version to the live site:
1. Compile the index.html and any assets that are required: `npm run prod` or `npm run prod.fish` or `npm run compile`
2. The `prod` or `prod.fish` command should have launched an http-server hosted at http://localhost:8080 (Make sure the process running after `npm start` is no longer active first to avoid port conflicts) or you can run it separately if you ran `compile` by running `./node_modules/.bin/http-server`
3. Make sure everything looks good on the website [locally](http://localhost:8080)
4. Commit the new changes! `git add .` and `git commit -am "Message about the commit"`
5. Preferably, we would make a separate branch `git checkout -b new-branch-name`, push up the new branch, and then create a pull request from the new branch into master
- As an alternative, you could just push straight into master if you know it is working properly. This should not be done once people are counting on the site.

#### To push changes without changing live site:
1. No need to compile anything, though running the dev server (`npm start`) will have deleted the live site's contents
2. To reset the live site content, run `npm run reset` or `npm run reset.fish`. This will replace `index.html` and the `docs/` folder with the current version of the content from whatever branch you're on
3. Follow steps 4 and 5 above

#### Code editor/IDE
- I highly recommend using Atom
- With Atom (or a few other editors), you should install a few packages (hit CMD/CTRL+Shift+P, type "Install Packages") to help keep our code consistent
- language-babel, atom-ide-ui, linter-eslint, linter-csslint, linter-jsonlint, linter-sass-lint, linter-ui-default

#### Project Management
- Let's use Github Issues and Projects for issue tracking instead of Trello. That way it integrates well with commit messages

#### Git notes:
- I've gotten used to using this format for git commits so that GitHub recognizes the issue you are working on: `git commit -am "#1 - embedded Youtube Video"` and `git commit -am "#1, #2 - embedded Youtube Video, added Header"` when there's more than one issue addressed in a commit.

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
