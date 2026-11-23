import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { HttpError, toErrorResponse } = await import(
    process.env.SOLUTIONS ? '../solutions/03-to-error-response.js' : './03-to-error-response.js'
);

// The error express.json() throws for broken JSON, built the way body-parser does.
function parseError() {
    const error = new SyntaxError('Unexpected end of JSON input');
    error.type = 'entity.parse.failed';
    error.status = 400;
    error.statusCode = 400;
    error.body = '{"company":';
    return error;
}

test('an HttpError answers its status and message', () => {
    assert.deepEqual(toErrorResponse(new HttpError(404, 'No application with the id 7')), {
        status: 404,
        body: { error: 'No application with the id 7' },
    });
    assert.deepEqual(toErrorResponse(new HttpError(415, 'Send the body as JSON (application/json)')), {
        status: 415,
        body: { error: 'Send the body as JSON (application/json)' },
    });
});

test('a 400 from validation carries its fields', () => {
    const fields = { company: 'Fill in this field', url: 'Enter a full link that starts with https://' };
    assert.deepEqual(toErrorResponse(new HttpError(400, 'Check the highlighted fields', fields)), {
        status: 400,
        body: { error: 'Check the highlighted fields', fields },
    });
});

test('without fields, the body has no fields key at all', () => {
    const { body } = toErrorResponse(new HttpError(400, 'Unknown fields: userId'));
    assert.deepEqual(Object.keys(body), ['error']);
});

test('broken JSON answers 400 with our own message', () => {
    assert.deepEqual(toErrorResponse(parseError()), {
        status: 400,
        body: { error: 'The body is not valid JSON' },
    });
});

test('other 4xx errors of express.json() keep their status and message', () => {
    const tooLarge = Object.assign(new Error('request entity too large'), {
        type: 'entity.too.large',
        status: 413,
    });
    assert.deepEqual(toErrorResponse(tooLarge), {
        status: 413,
        body: { error: 'request entity too large' },
    });
});

test('a bug answers 500 and keeps its message to us', () => {
    for (const err of [
        new TypeError("Cannot read properties of undefined (reading 'id')"),
        new Error('SQLITE_CANTOPEN: unable to open database file /srv/data/job-tracker.db'),
        new HttpError(500, 'The database is down'),
        new HttpError(302, 'Moved'),
        'a thrown string',
        undefined,
    ]) {
        assert.deepEqual(
            toErrorResponse(err),
            { status: 500, body: { error: 'Something went wrong' } },
            String(err),
        );
    }
});
