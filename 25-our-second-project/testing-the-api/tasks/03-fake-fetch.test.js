import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { fakeFetch } = await import(
    process.env.SOLUTIONS ? '../solutions/03-fake-fetch.js' : './03-fake-fetch.js'
);

const user = { id: 1, email: 'jane@example.com' };

test('answers a route with a real Response: its status, JSON body and Content-Type', async () => {
    const fetchFn = fakeFetch({
        'POST /api/auth/signup': { status: 201, body: { user } },
    });

    const response = await fetchFn('/api/auth/signup', { method: 'POST', headers: {} });

    assert.ok(response instanceof Response);
    assert.equal(response.status, 201);
    assert.equal(response.ok, true);
    assert.equal(response.headers.get('content-type'), 'application/json; charset=utf-8');
    assert.deepEqual(await response.json(), { user });
});

test('the method defaults to GET, and the status to 200', async () => {
    const fetchFn = fakeFetch({ 'GET /api/auth/me': { body: { user } } });

    const withoutOptions = await fetchFn('/api/auth/me');
    const withoutMethod = await fetchFn('/api/auth/me', { headers: {} });

    assert.equal(withoutOptions.status, 200);
    assert.equal(withoutMethod.status, 200);
    assert.deepEqual(await withoutMethod.json(), { user });
});

test('the method is part of the route', async () => {
    const fetchFn = fakeFetch({ 'GET /api/applications': { body: { applications: [] } } });

    const response = await fetchFn('/api/applications', { method: 'DELETE' });

    assert.equal(response.status, 404);
});

test('a route without a body answers with no body, such as a 204', async () => {
    const fetchFn = fakeFetch({ 'DELETE /api/applications/7': { status: 204 } });

    const response = await fetchFn('/api/applications/7', { method: 'DELETE', headers: {} });

    assert.equal(response.status, 204);
    assert.equal(response.body, null);
});

test('an error status still carries its JSON body', async () => {
    const fetchFn = fakeFetch({
        'POST /api/auth/login': { status: 401, body: { error: 'Wrong email or password' } },
    });

    const response = await fetchFn('/api/auth/login', { method: 'POST' });

    assert.equal(response.status, 401);
    assert.equal(response.ok, false);
    assert.deepEqual(await response.json(), { error: 'Wrong email or password' });
});

test('an unknown route answers a JSON 404 that names it', async () => {
    const fetchFn = fakeFetch({});

    const response = await fetchFn('/api/applications/9', { method: 'PATCH' });

    assert.equal(response.status, 404);
    assert.match(response.headers.get('content-type'), /^application\/json/);
    assert.deepEqual(await response.json(), { error: 'No route for PATCH /api/applications/9' });
});

test('the same route answers twice, with a body to read each time', async () => {
    const fetchFn = fakeFetch({ 'GET /api/auth/me': { body: { user } } });

    const first = await fetchFn('/api/auth/me');
    const second = await fetchFn('/api/auth/me');

    assert.deepEqual(await first.json(), { user });
    assert.deepEqual(await second.json(), { user });
});

test('fetchFn.calls records every call, in order', async () => {
    const fetchFn = fakeFetch({ 'GET /api/auth/me': { body: { user } } });
    const options = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' };

    await fetchFn('/api/auth/me');
    await fetchFn('/api/applications', options);

    assert.deepEqual(fetchFn.calls, [
        ['/api/auth/me', undefined],
        ['/api/applications', options],
    ]);
});
