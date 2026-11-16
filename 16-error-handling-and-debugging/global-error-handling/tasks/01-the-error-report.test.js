import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { buildReport } = await import(
    process.env.SOLUTIONS ? '../solutions/01-the-error-report.js' : './01-the-error-report.js'
);

test('an error gives its name and message, its stack and the page', () => {
    const error = new TypeError('order.pay is not a function');
    assert.deepEqual(buildReport(error, '/checkout'), {
        message: 'TypeError: order.pay is not a function',
        stack: error.stack,
        page: '/checkout'
    });
});

test('a string as the reason gives the string and no stack', () => {
    assert.deepEqual(buildReport('Payment failed', '/checkout'), {
        message: 'Payment failed',
        stack: undefined,
        page: '/checkout'
    });
});

test('a null error does not throw', () => {
    assert.deepEqual(buildReport(null, '/cart'), {
        message: 'null',
        stack: undefined,
        page: '/cart'
    });
});

test('an error of our own keeps its message', () => {
    const report = buildReport(new Error('Cart service is down'), '/cart');
    assert.equal(report.message, 'Error: Cart service is down');
    assert.equal(typeof report.stack, 'string');
});
