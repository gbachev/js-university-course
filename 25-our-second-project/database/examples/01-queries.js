// The statements the app needs, on a fresh database in memory: INSERT, SELECT with
// WHERE and ORDER BY, UPDATE and DELETE. It uses the app's own db.js, so first run
// npm install in 25-our-second-project/job-tracker/server. Then, from the
// repository folder:
//   node 25-our-second-project/database/examples/01-queries.js
import { migrate, openDatabase } from '../../job-tracker/server/src/db.js';

const db = openDatabase(':memory:');
migrate(db);
const now = '2026-11-23T10:00:00.000Z';

// INSERT INTO names the columns, and VALUES gives one value for each, in the same
// order. run() is for a statement that changes rows.
const addUser = db.prepare(
    'INSERT INTO users (email, password_hash, created_at) VALUES (?, ?, ?)',
);
console.log(addUser.run('john@example.com', 'not-a-real-hash', now));
// { changes: 1, lastInsertRowid: 1 }

const addApplication = db.prepare(
    `INSERT INTO applications (user_id, company, role, status, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?)`,
);
addApplication.run(1, 'Acme', 'Developer', 'applied', '2026-11-21T10:00:00.000Z', now);
addApplication.run(1, 'Globex', 'Front-End Developer', 'wishlist', '2026-11-22T10:00:00.000Z', now);

// all() gives every matching row in an array, get() the first row or undefined.
const list = db.prepare(
    `SELECT id, company, status FROM applications
     WHERE user_id = ?
     ORDER BY created_at DESC, id DESC`,
);
console.log(list.all(1).map((row) => row.company)); // [ 'Globex', 'Acme' ]
const one = db.prepare('SELECT company FROM applications WHERE id = ?');
console.log(one.get(1)); // { company: 'Acme' }
console.log(one.get(99)); // undefined

// UPDATE ... SET changes columns of the rows that WHERE matches, DELETE FROM
// removes them. changes says how many rows that was.
const update = db.prepare('UPDATE applications SET status = ? WHERE id = ? AND user_id = ?');
console.log(update.run('interview', 1, 1).changes); // 1
console.log(update.run('interview', 1, 2).changes); // 0: application 1 is not user 2's
const remove = db.prepare('DELETE FROM applications WHERE id = ? AND user_id = ?');
console.log(remove.run(2, 1).changes); // 1
console.log(remove.run(2, 1).changes); // 0: it is gone already
console.log(list.all(1)); // [ { id: 1, company: 'Acme', status: 'interview' } ]

db.close();
