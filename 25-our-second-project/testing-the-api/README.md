# Testing the API

Code for the lecture *Testing the API* (section 25, Our Second Project) of the JavaScript course at gbachev.com.

## The files of this lecture

The tests ship with the finished app, so the lecture reads them.

- [`server/tests/helpers.js`](../job-tracker/server/tests/helpers.js) - `startApp()` builds the real app with `createApp()`, a fresh SQLite database in memory (`:memory:`, migrated) and `NODE_ENV=test`, listens on port 0 and gives back `{ url, db, close }`; `close()` stops the server, ends the open connections and closes the database. `send()` is `fetch()` with a JSON body and a `Cookie` header, `cookieFrom()` takes `name=value` from the first `Set-Cookie` with `getSetCookie()`, `signUp()` creates an account and returns its cookie, `addApplication()` saves one
- [`server/tests/auth.test.js`](../job-tracker/server/tests/auth.test.js) - sign-up (201, the cookie's `HttpOnly`, `SameSite=Lax`, `Path` and `Max-Age`, `Secure` only when asked), `/me` with and without a cookie (401 with `WWW-Authenticate`), log-in, log-out that ends the session, an expired session, the same 401 for a wrong password and an unknown email, the 409, the token kept only as a hash
- [`server/tests/applications.test.js`](../job-tracker/server/tests/applications.test.js) - every route: 201 with `Location`, defaults, the list newest first, `PATCH`, `DELETE` and 204, ids that are not whole numbers, and a second user who gets 404 for the first user's application
- [`server/tests/security.test.js`](../job-tracker/server/tests/security.test.js) - `'); DROP TABLE applications; --` saved as a company name, a foreign `Origin` (403), a body that is not JSON (415), broken JSON (400), the JSON 404, no `X-Powered-By`, `trust proxy` in production, and a 500 without details after the test closes the database
- [`server/tests/passwords.test.js`](../job-tracker/server/tests/passwords.test.js), [`cookies.test.js`](../job-tracker/server/tests/cookies.test.js), [`db.test.js`](../job-tracker/server/tests/db.test.js), [`config.test.js`](../job-tracker/server/tests/config.test.js), [`validation.test.js`](../job-tracker/server/tests/validation.test.js) - scrypt hashes with a new salt each time, `readCookie()`, the migrations and foreign keys, `readConfig()`, the field checks
- [`client/tests/api.test.js`](../job-tracker/client/tests/api.test.js) - Vitest with `vi.stubGlobal('fetch', ...)`: a fake `fetch` that answers with real `Response` objects, for every call of `api.js`, the 204, an `ApiError` with `status` and `fields`, an answer that is not JSON and no answer at all
- [`client/tests/state.test.js`](../job-tracker/client/tests/state.test.js) - the pure functions of `state.js`

## Running the tests

```bash
cd 25-our-second-project/job-tracker/server
npm test          # node --test: 53 tests

cd ../client
npm test          # vitest run: 26 tests
```

Each test of the server gets its own app and an empty database, so the tests never depend on each other or on `server/data/job-tracker.db`.

## Tasks
1. **Start the app on a free port** (`tasks/01-start-app.js`) - `startApp(handler)` creates a server with `node:http`, listens on port 0 and resolves with `{ url, close }`: `url` has the real port, and after `close()` the server is stopped without waiting for requests still open (`closeAllConnections()`). The solution follows `24-node-on-the-server/lib/start.js`, the idea behind `startApp()` in `helpers.js` too
2. **The cookie to send back** (`tasks/02-cookie-from.js`) - `cookieFrom(response)` returns the `name=value` of the first `Set-Cookie` header, read with `getSetCookie()`, keeps an `=` inside the value, and returns `null` when no cookie is set
3. **A fake fetch with routes** (`tasks/03-fake-fetch.js`) - `fakeFetch(routes)` returns a `fetchFn(url, options)` that answers real `Response` objects from a map of `'METHOD path'` keys (JSON with its `Content-Type`, or no body for a 204), a JSON 404 for any other route, a new `Response` on every call, and records each call in `fetchFn.calls`

Run the tests with `npm test -- 25-our-second-project/testing-the-api` from the repository folder. They use only what Node has built in (`node:http`, `fetch()` and `Response`), so they need no `npm install`. They fail until the task is solved. Compare with `solutions/` after you try.
