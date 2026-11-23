# Validating Input and Handling Errors

Code for the lecture *Validating Input and Handling Errors* (section 25, Our Second Project) of the JavaScript course at gbachev.com.

## The files of this lecture

- [`server/src/validate.js`](../job-tracker/server/src/validate.js) - one check per field, each returning `{ value }` or `{ error }`: required text trimmed and at most 200 characters, a status from the list, a real `YYYY-MM-DD` date (`new Date('2026-02-30')` rolls over to March 2, so `isRealDate()` turns the date back into text), a link that is `http:` or `https:` only, and notes up to 5000 characters. `validateNewApplication()` checks every field and fills in defaults, `validateChanges()` checks only the fields a `PATCH` sends, and both refuse unknown fields with a 400. `checkFields()` throws one 400 with a message for every bad field
- [`server/src/http-error.js`](../job-tracker/server/src/http-error.js) - `HttpError`, an error with a `status`, a message and, for validation, `fields`
- [`server/src/middleware.js`](../job-tracker/server/src/middleware.js) - `requireJsonBody` answers 415 to a body that is not JSON; `hasBody()` looks at `Content-Length` first, because `fetch()` sends `Content-Length: 0` on a `POST` with no body and `req.is()` then returns `false`, not `null`. `errorHandler` answers broken JSON with 400, a 4xx error with its status and `{ error, fields }`, and anything else with a logged 500 `{ error: 'Something went wrong' }` (not logged under `NODE_ENV=test`)
- [`server/tests/validation.test.js`](../job-tracker/server/tests/validation.test.js) - a 400 that lists every bad field, links, long notes, a `PATCH` that checks only what it sends, and a body that is not an object
- [`server/tests/security.test.js`](../job-tracker/server/tests/security.test.js) - among others, 415 for a body that is not JSON, 400 for broken JSON and a 500 that gives no details

## Trying the checks

Start the server as in *Project Setup*, sign up with curl as in *Building the API* (the cookie goes into a file called `jar`), then send a bad application, a body that is not JSON and broken JSON:

```bash
curl -b jar -X POST http://localhost:3000/api/applications \
    -H 'Content-Type: application/json' \
    -d '{"company":"  ","role":"Developer","status":"ghosted","appliedOn":"2026-02-30","url":"javascript:alert(1)"}'

curl -i -b jar -X POST http://localhost:3000/api/applications \
    -d '{"company":"Acme","role":"Developer"}'

curl -i -b jar -X POST http://localhost:3000/api/applications \
    -H 'Content-Type: application/json' -d '{"company":'
```

## Tasks
1. **A real date** (`tasks/01-is-real-date.js`) - `isRealDate(text)` returns `true` only for a day that exists, written `YYYY-MM-DD`: `'2026-02-30'` and `'2026-1-5'` are `false`, `'2028-02-29'` is `true`
2. **Only web links** (`tasks/02-check-link.js`) - `checkLink(value)` returns `{ value }` with the trimmed link for `http:` and `https:`, `{ value: null }` for no link, and `{ error }` for `javascript:`, `data:`, `ftp:` and text that is not a full link
3. **From an error to an answer** (`tasks/03-to-error-response.js`) - `toErrorResponse(err)` returns the `{ status, body }` of the error handler: 400 for broken JSON, the status and `{ error, fields }` of a 4xx error, and a 500 with no details for anything else

Run the tests with `npm test -- 25-our-second-project/validation-and-errors` from the repository folder. The tasks are plain functions, so the tests need no `npm install`. They fail until the task is solved. Compare with `solutions/` after you try.
