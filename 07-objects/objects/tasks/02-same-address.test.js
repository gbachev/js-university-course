import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isSameAddress } = await import(
    process.env.SOLUTIONS ? '../solutions/02-same-address.js' : './02-same-address.js'
);

test('two separate objects with the same values are the same address', () => {
    const shipping = { street: '12 Oak St', city: 'Springfield', zip: '12345' };
    const billing = { street: '12 Oak St', city: 'Springfield', zip: '12345' };
    assert.equal(isSameAddress(shipping, billing), true);
});

test('the same object is the same address', () => {
    const address = { street: '12 Oak St', city: 'Springfield', zip: '12345' };
    assert.equal(isSameAddress(address, address), true);
});

test('a different street is a different address', () => {
    const shipping = { street: '12 Oak St', city: 'Springfield', zip: '12345' };
    const billing = { street: '14 Oak St', city: 'Springfield', zip: '12345' };
    assert.equal(isSameAddress(shipping, billing), false);
});

test('a different city or zip is a different address', () => {
    const shipping = { street: '12 Oak St', city: 'Springfield', zip: '12345' };
    const otherCity = { street: '12 Oak St', city: 'Shelbyville', zip: '12345' };
    const otherZip = { street: '12 Oak St', city: 'Springfield', zip: '54321' };
    assert.equal(isSameAddress(shipping, otherCity), false);
    assert.equal(isSameAddress(shipping, otherZip), false);
});
