import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { formatPhone } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-no-phone-number.js'
        : './01-no-phone-number.js'
);

test('a phone number comes back as it is', () => {
    assert.equal(formatPhone('+359 88 123 4567'), '+359 88 123 4567');
});

test('null means there is no phone number', () => {
    assert.equal(formatPhone(null), 'No phone number');
});

test('a short phone number comes back as it is', () => {
    assert.equal(formatPhone('112'), '112');
});
