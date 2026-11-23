import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { ApiError, request } = await import(
    process.env.SOLUTIONS ? '../solutions/01-request.js' : './01-request.js'
);

// A real Response object, the kind fetch() gives back, with a JSON body.
const jsonResponse = (body, status = 200) =>
    new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });

// A fake fetch that answers with `response` and remembers how it was called.
function fakeFetch(response) {
    const calls = [];
    const fetchFn = async (...args) => {
        calls.push(args);
        return response;
    };
    return { fetchFn, calls };
}

// Runs request() and gives back the error it throws.
async function errorOf(promise) {
    try {
        await promise;
    } catch (error) {
        return error;
    }
    assert.fail('request() should have thrown');
}

test('a GET sends no body and no Content-Type, and gives back the JSON', async () => {
    const applications = [{ id: 1, company: 'Acme', role: 'Developer', status: 'applied' }];
    const { fetchFn, calls } = fakeFetch(jsonResponse({ applications }));

    const data = await request('GET', '/applications', undefined, fetchFn);

    assert.deepEqual(data, { applications });
    assert.deepEqual(calls, [['/api/applications', { method: 'GET', headers: {} }]]);
});

test('a body goes as JSON with its Content-Type', async () => {
    const user = { id: 1, email: 'jane@example.com' };
    const { fetchFn, calls } = fakeFetch(jsonResponse({ user }, 201));

    const data = await request('POST', '/auth/signup', { email: 'jane@example.com', password: 'correct horse' }, fetchFn);

    assert.deepEqual(data, { user });
    assert.deepEqual(calls, [
        [
            '/api/auth/signup',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: '{"email":"jane@example.com","password":"correct horse"}',
            },
        ],
    ]);
});

test('a 204 gives null, without reading the body', async () => {
    // Even with a JSON Content-Type, a 204 has no body for response.json() to read.
    const { fetchFn } = fakeFetch(
        new Response(null, { status: 204, headers: { 'Content-Type': 'application/json; charset=utf-8' } }),
    );

    assert.equal(await request('DELETE', '/applications/7', undefined, fetchFn), null);
});

test('a 400 becomes an ApiError with the status, the message and the fields', async () => {
    const fields = { company: 'Fill in this field', url: 'Enter a full link that starts with https://' };
    const { fetchFn } = fakeFetch(jsonResponse({ error: 'Check the highlighted fields', fields }, 400));

    const error = await errorOf(request('POST', '/applications', { company: '' }, fetchFn));

    assert.ok(error instanceof ApiError);
    assert.equal(error.status, 400);
    assert.equal(error.message, 'Check the highlighted fields');
    assert.deepEqual(error.fields, fields);
});

test('an error without fields gets empty fields', async () => {
    const { fetchFn } = fakeFetch(jsonResponse({ error: 'Log in to continue' }, 401));

    const error = await errorOf(request('GET', '/auth/me', undefined, fetchFn));

    assert.ok(error instanceof ApiError);
    assert.equal(error.status, 401);
    assert.equal(error.message, 'Log in to continue');
    assert.deepEqual(error.fields, {});
});

test('an error page that is not JSON gets a message of our own', async () => {
    const { fetchFn } = fakeFetch(
        new Response('', { status: 502, headers: { 'Content-Type': 'text/plain' } }),
    );

    const error = await errorOf(request('GET', '/applications', undefined, fetchFn));

    assert.ok(error instanceof ApiError);
    assert.equal(error.status, 502);
    assert.equal(error.message, 'The server answered 502');
    assert.deepEqual(error.fields, {});
});

test('an OK answer that is not JSON gives an empty object', async () => {
    const { fetchFn } = fakeFetch(
        new Response('<!doctype html><title>Hi</title>', { status: 200, headers: { 'Content-Type': 'text/html' } }),
    );

    assert.deepEqual(await request('GET', '/applications', undefined, fetchFn), {});
});

test('no answer at all is an ApiError with status 0', async () => {
    const fetchFn = async () => {
        throw new TypeError('Failed to fetch');
    };

    const error = await errorOf(request('GET', '/auth/me', undefined, fetchFn));

    assert.ok(error instanceof ApiError);
    assert.equal(error.status, 0);
    assert.equal(error.message, 'Could not reach the server. Try again.');
});
