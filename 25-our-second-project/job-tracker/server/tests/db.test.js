import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { migrate, openDatabase } from '../src/db.js';

const tableNames = (db) =>
    db
        .prepare(
            "SELECT name FROM sqlite_schema WHERE type = 'table' ORDER BY name",
        )
        .all()
        .map((row) => row.name);

test('migrate() creates the tables and records the last migration', () => {
    const db = openDatabase(':memory:');
    migrate(db);

    assert.deepEqual(tableNames(db), ['applications', 'sessions', 'users']);
    assert.equal(db.pragma('user_version', { simple: true }), 3);
    db.close();
});

test('running the migrations twice changes nothing and throws nothing', () => {
    const db = openDatabase(':memory:');
    migrate(db);
    migrate(db);

    assert.deepEqual(tableNames(db), ['applications', 'sessions', 'users']);
    assert.equal(db.pragma('user_version', { simple: true }), 3);
    db.close();
});

test('foreign keys are on: deleting a user deletes their applications', () => {
    const db = openDatabase(':memory:');
    migrate(db);
    const now = new Date().toISOString();
    const user = db
        .prepare(
            `INSERT INTO users (email, password_hash, created_at)
             VALUES ('ada@example.com', 'x', ?) RETURNING id`,
        )
        .get(now);
    db.prepare(
        `INSERT INTO applications (user_id, company, role, created_at, updated_at)
         VALUES (?, 'Acme', 'Developer', ?, ?)`,
    ).run(user.id, now, now);

    db.prepare('DELETE FROM users WHERE id = ?').run(user.id);

    assert.equal(
        db.prepare('SELECT COUNT(*) AS count FROM applications').get().count,
        0,
    );
    db.close();
});

test('a file database gets its folder created and keeps its data', () => {
    const dir = mkdtempSync(join(tmpdir(), 'job-tracker-'));
    const path = join(dir, 'data', 'test.db');
    try {
        const first = openDatabase(path);
        migrate(first);
        first
            .prepare(
                `INSERT INTO users (email, password_hash, created_at)
                 VALUES ('ada@example.com', 'x', '2026-11-23T10:00:00.000Z')`,
            )
            .run();
        first.close();

        const second = openDatabase(path);
        migrate(second);
        assert.equal(second.pragma('journal_mode', { simple: true }), 'wal');
        assert.equal(
            second.prepare('SELECT email FROM users').get().email,
            'ada@example.com',
        );
        second.close();
    } finally {
        rmSync(dir, { recursive: true, force: true });
    }
});
