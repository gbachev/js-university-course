# Project Setup

Code for the lecture *Project Setup* (section 25, Our Second Project) of the JavaScript course at gbachev.com.

## The files of this lecture

- [`client/src/api.js`](../job-tracker/client/src/api.js) - every call the front end makes to the API, and `ApiError` with `status` and `fields`
- [`client/vite.config.js`](../job-tracker/client/vite.config.js) - the proxy that passes `/api` on to the server, with `changeOrigin: false`
- [`client/package.json`](../job-tracker/client/package.json) - Vite, Vitest, ESLint and Prettier, all `devDependencies`
- [`server/package.json`](../job-tracker/server/package.json) - `express` and `better-sqlite3`, `"type": "module"`, `engines`, and the `start`, `dev`, `test`, `lint` and `format` scripts
- [`server/.env.example`](../job-tracker/server/.env.example) - the names of the settings, to copy to `.env`
- [`server/src/config.js`](../job-tracker/server/src/config.js) - `readConfig(env)`: every setting checked once, at start-up
- [`server/.gitignore`](../job-tracker/server/.gitignore) - leaves out `.env` and the `data` folder with the database

## Run the app

The finished app is in [`job-tracker/`](../job-tracker), with two parts that each have their own `package.json`. We start them in two terminals, from the repository folder:

```bash
# Terminal 1: the API on http://localhost:3000
cd 25-our-second-project/job-tracker/server
npm install
npm run dev       # restarts when we save a file

# Terminal 2: the front end on http://localhost:5173
cd 25-our-second-project/job-tracker/client
npm install
npm run dev       # open the URL it prints
```

The folder holds the app as it is at the end of the section, so the server already does more than this lecture explains.

To change a setting, copy `server/.env.example` to `server/.env`. The `.gitignore` of `server/` lists `.env`, so Git never picks it up.

## Tasks
1. **Which Host reaches the server?** (`tasks/01-proxy-host.js`) - `proxyHost(entry, browserHost)` returns the `Host` header a Vite proxy entry passes on, for the short form and the object form
2. **What does .env still need?** (`tasks/02-missing-env-names.js`) - `missingEnvNames(exampleText, envText)` returns the names `.env.example` has and `.env` does not

Run the tests with `npm test -- 25-our-second-project/project-setup` from the repository folder (no `npm install` needed). They fail until the task is solved. Compare with `solutions/` after you try.
