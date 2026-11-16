import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { OutOfStockError } = await import(
    process.env.SOLUTIONS ? '../solutions/01-out-of-stock.js' : './01-out-of-stock.js'
);

test('the error has its own name', () => {
    assert.equal(new OutOfStockError('sku-7', 2).name, 'OutOfStockError');
});

test('the name and the message show up in the log line', () => {
    const error = new OutOfStockError('sku-7', 2);
    assert.equal(String(error), 'OutOfStockError: Only 2 left of sku-7');
});

test('the sku and the available amount are kept as fields', () => {
    const error = new OutOfStockError('sku-42', 0);
    assert.equal(error.sku, 'sku-42');
    assert.equal(error.available, 0);
});

test('it is still an Error', () => {
    const error = new OutOfStockError('sku-7', 2);
    assert.ok(error instanceof Error);
    assert.equal(typeof error.stack, 'string');
});

test('it can be thrown and caught by its class', () => {
    assert.throws(() => {
        throw new OutOfStockError('sku-1', 5);
    }, OutOfStockError);
});
