// migrate() on a database file: the first run creates the three tables and sets
// PRAGMA user_version to 3, the second run finds nothing new to do. The file lives
// in a temporary folder that we delete at the end. From the repository folder,
// after npm install in job-tracker/server:
//   node 25-our-second-project/database/examples/03-migrations.js
import { mkdtempSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { migrate, openDatabase } from '../../job-tracker/server/src/db.js';

const dir = mkdtempSync(join(tmpdir(), 'job-tracker-'));
const path = join(dir, 'data', 'job-tracker.db');

const tables = (db) =>
    db
        .prepare("SELECT name FROM sqlite_schema WHERE type = 'table' ORDER BY name")
        .all()
        .map((row) => row.name);

try {
    const db = openDatabase(path);
    console.log('before:', db.pragma('user_version', { simple: true }), tables(db)); // before: 0 []

    migrate(db);
    console.log('after:', db.pragma('user_version', { simple: true }), tables(db));
    // after: 3 [ 'applications', 'sessions', 'users' ]

    migrate(db);
    console.log('again:', db.pragma('user_version', { simple: true })); // again: 3

    console.log(db.pragma('journal_mode', { simple: true })); // wal
    console.log(readdirSync(join(dir, 'data')));
    // [ 'job-tracker.db', 'job-tracker.db-shm', 'job-tracker.db-wal' ]
    db.close();
    console.log(readdirSync(join(dir, 'data'))); // [ 'job-tracker.db' ]

    // An in-memory database has no file to keep a log next to.
    const memory = openDatabase(':memory:');
    console.log(memory.pragma('journal_mode = WAL', { simple: true })); // memory
    memory.close();
} finally {
    rmSync(dir, { recursive: true, force: true });
}
