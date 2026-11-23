import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { runMigrations } = await import(
    process.env.SOLUTIONS ? '../solutions/01-run-migrations.js' : './01-run-migrations.js'
);

// A stand-in for a better-sqlite3 database. exec() runs the statements of a file one
// by one and records each in `statements`; a statement that says FAIL throws, like a
// typo in real SQL. transaction() undoes the statements and the version on an error,
// and recording a new user_version outside a transaction throws.
function fakeDb(userVersion = 0) {
    const db = {
        userVersion,
        statements: [],
        depth: 0,
        pragma(source, options) {
            if (source === 'user_version' && options?.simple) {
                return db.userVersion;
            }
            const match = /^user_version = (\d+)$/.exec(source);
            if (!match) {
                throw new Error(`The fake db does not know PRAGMA ${source}`);
            }
            if (db.depth === 0) {
                throw new Error('Record user_version inside the transaction of its file');
            }
            db.userVersion = Number(match[1]);
        },
        exec(sql) {
            for (const statement of sql.split(';').map((part) => part.trim()).filter(Boolean)) {
                if (statement.includes('FAIL')) {
                    throw new Error(`near "FAIL": syntax error`);
                }
                db.statements.push(statement);
            }
        },
        transaction(fn) {
            return () => {
                const before = { userVersion: db.userVersion, count: db.statements.length };
                db.depth += 1;
                try {
                    return fn();
                } catch (error) {
                    db.userVersion = before.userVersion;
                    db.statements.length = before.count;
                    throw error;
                } finally {
                    db.depth -= 1;
                }
            };
        },
    };
    return db;
}

const files = [
    { name: '001-create-users.sql', sql: 'CREATE TABLE users' },
    { name: '002-create-sessions.sql', sql: 'CREATE TABLE sessions' },
    { name: '003-create-applications.sql', sql: 'CREATE TABLE applications; CREATE INDEX applications_user_id' },
];

test('a new database runs every file in order and records the last number', () => {
    const db = fakeDb();

    assert.deepEqual(runMigrations(db, files), [
        '001-create-users.sql',
        '002-create-sessions.sql',
        '003-create-applications.sql',
    ]);
    assert.deepEqual(db.statements, [
        'CREATE TABLE users',
        'CREATE TABLE sessions',
        'CREATE TABLE applications',
        'CREATE INDEX applications_user_id',
    ]);
    assert.equal(db.userVersion, 3);
});

test('files the database has seen are skipped', () => {
    const db = fakeDb(2);

    assert.deepEqual(runMigrations(db, files), ['003-create-applications.sql']);
    assert.deepEqual(db.statements, ['CREATE TABLE applications', 'CREATE INDEX applications_user_id']);
    assert.equal(db.userVersion, 3);
});

test('a second run does nothing', () => {
    const db = fakeDb();
    runMigrations(db, files);

    assert.deepEqual(runMigrations(db, files), []);
    assert.equal(db.statements.length, 4);
    assert.equal(db.userVersion, 3);
});

test('the files run in the order of their number, not of their text', () => {
    const db = fakeDb();
    const unpadded = Object.freeze([
        Object.freeze({ name: '10-add-index.sql', sql: 'CREATE INDEX x' }),
        Object.freeze({ name: '2-add-notes.sql', sql: 'ALTER TABLE b' }),
        Object.freeze({ name: '1-create.sql', sql: 'CREATE TABLE a' }),
    ]);

    assert.deepEqual(runMigrations(db, unpadded), ['1-create.sql', '2-add-notes.sql', '10-add-index.sql']);
    assert.deepEqual(db.statements, ['CREATE TABLE a', 'ALTER TABLE b', 'CREATE INDEX x']);
    assert.equal(db.userVersion, 10);
    assert.equal(unpadded[0].name, '10-add-index.sql');
});

test('names that do not end in .sql are left out', () => {
    const db = fakeDb();
    const withReadme = [{ name: 'README.md', sql: 'Run these in order' }, ...files];

    assert.equal(runMigrations(db, withReadme).length, 3);
    assert.equal(db.statements.includes('Run these in order'), false);
});

test('a .sql name without a number throws', () => {
    const db = fakeDb();

    assert.throws(() => runMigrations(db, [{ name: 'create-users.sql', sql: 'CREATE TABLE users' }]), Error);
    assert.deepEqual(db.statements, []);
});

test('a file that fails is undone, and the files before it stay', () => {
    const db = fakeDb();
    const broken = [
        files[0],
        { name: '002-create-sessions.sql', sql: 'CREATE TABLE sessions; FAIL' },
        files[2],
    ];

    assert.throws(() => runMigrations(db, broken), /syntax error/);
    assert.deepEqual(db.statements, ['CREATE TABLE users']);
    assert.equal(db.userVersion, 1);
});
