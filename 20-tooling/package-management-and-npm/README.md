# Package Management and npm

Code for the lecture *Package Management and npm* (section 20, Tooling) of the JavaScript course at gbachev.com.

## Examples
Each example is a small project with its own `package.json`. We install its packages inside its folder; the rest of the repository stays without dependencies.

- `examples/01-reading-list/` - the reading list project of the lecture: the `package.json` with `dependencies`, `devDependencies` and the `dev`, `build`, `test` and `check` scripts, and `src/books.js`, which imports `nanoid`. A small test and an `index.html` give `npm test` and `npm run build` something to work on.
- `examples/02-outdated-and-audit/` - a project with nanoid saved as `^5.1.10`, to try `npm outdated`, `npm audit` and `npm update`

Run the first one from the repository folder:

```bash
cd 20-tooling/package-management-and-npm/examples/01-reading-list
npm install
node src/books.js     # Dune, then 21
npm test
npm run build
npm run check         # the tests, then the build
npm run               # lists the scripts
npx vite --version
```

For the second one we install the old version first, so there is something to update:

```bash
cd 20-tooling/package-management-and-npm/examples/02-outdated-and-audit
npm install nanoid@5.1.10
npm outdated          # Current 5.1.10, Wanted 5.1.16, Latest 6.0.2
npm audit             # the two advisories for nanoid 4.0.0 - 5.1.15
npm update            # moves to 5.1.16, the Wanted version
```

`npm install` writes a `package-lock.json` and a `node_modules` folder into the example. Git ignores `node_modules`; we can delete both when we are done.

## Tasks
1. **Tidy up package.json** (`tasks/01-tidy-package-json.js`) - move each package to the right list, make the project private and an ES module, and add a `check` script
2. **The newest version** (`tasks/02-newest-version.js`) - find the newest of a list of versions, comparing numbers and not text
3. **Does the version fit the range?** (`tasks/03-satisfies.js`) - check a version against a `^`, `~` or exact range, the way npm does

Run the tests with `npm test -- 20-tooling/package-management-and-npm`. They fail until the task is solved. Compare with `solutions/` after you try.
