# A Database with SQLite

Code for the lecture *A Database with SQLite* (section 25, Our Second Project) of the JavaScript course at gbachev.com.

## The files of this lecture

- [`server/migrations/`](../job-tracker/server/migrations) - the three tables as numbered SQL files: `001-create-users.sql`, `002-create-sessions.sql` and `003-create-applications.sql`, with `NOT NULL`, `UNIQUE`, `CHECK` and `REFERENCES ... ON DELETE CASCADE`
- [`server/src/db.js`](../job-tracker/server/src/db.js) - `openDatabase(path)` with `foreign_keys` and WAL, and `migrate(db)`, which runs the new files and records the last number in `PRAGMA user_version`
- [`server/src/server.js`](../job-tracker/server/src/server.js) - opens the database and runs the migrations before the server starts listening
- [`server/src/routes/applications.js`](../job-tracker/server/src/routes/applications.js) - the queries of the applications routes, with `?` and named parameters such as `@company`
- [`server/tests/db.test.js`](../job-tracker/server/tests/db.test.js) - the migrations, foreign keys and the database file, tested on `:memory:` and a temporary folder
- [`server/tests/security.test.js`](../job-tracker/server/tests/security.test.js) - the first test stores `'); DROP TABLE applications; --` as a company name

## Examples

- `examples/01-queries.js` - `INSERT INTO ... VALUES`, `SELECT ... WHERE ... ORDER BY`, `UPDATE ... SET` and `DELETE FROM`, with what `run()`, `get()` and `all()` return
- `examples/02-constraints.js` - each rule of the tables broken once, with the `SqliteError` code it throws, `ON DELETE CASCADE`, and an orphan row once `foreign_keys` is off
- `examples/03-migrations.js` - `migrate()` on a database file in a temporary folder: `user_version` from 0 to 3, a second run that does nothing, the `-wal` and `-shm` files, and WAL on `:memory:`
- `examples/04-sql-injection.js` - a log-in query built from the input, which finds every user, next to the same query with a bound parameter, and an `INSERT ... RETURNING` with named parameters

The examples use the app's own `db.js`, so they need `better-sqlite3` from the app. Install it once, then run them from the repository folder:

```bash
cd 25-our-second-project/job-tracker/server
npm install
cd ../../..
node 25-our-second-project/database/examples/01-queries.js
```

Each example works on a database in memory or in a temporary folder, prints its results and stops by itself.

## Tasks
1. **Run the pending migrations** (`tasks/01-run-migrations.js`) - `runMigrations(db, files)` runs the new `.sql` files in the order of their number, each in a transaction with its `user_version`, on a stand-in for a better-sqlite3 database
2. **A list query with bound parameters** (`tasks/02-list-query.js`) - `listQuery(userId, { status, sort })` returns `{ sql, params }`: the status as a bound value, the `ORDER BY` from a fixed list

Run the tests with `npm test -- 25-our-second-project/database` from the repository folder. The tasks are plain functions, so the tests need no `npm install`. They fail until the task is solved. Compare with `solutions/` after you try.
