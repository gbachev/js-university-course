# Connecting the Front End

Code for the lecture *Connecting the Front End* (section 25, Our Second Project) of the JavaScript course at gbachev.com.

## The files of this lecture

The front end ships finished, so the lecture reads it rather than writes it.

- [`client/src/api.js`](../job-tracker/client/src/api.js) - one private `request()` helper for the eight calls: a body goes as JSON with its `Content-Type`, the relative `/api` path keeps the page and the API on one origin, so `fetch()` sends the session cookie without a `credentials` option. A 204 returns `null`, only a body that says it is JSON is parsed, and an answer that is not OK becomes an `ApiError` with `status`, the server's `error` as its message and `fields`; `status` 0 means no answer arrived. `currentUser()` turns the 401 of `/api/auth/me` into `null`
- [`client/src/main.js`](../job-tracker/client/src/main.js) - `start()` shows the log-in view or the tracker; a 401 while logged in goes back to the log-in view with "Your session has ended. Please log in again."; "Loading your applications…" while the list loads; `submitForm()` disables the button while the request runs and puts the focus on the first invalid field
- [`client/src/render.js`](../job-tracker/client/src/render.js) - each row is a copy of the `<template>` filled with `textContent`, the link only for `http:` and `https:`; `renderFormErrors()` writes the message at the top of the form and one under each field, and sets `aria-invalid`
- [`client/src/state.js`](../job-tracker/client/src/state.js) - pure functions: `countByStatus()`, `filterByStatus()`, the list updates after a save or a delete, and `isWebLink()`
- [`client/index.html`](../job-tracker/client/index.html) - every input has a paragraph for its message, linked with `aria-describedby`; the template's `<a>` has `target="_blank"` and `rel="noopener noreferrer"`
- [`client/eslint.config.js`](../job-tracker/client/eslint.config.js) - `no-restricted-properties` refuses `innerHTML`, `outerHTML` and `insertAdjacentHTML` in `src/`
- [`client/tests/api.test.js`](../job-tracker/client/tests/api.test.js) and [`state.test.js`](../job-tracker/client/tests/state.test.js) - Vitest with a fake `fetch`, covered in *Testing the API*

## Trying the page

Start both parts as in *Project Setup* and open `http://localhost:5173/`. Then:

- Sign up with `jane` and `short`: the message comes at the top, one under each field, and the focus goes to the email.
- Add an application with the company `<img src=x onerror=alert(1)>`: the row shows those characters, and no alert appears.
- Add one with the link `https://jobs.example.com/42`: the row shows `jobs.example.com`, opening in a new tab.
- Stop the server and save again: Vite's proxy answers a plain-text 502, and the form shows "The server answered 502".

## Tasks
1. **One helper for every call** (`tasks/01-request.js`) - `request(method, path, body, fetchFn)` sends JSON with its `Content-Type` only when there is a body, returns `null` for a 204, reads only a JSON body, throws an `ApiError` with `status`, message and `fields` for an answer that is not OK (`The server answered 502` when the body is not JSON), and an `ApiError` with status 0 when no answer arrives. The tests hand it a fake `fetch` that returns real `Response` objects
2. **A link only for the web** (`tasks/02-link-for.js`) - `linkFor(url)` returns `{ href, text }` with the hostname for an `http:` or `https:` link in any case, and `null` for `javascript:`, `data:`, `ftp:`, a link without a scheme and no link at all
3. **Counts and the filter on the page** (`tasks/03-count-and-filter.js`) - `countByStatus(applications)` counts every status, 0 included, and `filterByStatus(applications, status)` keeps the order and returns everything for `'all'`, both without changing the array they receive

Run the tests with `npm test -- 25-our-second-project/connecting-the-front-end` from the repository folder. They use only what Node has built in (`Response` included), so they need no `npm install`. They fail until the task is solved. Compare with `solutions/` after you try.
