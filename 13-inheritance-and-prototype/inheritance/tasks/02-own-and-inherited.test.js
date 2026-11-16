import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { splitKeys } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-own-and-inherited.js'
        : './02-own-and-inherited.js'
);

test('splits own keys from the keys of the prototype', () => {
    const person = { greet() {} };
    const johnDoe = { __proto__: person, name: 'John Doe' };
    assert.deepEqual(splitKeys(johnDoe), { own: ['name'], inherited: ['greet'] });
});

test('an object literal without a custom prototype has no inherited keys', () => {
    assert.deepEqual(splitKeys({ id: 1, total: 20 }), { own: ['id', 'total'], inherited: [] });
});

test('collects inherited keys from every level of the chain', () => {
    const person = { greet() {} };
    const employee = { __proto__: person, company: 'Acme' };
    const janeDoe = { __proto__: employee, name: 'Jane Doe', role: 'developer' };
    assert.deepEqual(splitKeys(janeDoe), {
        own: ['name', 'role'],
        inherited: ['company', 'greet']
    });
});

test('an empty object with a prototype has only inherited keys', () => {
    const defaults = { theme: 'light' };
    assert.deepEqual(splitKeys({ __proto__: defaults }), { own: [], inherited: ['theme'] });
});
