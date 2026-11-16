import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getCity } = await import(
    process.env.SOLUTIONS ? '../solutions/03-missing-address.js' : './03-missing-address.js'
);

test('we get the city of a user with an address', () => {
    const user = { name: 'Jane', address: { city: 'Sofia', zip: '1000' } };

    assert.equal(getCity(user), 'Sofia');
});

test('a user without an address does not throw', () => {
    assert.doesNotThrow(() => getCity({ name: 'John' }));
});

test('a user without an address is from an unknown city', () => {
    assert.equal(getCity({ name: 'John' }), 'Unknown');
});

test('an address without a city gives an unknown city', () => {
    assert.equal(getCity({ name: 'Maria', address: { zip: '1000' } }), 'Unknown');
});
