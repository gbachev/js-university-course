import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { functionLabel } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-name-the-function.js'
        : './01-name-the-function.js'
);

test('a function declaration gives its name', () => {
    function saveOrder() {}
    assert.equal(functionLabel(saveOrder), 'saveOrder');
});

test('a named function expression gives its own name, not the variable name', () => {
    const handler = function sendInvoice() {};
    assert.equal(functionLabel(handler), 'sendInvoice');
});

test('an anonymous function assigned to a variable gives the variable name', () => {
    const cancelOrder = function() {};
    const refund = () => {};
    assert.equal(functionLabel(cancelOrder), 'cancelOrder');
    assert.equal(functionLabel(refund), 'refund');
});

test('an anonymous function passed directly is labeled anonymous', () => {
    assert.equal(functionLabel(function() {}), 'anonymous');
    assert.equal(functionLabel(() => {}), 'anonymous');
});
