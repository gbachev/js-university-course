# 20. Tooling

The tools of a JavaScript project: npm and Node versions, transpilers, bundlers, linters and formatters, Git, dev servers, tests and CI.

Most examples here are small projects with their own `package.json`. We run `npm install` inside the example's folder; the rest of the repository stays without dependencies. The tasks need nothing installed: they practice what the tools do, with the tests of the repository.

1. Section Overview (no code)
2. [Package Management and npm](package-management-and-npm) - `dependencies` and `devDependencies`, npm scripts, `^` and `~` ranges, the lock file and `npm outdated`
3. [Node.js and nvm](node-and-nvm) - Node release lines, `.nvmrc`, the `engines` field, and ES modules vs CommonJS in Node
4. [Transpilers](transpilers) - Babel, arrow functions to ES5, Browserslist and core-js polyfills
5. [Bundlers](bundlers) - the module graph, tree-shaking and code splitting, with Vite and webpack
6. [Linters and Formatters](linters-and-formatters) - ESLint's flat config, Prettier, and both together
7. [Version Control and Collaboration](version-control-and-collaboration) - `.gitignore`, merge conflicts, and Husky with lint-staged
8. [Development Servers and Live Reload](development-servers-and-live-reload) - the Vite dev server, hot updates, the API proxy and `.env`
9. [Testing Setup](testing-setup) - Vitest, matchers, mocks and coverage
10. [Continuous Integration Basics](continuous-integration) - a GitHub Actions workflow, a Node matrix and failing steps
11. [Best Practices](best-practices) - a pinned Node version, one check script, and one tool for each job
12. Section Review (no code)
