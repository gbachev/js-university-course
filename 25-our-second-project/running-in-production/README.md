# Running the Server in Production

Code for the lecture *Running the Server in Production* (section 25, Our Second Project) of the JavaScript course at gbachev.com.

## The files of this lecture

The finished app already runs in production mode, so the lecture reads its code and runs it.

- [`client/package.json`](../job-tracker/client/package.json) - `npm run build` (`vite build`) writes the front end to `client/dist`, with a content hash in every file name under `assets/`
- [`server/package.json`](../job-tracker/server/package.json) - `npm start` runs `node --env-file-if-exists=.env src/server.js`; `express` and `better-sqlite3` are the only `dependencies`, so `npm ci --omit=dev` installs what the server needs and nothing else
- [`server/src/app.js`](../job-tracker/server/src/app.js) - `trust proxy` set to one hop in production, so `req.protocol` reads the host proxy's `X-Forwarded-Proto` and `checkOrigin` sees the same https origin as the browser; `express.static()` for `client/dist`, with `maxAge: '1y'` and `immutable` for `assets/` and the default `public, max-age=0` for `index.html`
- [`server/src/config.js`](../job-tracker/server/src/config.js) - `readConfig()`: `PORT`, `NODE_ENV`, `DATABASE_PATH` and `COOKIE_SECURE`, checked once at start-up; `Secure` cookies on in production unless `COOKIE_SECURE=false`
- [`server/src/db.js`](../job-tracker/server/src/db.js) - `openDatabase()` creates the folder of `DATABASE_PATH` and turns on WAL, which keeps a `-wal` and a `-shm` file next to the database while it is open
- [`server/src/server.js`](../job-tracker/server/src/server.js) - `migrate(db)` before `listen()`, so a new deploy updates the database before the first request; on `SIGTERM` or `SIGINT` the server stops taking requests, lets the open ones finish and closes the database
- [`server/tests/security.test.js`](../job-tracker/server/tests/security.test.js) - the test "behind the proxy in production, our https origin is allowed": 403 without `X-Forwarded-Proto`, 201 and a `Secure` cookie with it

## Running it as one service

```bash
cd 25-our-second-project/job-tracker/client
npm ci
npm run build

cd ../server
npm ci --omit=dev
NODE_ENV=production PORT=4000 DATABASE_PATH=./data/production.db npm start
# open http://localhost:4000
```

`DATABASE_PATH` gives a new, empty database in `server/data/`, next to the development one. On a host, `DATABASE_PATH` points into the folder where the host mounts a persistent disk. Over plain http, a browser that will not keep a `Secure` cookie needs `COOKIE_SECURE=false`. `npm ci --omit=dev` leaves out ESLint and Prettier, so run `npm ci` again before `npm run lint` or `npm run format`.

## Tasks
1. **The settings a host must give us** (`tasks/01-production-config.js`) - `readProductionConfig(env)` checks `PORT` as `readConfig()` does and, in production only, refuses a missing `DATABASE_PATH` or one that is not absolute (`./data/job-tracker.db`, `:memory:`); every problem goes into one error, `PORT` first
2. **Our own origin behind the host's proxy** (`tasks/02-own-origin.js`) - `ownOrigin(req, trustProxy)` builds `protocol://host` for a `node:http` request: https for a TLS connection, the first value of `X-Forwarded-Proto` only when `trustProxy` is true, and the `Host` header with its port
3. **Shutting down without losing a request** (`tasks/03-shut-down.js`) - `shutDown(server, db)` stops new connections with `server.close()`, lets a request in progress get its answer, closes the database only after the server has closed, and rejects when the server was not running

Run the tests with `npm test -- 25-our-second-project/running-in-production` from the repository folder. They use only what Node has built in (`node:http`, `node:path` and `fetch()`), so they need no `npm install`. They fail until the task is solved. Compare with `solutions/` after you try.
