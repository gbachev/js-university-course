import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { addId } = await import(
    process.env.SOLUTIONS ? '../solutions/01-read-only-id.js' : './01-read-only-id.js'
);

test('the user gets the id and is returned', () => {
    const user = { name: 'Anna' };
    assert.equal(addId(user, 42), user);
    assert.equal(user.id, 42);
});

test('the id shows up in Object.keys()', () => {
    assert.deepEqual(Object.keys(addId({ name: 'Anna' }, 42)), ['name', 'id']);
});

test('changing the id throws and keeps the old id', () => {
    const user = addId({ name: 'Anna' }, 42);
    assert.throws(() => {
        user.id = 7;
    }, TypeError);
    assert.equal(user.id, 42);
});

test('deleting the id throws', () => {
    const user = addId({ name: 'Anna' }, 42);
    assert.throws(() => {
        delete user.id;
    }, TypeError);
});

test('the other properties can still change', () => {
    const user = addId({ name: 'Anna' }, 42);
    user.name = 'Anna Smith';
    assert.equal(user.name, 'Anna Smith');
});
