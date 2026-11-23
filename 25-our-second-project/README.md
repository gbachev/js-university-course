# 25. Our Second Project

We build a full-stack app: the Job Application Tracker, where each user signs up, logs in and keeps a list of job applications with their status, the day they applied, a link and notes. An Express API keeps the data in a SQLite database; a plain JavaScript front end, built with Vite, talks to it.

**The finished app is in [`job-tracker/`](job-tracker).** It has two parts, each with its own `package.json`: `server/` (the API) and `client/` (the front end). Its README shows how to run them: `npm install` and `npm run dev` in each.

1. Section Overview (no code)
2. [Project Setup](project-setup) - the `client/` and `server/` folders, Vite's proxy for `/api`, ESLint, Prettier and the npm scripts of each part
3. [A Database with SQLite](database) - better-sqlite3, the tables in numbered SQL migrations, `PRAGMA user_version`, foreign keys and WAL
4. [Building the API](building-the-api) - the applications routes, with the queries of lecture 3 behind `express.Router()`, 201 with `Location`, 204 and 404
5. Validating Input and Handling Errors - one check per field, a 400 with a message for each field, `HttpError`, 415 for a body that is not JSON and the error handler
6. Accounts and Logging In - passwords hashed with scrypt, a session in an `HttpOnly`, `SameSite=Lax` cookie, 401 and `requireUser`, and the `Origin` check against cross-site requests
7. Connecting the Front End - every call in `api.js`, the session cookie on one origin, field messages in the forms, rows from a `<template>` with `textContent`
8. Testing the API - `node:test` and `fetch()` against the real app on a free port with a fresh database in memory, and Vitest with a fake `fetch` for the front end
9. Running the Server in Production - the build, the environment variables, a disk that keeps the database, and one Node service that sends the front end and answers `/api`
10. Best Practices - the habits of the project; their code is in [`job-tracker/`](job-tracker)
11. Section Review (no code)
