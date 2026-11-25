# SpendWise — Interactive Budget Tracker

## Project Description

SpendWise is a budgeting web application that helps users track their
monthly expenses. Users can set a monthly budget, add expenses with a
name, amount, category and date, and see their remaining balance update
in real time. The app uses conditional logic to warn the user when they
are approaching or exceeding their budget. All data is processed in the
browser with JavaScript — no backend required.

## Technologies Used

- **HTML5** — semantic structure, forms, tables
- **CSS3** — Grid, Flexbox, custom properties, responsive design, dark theme
- **JavaScript** — variables, arrays, objects, loops, conditionals,
  DOM manipulation, event listeners
- **Google Fonts** — Poppins (headings) and Lato (body text)
- **Git & GitHub** — version control
- **Netlify** — hosting and continuous deployment

## GitHub Repository Information

Repository URL: https://github.com/your-username/spendwise

The repository is public and contains all project files:
`index.html`, `style.css`, `script.js`, `logo.png`, and this `README.md`.

## Live Netlify Website URL

https://spendwise-budget2026.netlify.app

## Deployment Process Summary

1. Created a public GitHub repository named `spendwise`.
2. Initialized Git locally, committed all project files, and pushed to
   the `main` branch on GitHub.
3. Logged in to Netlify and chose "Import an existing project" → GitHub.
4. Selected the `spendwise` repository. Left the build command and
   publish directory blank because this is a pure static site.
5. Clicked "Deploy site". Netlify built and published the site within
   seconds.
6. Changed the default random Netlify subdomain to
   `spendwise-budget2026` through Site configuration → Change site name.
7. Tested automatic deployment: made a small text change locally,
   pushed to GitHub, and confirmed Netlify rebuilt the site
   automatically without any manual action.

## Challenges Encountered During Deployment

- **The site showed "Page not found" after the first deploy.** I
  realized `index.html` was not in the repository root — it was inside
  a subfolder. I moved all files to the root directory, committed and
  pushed again, and the site loaded correctly.
- **Netlify did not auto-deploy after I pushed.** The branch name was
  `master` but Netlify was watching `main`. I renamed the branch with
  `git branch -M main` and pushed again, and automatic deployment
  started working.
- **The logo image was broken on the live site.** The local file name
  was `Logo.PNG` but the HTML referenced `logo.png`. File names on
  Netlify are case-sensitive. I renamed the file to lowercase and
  updated the HTML reference.

## Lessons Learned

- **File structure matters for hosting.** Netlify expects the entry
  file (`index.html`) in the publish root. Organizing the project
  correctly from the start avoids deployment errors.
- **Git branches must match what Netlify watches.** The default branch
  name matters — `main` is the modern standard and what Netlify expects.
- **Automatic deployment is powerful but requires a clean Git workflow.**
  Every push triggers a build, so it is important to test locally
  before pushing to avoid breaking the live site.
- **Case sensitivity on the web.** Windows and macOS are case-insensitive
  by default, but web servers are not. Always use lowercase file names
  for web assets.