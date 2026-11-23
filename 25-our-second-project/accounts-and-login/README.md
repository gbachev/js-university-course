# Accounts and Logging In

Code for the lecture *Accounts and Logging In* (section 25, Our Second Project) of the JavaScript course at gbachev.com.

## The files of this lecture

- [`server/src/auth/passwords.js`](../job-tracker/server/src/auth/passwords.js) - `hashPassword()` hashes a password with `crypto.scrypt` (N = 16384, r = 8, p = 5, one of the settings of the OWASP Password Storage Cheat Sheet) and a random 16-byte salt, stored as `scrypt:N:r:p:salt:hash`; `verifyPassword()` reads the settings and the salt back and compares with `timingSafeEqual()`. `DUMMY_HASH` has the same settings, so a log-in with an unknown email takes as long as one with a wrong password
- [`server/src/auth/sessions.js`](../job-tracker/server/src/auth/sessions.js) - a session token of 32 random bytes in the `sid` cookie, and only its SHA-256 hash in the `sessions` table. Sessions last seven days; an expired one is deleted instead of used, and every new session clears the expired rows. The cookie is `HttpOnly`, `SameSite=Lax`, `Path=/`, has a `Max-Age` and is `Secure` when `config.cookieSecure` is true
- [`server/src/auth/cookies.js`](../job-tracker/server/src/auth/cookies.js) - `readCookie(header, name)` finds one cookie in the `Cookie` header
- [`server/src/auth/require-user.js`](../job-tracker/server/src/auth/require-user.js) - `requireUser(db)` puts the user of the session on `req.user`, or answers 401
- [`server/src/routes/auth.js`](../job-tracker/server/src/routes/auth.js) - sign-up (201, or 409 for a taken email, in any case), log-in (the same 401 for an unknown email and a wrong password), log-out (deletes the session and clears the cookie, 204) and `GET /api/auth/me`
- [`server/src/middleware.js`](../job-tracker/server/src/middleware.js) - `checkOrigin` answers 403 to a `POST`, `PATCH` or `DELETE` whose `Origin` is not exactly our own origin; the error handler adds `WWW-Authenticate: Session realm="job-tracker"` to every 401
- [`server/migrations/002-create-sessions.sql`](../job-tracker/server/migrations/002-create-sessions.sql) - the `sessions` table
- [`server/tests/auth.test.js`](../job-tracker/server/tests/auth.test.js), [`passwords.test.js`](../job-tracker/server/tests/passwords.test.js), [`cookies.test.js`](../job-tracker/server/tests/cookies.test.js) and [`security.test.js`](../job-tracker/server/tests/security.test.js) - sign-up, log-in, log-out, the cookie attributes, an expired session, the hashes and the `Origin` check

Two known limits, named in the lecture: the 409 of sign-up tells anyone that an email has an account, and nothing limits how many passwords one client may try.

## Trying the routes

*Building the API* already signed up Jane and John, so start from an empty database: stop the server, delete `server/data/job-tracker.db` and start it again as in *Project Setup*. Then sign up, log out with a copy of the cookie kept, and try the copy:

```bash
curl -i -c jar -X POST http://localhost:3000/api/auth/signup \
    -H 'Content-Type: application/json' \
    -d '{"email":"Jane@Example.com","password":"correct horse"}'

cp jar jar-copy
curl -i -b jar -c jar -X POST http://localhost:3000/api/auth/logout
curl -i -b jar-copy http://localhost:3000/api/auth/me
```

Log in again, then send a `POST` with an `Origin` from another port:

```bash
curl -c jar -X POST http://localhost:3000/api/auth/login \
    -H 'Content-Type: application/json' \
    -d '{"email":"jane@example.com","password":"correct horse"}'

curl -i -b jar -X POST http://localhost:3000/api/applications \
    -H 'Content-Type: application/json' -H 'Origin: http://localhost:8080' \
    -d '{"company":"Acme","role":"Developer"}'
```

## Tasks
1. **Hash and check a password** (`tasks/01-hash-password.js`) - `hashPassword(password)` returns `scrypt:16384:8:5:salt:hash` with a new random salt every time, and `verifyPassword(password, stored)` hashes the attempt with the settings, the salt and the hash length of `stored` and compares with `timingSafeEqual()`
2. **One cookie from the header** (`tasks/02-read-cookie.js`) - `readCookie(header, name)` returns the value of one cookie, matching the whole name (`oldsid` is not `sid`), keeping an `=` inside the value, and `null` when the header or the cookie is missing
3. **Refuse other origins** (`tasks/03-should-refuse.js`) - `shouldRefuse(req)` returns `true` for a request that may change data and whose `Origin` is not exactly `${req.protocol}://${req.host}`: another port, `http` instead of `https`, a sibling subdomain, a lookalike name and `null` are all refused

Run the tests with `npm test -- 25-our-second-project/accounts-and-login` from the repository folder. The tasks use only `node:crypto`, so the tests need no `npm install`. They fail until the task is solved. Compare with `solutions/` after you try.
