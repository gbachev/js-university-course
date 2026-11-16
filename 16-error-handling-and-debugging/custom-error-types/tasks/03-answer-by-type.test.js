import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const {
    ValidationError,
    EmailTakenError,
    NotFoundError,
    PaymentError,
    respond
} = await import(
    process.env.SOLUTIONS ? '../solutions/03-answer-by-type.js' : './03-answer-by-type.js'
);

test('a handler that works gives a 200 with its data', () => {
    assert.deepEqual(respond(() => 'ok'), { status: 200, data: 'ok' });
});

test('a ValidationError gives a 400 with the field', () => {
    const answer = respond(() => {
        throw new ValidationError('Email is required', 'email');
    });
    assert.deepEqual(answer, { status: 400, field: 'email' });
});

test('a child of ValidationError is answered like a ValidationError', () => {
    const answer = respond(() => {
        throw new EmailTakenError('Email is already registered', 'email');
    });
    assert.deepEqual(answer, { status: 400, field: 'email' });
});

test('a NotFoundError gives a 404 with its message', () => {
    const answer = respond(() => {
        throw new NotFoundError('Product sku-7 not found');
    });
    assert.deepEqual(answer, { status: 404, message: 'Product sku-7 not found' });
});

test('a PaymentError gives its own statusCode, 502', () => {
    const answer = respond(() => {
        throw new PaymentError('Card declined');
    });
    assert.deepEqual(answer, { status: 502, message: 'Card declined' });
});

test('an error that is not ours, like a TypeError from a bug, is rethrown', () => {
    const bug = new TypeError('Cannot read properties of null');
    assert.throws(
        () => respond(() => {
            throw bug;
        }),
        (error) => error === bug
    );
});
