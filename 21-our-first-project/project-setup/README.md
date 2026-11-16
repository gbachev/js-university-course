# Project Setup

Code for the lecture *Project Setup* (section 21, Our First Project) of the JavaScript course at gbachev.com.

## The files of this lecture

- [`index.html`](../reading-list/index.html) - the page, with one `<script type="module" src="/src/main.js">` (at this point only the header and the "My list" panel)
- [`src/main.js`](../reading-list/src/main.js) - at this point one line, `import './style.css';`
- [`src/style.css`](../reading-list/src/style.css) - the styles
- [`public/favicon.svg`](../reading-list/public/favicon.svg) - copied into the build as it is
- [`package.json`](../reading-list/package.json) - the `dev`, `build`, `preview`, `test`, `lint` and `format` scripts
- [`.prettierrc.json`](../reading-list/.prettierrc.json) and [`.prettierignore`](../reading-list/.prettierignore) - Prettier settings
- [`eslint.config.js`](../reading-list/eslint.config.js) - ESLint rules
- [`.gitignore`](../reading-list/.gitignore) and [`.nvmrc`](../reading-list/.nvmrc) - what Git leaves out, and the Node version

## Run the app

The finished app is in [`reading-list/`](../reading-list), with its own `package.json`. From the repository folder:

```bash
cd 21-our-first-project/reading-list
npm install       # once: installs Vite, Vitest, ESLint and Prettier
npm run dev       # open the URL it prints, http://localhost:5173/
```

The folder holds the app as it is at the end of the section, so the page already does more than this lecture builds.

`npm run format` and `npm run lint` run the two tools from the lecture.

## Tasks
1. **Missing scripts** (`tasks/01-missing-scripts.js`) - find the scripts a `package.json` does not have yet
2. **Is our Node new enough?** (`tasks/02-node-version.js`) - compare a Node version with the minimum a tool needs
3. **Add to .gitignore** (`tasks/03-gitignore-lines.js`) - add entries to a `.gitignore` text without adding them twice

Run the tests with `npm test -- 21-our-first-project/project-setup` from the repository folder (no `npm install` needed). They fail until the task is solved. Compare with `solutions/` after you try.
