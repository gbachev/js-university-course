# Job Application Tracker

A small full-stack app for keeping track of job applications. Each user signs up, logs in and keeps their own list: the company, the role, the status (wishlist, applied, interview, offer, rejected), the day they applied, a link to the job posting and notes. The list can be filtered by status and shows how many applications have each one.

It has two parts, each with its own `package.json`:

- `server/` - a JSON API with Express 5 and a SQLite database (better-sqlite3): accounts with scrypt password hashes, sessions in an `HttpOnly` cookie, tests with Node's built-in test runner
- `client/` - the front end: plain HTML, CSS and JavaScript modules, built with Vite. No framework.

## Run it

You need Node.js 22.12 or newer (the repo pins Node 26 in .nvmrc). We start the two parts in two terminals:

```bash
# Terminal 1: the API on http://localhost:3000
cd server
npm install
npm run dev       # restarts when we save a file

# Terminal 2: the front end on http://localhost:5173
cd client
npm install
npm run dev       # open the URL it prints
```

Vite passes every request to `/api` on to the server, so the page and the API share one origin: no CORS, and the session cookie works as it will in production. The server creates its database at `server/data/job-tracker.db` on the first start.

The other scripts:

```bash
# in server/
npm start         # the API without --watch
npm test          # the API tests (node --test)
npm run lint      # check the code with ESLint
npm run format    # format every file with Prettier

# in client/
npm test          # the front-end tests (Vitest)
npm run lint
npm run format
npm run build     # build the front end into client/dist
npm run preview   # serve client/dist locally to check the build
```

### Settings

The server reads its settings from environment variables. To change one, copy `server/.env.example` to `server/.env`; `npm start` and `npm run dev` load it when it is there.

| Name | Default | What it does |
| --- | --- | --- |
| `PORT` | `3000` | The port the server listens on |
| `NODE_ENV` | `development` | `development`, `test` or `production` |
| `DATABASE_PATH` | `./data/job-tracker.db` | The SQLite file, relative to `server/`; the folder is created when missing |
| `COOKIE_SECURE` | `true` in production, `false` otherwise | Whether the session cookie gets the `Secure` flag (sent over https only) |

The server checks every setting at start-up and stops with a list of the bad ones.

### One service, as in production

In production the Express server also sends the built front end, so the whole app is one Node service:

```bash
cd client
npm run build
cd ../server
NODE_ENV=production npm start
# open http://localhost:3000
```

The session cookie is `Secure` in production. To try production mode over plain http in a browser that will not send a `Secure` cookie to `http://localhost`, add `COOKIE_SECURE=false`.

## The API

Every answer is JSON. An error has the shape `{ "error": "..." }`; a 400 from validation adds `fields`, one message per field.

| Request | Body | Answer |
| --- | --- | --- |
| `POST /api/auth/signup` | `{ email, password }` | 201 `{ user }` and the session cookie; 409 when the email has an account |
| `POST /api/auth/login` | `{ email, password }` | 200 `{ user }` and the session cookie; 401 for a wrong email or password |
| `POST /api/auth/logout` | none | 204, the session is deleted and the cookie cleared |
| `GET /api/auth/me` | none | 200 `{ user }`, or 401 |
| `GET /api/applications` | none | 200 `{ applications }`, newest first; `?status=offer` keeps one status |
| `POST /api/applications` | an application | 201 `{ application }` with a `Location` header |
| `GET /api/applications/:id` | none | 200 `{ application }` |
| `PATCH /api/applications/:id` | the fields that change | 200 `{ application }` |
| `DELETE /api/applications/:id` | none | 204 |

An application has `company` and `role` (required, up to 200 characters), `status` (`wishlist` when left out), `appliedOn` (`YYYY-MM-DD` or `null`), `url` (an http or https link, or `null`) and `notes` (up to 5000 characters). Any other field is refused.

The other status codes: 401 (with `WWW-Authenticate`) without a valid session; 403 for a `POST`, `PATCH` or `DELETE` whose `Origin` is another site; 404 for an application that does not exist or belongs to someone else; 415 for a body that is not JSON.

## Files

```
server/
  src/server.js              The entry point: reads the config, opens the database, runs the migrations, listens
  src/config.js              readConfig(): every setting checked once, at start-up
  src/db.js                  openDatabase() and migrate(): SQLite with foreign keys and WAL, the numbered migrations
  src/app.js                 createApp({ db, config }): the middleware in order, the routes, the built front end
  src/middleware.js          checkOrigin, requireJsonBody, the JSON 404 and the error handler
  src/http-error.js          HttpError: an error that carries its status (and the field messages of a 400)
  src/validate.js            One check per field; validateCredentials, validateNewApplication, validateChanges
  src/auth/passwords.js      hashPassword() and verifyPassword() with scrypt
  src/auth/sessions.js       Sessions in the database, the session cookie
  src/auth/cookies.js        readCookie(): one cookie from the Cookie header
  src/auth/require-user.js   requireUser(): the middleware that puts the logged-in user on req.user
  src/routes/auth.js         Sign up, log in, log out, /me
  src/routes/applications.js The applications of the logged-in user
  migrations/                The tables, one numbered SQL file per change
  tests/helpers.js           startApp() on a free port with a fresh database in memory, send(), signUp()
  tests/*.test.js            The tests, one file per subject
  .env.example               The names of the settings, to copy to .env

client/
  index.html                 The page: the log-in and sign-up forms, the application form, the list, the row <template>
  src/main.js                Wiring: holds the data, listens for events, calls the API and render
  src/api.js                 Every call to the API, and ApiError
  src/render.js              Builds the rows from the <template> with textContent; the filter; the form errors
  src/state.js               Pure functions: counts per status, the filter, list changes, isWebLink, formatDay
  src/style.css              The styles
  tests/api.test.js          Tests for api.js, with a fake fetch
  tests/state.test.js        Tests for the pure functions in state.js
  vite.config.js             The proxy that passes /api on to the server
  eslint.config.js           ESLint rules, including the ban on innerHTML, outerHTML and insertAdjacentHTML
```

Both parts have `.prettierrc.json` (4 spaces, single quotes), `.prettierignore`, `.gitignore` and `.nvmrc`.

## Lesson map

The "Our Second Project" module walks through this code. Each lesson presents these files and functions.

### 2. Project Setup

- The two folders, `client/` and `server/`, each with its own `package.json`, and why the browser should see one origin
- `client/vite.config.js`: the proxy for `/api`, and why `changeOrigin` stays off
- `server/package.json`: `"type": "module"`, the `start`, `dev` and `test` scripts, `node --env-file-if-exists=.env`
- `eslint.config.js`, `.prettierrc.json` and `.gitignore` in both parts; `server/.env.example`

### 3. A Database with SQLite

- `server/migrations/`: the three tables, `PRIMARY KEY`, `NOT NULL`, `UNIQUE`, `REFERENCES ... ON DELETE CASCADE`, the `CHECK` on `status`
- `server/src/db.js`: `openDatabase` (`foreign_keys = ON`, WAL for a file, `:memory:`), `migrate` (`PRAGMA user_version`, one transaction per file)
- `server/src/server.js`: open, migrate, listen; closing the database on `SIGTERM` and `SIGINT`

### 4. Building the API

- `server/src/app.js`: `createApp({ db, config })` and the order of the middleware
- `server/src/routes/applications.js`: `express.Router()`, `db.prepare()` with `?` and `@name` parameters, `.all()`, `.get()`, `.run()` and `RETURNING`, `toApplication`, 201 with `Location`, 204, `parseId` and the 404, `user_id` in every query
- Why SQL is never built from strings: the `'); DROP TABLE applications; --` test

### 5. Validating Input and Handling Errors

- `server/src/validate.js`: one check per field, `{ value }` or `{ error }`, default parameters, `isRealDate`, `URL.parse` and the http/https rule, `rejectUnknownFields` and `Object.hasOwn`, one 400 with `fields`
- `server/src/http-error.js`: `HttpError`
- `server/src/middleware.js`: `requireJsonBody` (415), the JSON 404, the error handler (broken JSON, 4xx, 500 without details)

### 6. Accounts and Logging In

- `server/src/auth/passwords.js`: scrypt, the salt, the cost settings, `timingSafeEqual`, `DUMMY_HASH`
- `server/src/auth/sessions.js` and `cookies.js`: the random token, its SHA-256 hash in the database, expiry, `res.cookie()` with `httpOnly`, `secure`, `sameSite` and `maxAge`
- `server/src/routes/auth.js`: sign-up (the `UNIQUE` email and 409), log-in (the same 401 for a wrong email and a wrong password), log-out, `/me`
- `server/src/auth/require-user.js`; 401 with `WWW-Authenticate`; 404 instead of 403 for someone else's application
- `server/src/middleware.js`: `checkOrigin` (403) next to `SameSite=Lax`; `trust proxy` in `app.js`

### 7. Connecting the Front End

- `client/src/api.js`: `request()`, relative `/api` paths, cookies on same-origin `fetch()`, `ApiError` with `status` and `fields`, 204, an answer that is not JSON, no answer at all
- `client/src/main.js`: start with `currentUser()`, the two views, `submitForm` (disabled button, field errors, focus), the edit mode, event delegation on the list, a 401 that ends the session
- `client/src/render.js`: the row `<template>`, `textContent`, the link only for http and https with `rel="noopener noreferrer"`, `aria-invalid` and `aria-describedby`
- `client/eslint.config.js`: `no-restricted-properties` against `innerHTML`, `outerHTML` and `insertAdjacentHTML`

### 8. Testing the API

- `server/tests/helpers.js`: port 0, a fresh `:memory:` database for every test, `getSetCookie()`
- `server/tests/*.test.js`: status codes, headers and bodies; a second user; an expired session; a foreign `Origin`
- `client/tests/api.test.js`: a fake `fetch` that returns real `Response` objects; `client/tests/state.test.js`

### 9. Running the Server in Production

- Production: `npm run build` in `client/`, then `NODE_ENV=production npm start` in `server/`, with `PORT` and `DATABASE_PATH` from the host, and the database file on a disk that survives a new deploy
- `app.js`: `express.static()` for `client/dist`, a year of caching for the hashed files in `assets/`, and `trust proxy` behind the host's proxy
- `server/src/config.js`: `NODE_ENV=production` turns on `Secure` cookies; `COOKIE_SECURE` overrides it
- `server/src/server.js`: `migrate(db)` runs at start-up, so a new deploy updates the database before the first request

### 10. Best Practices

- The habits of the project, in one place: config checked at start-up, one error shape, every value checked on the server, bound parameters, user ids in every query, hashed passwords and tokens, cookies a script cannot read, `textContent` for data, tests that start the real app
