// SQL injection: a query built by gluing the input into the SQL text, next to the
// same query with a bound parameter. From the repository folder, after npm install
// in job-tracker/server:
//   node 25-our-second-project/database/examples/04-sql-injection.js
import { migrate, openDatabase } from '../../job-tracker/server/src/db.js';

const db = openDatabase(':memory:');
migrate(db);
const addUser = db.prepare(
    'INSERT INTO users (email, password_hash, created_at) VALUES (?, ?, ?)',
);
addUser.run('jane@example.com', 'hash-of-jane', '2026-11-23T10:00:00.000Z');
addUser.run('john@example.com', 'hash-of-john', '2026-11-23T11:00:00.000Z');

// What someone types into the email field of the log-in form.
const email = "nobody' OR '1'='1";

// Broken: the input becomes part of the SQL text.
const sql = `SELECT id, email FROM users WHERE email = '${email}'`;
console.log(sql);
// SELECT id, email FROM users WHERE email = 'nobody' OR '1'='1'
console.log(db.prepare(sql).all().map((user) => user.email));
// [ 'jane@example.com', 'john@example.com' ]

// Safe: the SQL text never changes, and the input travels as a value.
const query = 'SELECT id, email FROM users WHERE email = ?';
console.log(db.prepare(query).all(email)); // []

// A value full of SQL is just text to a bound parameter.
const company = "'); DROP TABLE applications; --";
const row = db
    .prepare(
        `INSERT INTO applications (user_id, company, role, created_at, updated_at)
         VALUES (@userId, @company, @role, @now, @now)
         RETURNING company`,
    )
    .get({ userId: 1, company, role: 'Developer', now: '2026-11-23T12:00:00.000Z' });
console.log(row); // { company: "'); DROP TABLE applications; --" }

db.close();
