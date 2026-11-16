import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { AppError, ImportError, importOrders } = await import(
    process.env.SOLUTIONS ? '../solutions/02-import-error.js' : './02-import-error.js'
);

test('valid JSON gives the orders', () => {
    assert.deepEqual(importOrders('[{"id":1},{"id":2}]'), [{ id: 1 }, { id: 2 }]);
});

test('broken JSON throws an ImportError with a clear message', () => {
    assert.throws(() => importOrders('[{id: 1}]'), {
        name: 'ImportError',
        message: 'Could not import the orders'
    });
});

test('the ImportError has a statusCode of 422 and is an AppError', () => {
    assert.throws(
        () => importOrders('[{id: 1}]'),
        (error) => error instanceof ImportError &&
            error instanceof AppError &&
            error.statusCode === 422
    );
});

test('the original SyntaxError is kept as the cause', () => {
    assert.throws(
        () => importOrders(''),
        (error) => error.cause instanceof SyntaxError
    );
});
