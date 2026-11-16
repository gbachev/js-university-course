import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { readOrderRow } = await import(
    process.env.SOLUTIONS ? '../solutions/02-order-row.js' : './02-order-row.js'
);

test('we get the order id and the total of a row', () => {
    assert.deepEqual(readOrderRow('1001,2026-11-16,Laptop,1299.99'), {
        orderId: '1001',
        total: 1299.99,
    });
});

test('the total is a number, not a string', () => {
    assert.equal(typeof readOrderRow('1002,2026-11-17,Mouse,25').total, 'number');
});

test('the date and the product are not in the result', () => {
    assert.deepEqual(readOrderRow('1003,2026-11-18,Keyboard,79.5'), {
        orderId: '1003',
        total: 79.5,
    });
});
