import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createErrorHandler } = await import(
    process.env.SOLUTIONS ? '../solutions/02-one-message-only.js' : './02-one-message-only.js'
);

// A handler with two callbacks that remember what they were called with.
function setUp() {
    const reports = [];
    const messages = [];
    const handleError = createErrorHandler(
        (error) => reports.push(error),
        (message) => messages.push(message)
    );
    return { handleError, reports, messages };
}

test('the first error is reported and shows the message', () => {
    const { handleError, reports, messages } = setUp();
    const error = new Error('First');
    handleError(error);
    assert.deepEqual(reports, [error]);
    assert.deepEqual(messages, ['Something went wrong. Please reload.']);
});

test('every error is reported', () => {
    const { handleError, reports } = setUp();
    handleError(new Error('First'));
    handleError(new TypeError('Second'));
    handleError('Third');
    assert.equal(reports.length, 3);
    assert.equal(reports[2], 'Third');
});

test('three errors show the message only once', () => {
    const { handleError, messages } = setUp();
    handleError(new Error('First'));
    handleError(new Error('Second'));
    handleError(new Error('Third'));
    assert.equal(messages.length, 1);
});

test('each handler keeps its own count', () => {
    const first = setUp();
    const second = setUp();
    first.handleError(new Error('Checkout'));
    second.handleError(new Error('Profile'));
    assert.equal(first.messages.length, 1);
    assert.equal(second.messages.length, 1);
});
