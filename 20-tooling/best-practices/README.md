# Best Practices

Code for the lecture *Best Practices* (section 20, Tooling) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-pin-the-node-version/` - `.nvmrc` with 26 for nvm and CI, and `engines` set to `>=24`, the versions CI tests
- `examples/02-one-check-script/` - the reading list with its daily commands as npm scripts and one `check` script that runs lint, tests and build. `nanoid` is a dependency, the build and test tools are dev dependencies. Its `eslint.config.js` brings a double-quotes rule, and `eslint-config-prettier` last switches it off, so it does not fight the single quotes of `.prettierrc`.

We install the packages of the second one inside its folder; the rest of the repository stays without dependencies.

```bash
cd 20-tooling/best-practices/examples/02-one-check-script
npm install          # adds or updates packages, and writes package-lock.json
npm ci               # exactly the lock file, the install for CI
npm run check        # lint, then the tests, then the build; stops at the first failure
npm run format       # Prettier on every file
```

To see the two tools fight, we delete the `prettier,` line from `eslint.config.js` and run `npm run lint`: every single-quoted string becomes an error. For the first example, `npm pkg get engines.node` inside its folder prints `">=24"`, and `nvm use` switches to Node 26.

`npm install` writes a `package-lock.json` and a `node_modules` folder into the example, and the build a `dist` folder. In our own projects we commit the lock file; here Git ignores `node_modules` and `dist`, and we can delete them when we are done.
