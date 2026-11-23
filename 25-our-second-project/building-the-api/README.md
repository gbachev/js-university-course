# Building the API

Code for the lecture *Building the API* (section 25, Our Second Project) of the JavaScript course at gbachev.com.

## The files of this lecture

- [`server/src/app.js`](../job-tracker/server/src/app.js) - `createApp({ db, config })` builds the app without starting it and mounts the routers at `/api/auth` and `/api/applications`, then the JSON 404 and the error handler. The database is passed in, so the tests can give each app a fresh one in memory
- [`server/src/routes/applications.js`](../job-tracker/server/src/routes/applications.js) - the applications router: the list (newest first), `POST` with 201, `Location` and `RETURNING *`, one application, `PATCH` that lays the changes over the row and writes every field back, and `DELETE` with 204, or 404 when `changes` is 0. `toApplication(row)` turns a row into camelCase JSON without `user_id`, and `parseId(text)` turns an id that is not a whole number into `null`
- [`server/src/middleware.js`](../job-tracker/server/src/middleware.js) - `notFound`, the JSON 404 for a path no route matches
- [`server/tests/applications.test.js`](../job-tracker/server/tests/applications.test.js) - every route, an id that is not a whole number, and another user's application, which is a 404 for every method

## Trying the routes

Start the server as in *Project Setup*, then sign up with curl and keep the session cookie in a file called `jar`:

```bash
curl -c jar -X POST http://localhost:3000/api/auth/signup \
    -H 'Content-Type: application/json' \
    -d '{"email":"jane@example.com","password":"correct horse"}'

curl -i -b jar -X POST http://localhost:3000/api/applications \
    -H 'Content-Type: application/json' \
    -d '{"company":"Acme","role":"Developer","status":"applied"}'

curl -b jar http://localhost:3000/api/applications
```

## Tasks
1. **From a row to JSON** (`tasks/01-to-application.js`) - `toApplication(row)` returns the nine camelCase fields the API sends, keeps `null` values and leaves out `user_id` and any column it does not know
2. **An id from the URL** (`tasks/02-parse-id.js`) - `parseId(text)` returns a whole number written in digits, or `null` for `'abc'`, `'1.5'`, `'1e3'`, `'0x10'` and ids too long to keep exactly
3. **Lay the changes over** (`tasks/03-merge-patch.js`) - `mergePatch(current, changes)` returns the application with the changes laid over it and throws for any field a user cannot edit, `'constructor'` included

Run the tests with `npm test -- 25-our-second-project/building-the-api` from the repository folder. The tasks are plain functions, so the tests need no `npm install`. They fail until the task is solved. Compare with `solutions/` after you try.
