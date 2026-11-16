import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { deliveryMessage } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-delivery-message.js'
        : './02-delivery-message.js'
);

test('pickup is ready in 0 days', () => {
    assert.equal(deliveryMessage('pickup'), 'Ready for pickup in 0 days');
});

test('express arrives in 2 days', () => {
    assert.equal(deliveryMessage('express'), 'Arrives in 2 days');
});

test('standard arrives in 5 days', () => {
    assert.equal(deliveryMessage('standard'), 'Arrives in 5 days');
});

test('an unknown method gets its own message', () => {
    assert.equal(deliveryMessage('drone'), 'Unknown delivery method');
});
