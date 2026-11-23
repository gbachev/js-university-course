// The rules in the CREATE TABLE statements at work: NOT NULL, UNIQUE, CHECK and a
// FOREIGN KEY with ON DELETE CASCADE. Each broken rule throws a SqliteError with a
// code. From the repository folder, after npm install in job-tracker/server:
//   node 25-our-second-project/database/examples/02-constraints.js
import { migrate, openDatabase } from '../../job-tracker/server/src/db.js';

const db = openDatabase(':memory:');
migrate(db);
const now = '2026-11-23T10:00:00.000Z';

const addUser = db.prepare(
    'INSERT INTO users (email, password_hash, created_at) VALUES (?, ?, ?)',
);
const addApplication = db.prepare(
    `INSERT INTO applications (user_id, company, role, status, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?)`,
);

function attempt(label, fn) {
    try {
        fn();
        console.log(`${label}: saved`);
    } catch (error) {
        console.log(`${label}: ${error.code} - ${error.message}`);
    }
}

addUser.run('jane@example.com', 'not-a-real-hash', now);

attempt('NOT NULL', () => addUser.run('john@example.com', null, now));
attempt('UNIQUE', () => addUser.run('jane@example.com', 'another-hash', now));
attempt('CHECK', () => addApplication.run(1, 'Acme', 'Developer', 'ghosted', now, now));
attempt('FOREIGN KEY', () => addApplication.run(99, 'Acme', 'Developer', 'applied', now, now));

// ON DELETE CASCADE: deleting the user deletes their applications too.
addApplication.run(1, 'Acme', 'Developer', 'applied', now, now);
db.prepare('DELETE FROM users WHERE id = ?').run(1);
console.log(db.prepare('SELECT COUNT(*) AS count FROM applications').get()); // { count: 0 }

// SQLite itself starts every connection with foreign keys off. better-sqlite3
// builds its copy of SQLite with them on, and db.js switches them on anyway.
console.log(db.pragma('foreign_keys', { simple: true })); // 1
db.pragma('foreign_keys = OFF');
attempt('FOREIGN KEY, switched off', () =>
    addApplication.run(99, 'Acme', 'Developer', 'applied', now, now),
);

db.close();
