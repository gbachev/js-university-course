import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { listQuery } = await import(
    process.env.SOLUTIONS ? '../solutions/02-list-query.js' : './02-list-query.js'
);

const SELECT = 'SELECT * FROM applications WHERE user_id = ?';

test('no status and no sort: newest first', () => {
    assert.deepEqual(listQuery(7, {}), {
        sql: `${SELECT} ORDER BY created_at DESC, id DESC`,
        params: [7],
    });
});

test('a status adds a bound condition', () => {
    assert.deepEqual(listQuery(7, { status: 'offer' }), {
        sql: `${SELECT} AND status = ? ORDER BY created_at DESC, id DESC`,
        params: [7, 'offer'],
    });
});

test('each allowed sort has its own ORDER BY', () => {
    assert.equal(listQuery(7, { sort: 'newest' }).sql, `${SELECT} ORDER BY created_at DESC, id DESC`);
    assert.equal(listQuery(7, { sort: 'oldest' }).sql, `${SELECT} ORDER BY created_at ASC, id ASC`);
    assert.deepEqual(listQuery(3, { status: 'applied', sort: 'company' }), {
        sql: `${SELECT} AND status = ? ORDER BY company ASC, id ASC`,
        params: [3, 'applied'],
    });
});

test('SQL in the status stays a value and never reaches the SQL text', () => {
    const status = "offer' OR '1'='1";
    const { sql, params } = listQuery(7, { status });

    assert.equal(sql, `${SELECT} AND status = ? ORDER BY created_at DESC, id DESC`);
    assert.deepEqual(params, [7, status]);
});

test('an empty or null status is still a value', () => {
    assert.deepEqual(listQuery(7, { status: '' }).params, [7, '']);
    assert.deepEqual(listQuery(7, { status: null }).params, [7, null]);
});

test('a sort that is not on the list throws', () => {
    assert.throws(() => listQuery(7, { sort: 'salary' }), Error);
    assert.throws(() => listQuery(7, { sort: 'created_at' }), Error);
    assert.throws(() => listQuery(7, { sort: 'company; DROP TABLE users' }), Error);
    assert.throws(() => listQuery(7, { sort: 'NEWEST' }), Error);
});

test('names every object has are not sorts either', () => {
    assert.throws(() => listQuery(7, { sort: 'toString' }), Error);
    assert.throws(() => listQuery(7, { sort: '__proto__' }), Error);
    assert.throws(() => listQuery(7, { sort: 'constructor' }), Error);
});
