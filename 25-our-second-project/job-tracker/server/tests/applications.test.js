import assert from 'node:assert/strict';
import { afterEach, beforeEach, test } from 'node:test';
import { addApplication, send, signUp, startApp } from './helpers.js';

let app;
let cookie;
beforeEach(async () => {
    app = await startApp();
    cookie = await signUp(app);
});
afterEach(() => app.close());

const ISO_TIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

test('POST creates an application: 201, a Location and the saved row', async () => {
    const { response, body } = await addApplication(app, cookie, {
        status: 'applied',
        appliedOn: '2026-11-20',
        url: 'https://jobs.example.com/42',
        notes: 'Referred by John.\nFollow up on Monday.',
    });

    assert.equal(response.status, 201);
    assert.equal(response.headers.get('location'), '/api/applications/1');
    const { createdAt, updatedAt, ...rest } = body.application;
    assert.deepEqual(rest, {
        id: 1,
        company: 'Acme',
        role: 'Frontend Developer',
        status: 'applied',
        appliedOn: '2026-11-20',
        url: 'https://jobs.example.com/42',
        notes: 'Referred by John.\nFollow up on Monday.',
    });
    assert.match(createdAt, ISO_TIME);
    assert.equal(updatedAt, createdAt);
});

test('fields left out get their defaults, and text is trimmed', async () => {
    const { body } = await addApplication(app, cookie, {
        company: '  Acme  ',
        url: '',
    });

    assert.equal(body.application.company, 'Acme');
    assert.equal(body.application.status, 'wishlist');
    assert.equal(body.application.appliedOn, null);
    assert.equal(body.application.url, null);
    assert.equal(body.application.notes, '');
});

test('GET lists the applications, newest first, and filters by status', async () => {
    await addApplication(app, cookie, { company: 'Acme', status: 'applied' });
    await addApplication(app, cookie, { company: 'Globex', status: 'offer' });

    const all = await send(`${app.url}/api/applications`, { cookie });
    assert.equal(all.status, 200);
    const { applications } = await all.json();
    assert.deepEqual(
        applications.map((item) => item.company),
        ['Globex', 'Acme'],
    );

    const offers = await send(`${app.url}/api/applications?status=offer`, {
        cookie,
    });
    const body = await offers.json();
    assert.deepEqual(
        body.applications.map((item) => item.company),
        ['Globex'],
    );
});

test('GET with a status that does not exist answers 400', async () => {
    const response = await send(`${app.url}/api/applications?status=ghosted`, {
        cookie,
    });

    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), {
        error: 'status must be one of: wishlist, applied, interview, offer, rejected',
    });
});

test('GET /:id answers with one application', async () => {
    await addApplication(app, cookie);
    const response = await send(`${app.url}/api/applications/1`, { cookie });

    assert.equal(response.status, 200);
    assert.equal((await response.json()).application.company, 'Acme');
});

test('PATCH changes only the fields it sends', async () => {
    await addApplication(app, cookie, { notes: 'Keep me' });
    const response = await send(`${app.url}/api/applications/1`, {
        method: 'PATCH',
        cookie,
        body: { status: 'interview', appliedOn: '2026-11-21' },
    });

    assert.equal(response.status, 200);
    const { application } = await response.json();
    assert.equal(application.status, 'interview');
    assert.equal(application.appliedOn, '2026-11-21');
    assert.equal(application.company, 'Acme');
    assert.equal(application.notes, 'Keep me');
    assert.ok(application.updatedAt >= application.createdAt);
});

test('PATCH can clear the date and the link with null', async () => {
    await addApplication(app, cookie, {
        appliedOn: '2026-11-20',
        url: 'https://jobs.example.com/42',
    });
    const response = await send(`${app.url}/api/applications/1`, {
        method: 'PATCH',
        cookie,
        body: { appliedOn: null, url: null },
    });

    const { application } = await response.json();
    assert.equal(application.appliedOn, null);
    assert.equal(application.url, null);
});

test('PATCH refuses fields that an application does not have', async () => {
    await addApplication(app, cookie);
    const response = await send(`${app.url}/api/applications/1`, {
        method: 'PATCH',
        cookie,
        body: { status: 'offer', userId: 2 },
    });

    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), {
        error: 'Unknown fields: userId',
    });
});

test('DELETE answers 204, then the application is gone', async () => {
    await addApplication(app, cookie);
    const response = await send(`${app.url}/api/applications/1`, {
        method: 'DELETE',
        cookie,
    });

    assert.equal(response.status, 204);
    assert.equal(await response.text(), '');
    const again = await send(`${app.url}/api/applications/1`, { cookie });
    assert.equal(again.status, 404);
});

test('an id that is not a whole number answers 404', async () => {
    for (const id of ['abc', '1.5', '-1', '1e3']) {
        const response = await send(`${app.url}/api/applications/${id}`, {
            cookie,
        });
        assert.equal(response.status, 404, id);
        assert.deepEqual(await response.json(), {
            error: `No application with the id ${id}`,
        });
    }
});

test("another user's application is 404 for every method, and not in their list", async () => {
    await addApplication(app, cookie, { company: 'Acme' });
    const otherCookie = await signUp(app, 'john@example.com');
    const url = `${app.url}/api/applications/1`;

    const read = await send(url, { cookie: otherCookie });
    const change = await send(url, {
        method: 'PATCH',
        cookie: otherCookie,
        body: { company: 'Mine now' },
    });
    const remove = await send(url, { method: 'DELETE', cookie: otherCookie });
    const list = await send(`${app.url}/api/applications`, {
        cookie: otherCookie,
    });

    assert.equal(read.status, 404);
    assert.equal(change.status, 404);
    assert.equal(remove.status, 404);
    assert.deepEqual(await list.json(), { applications: [] });

    // And Jane's application is still there, unchanged.
    const own = await send(url, { cookie });
    assert.equal((await own.json()).application.company, 'Acme');
});

test('the applications need a logged-in user: 401 without a cookie', async () => {
    const response = await send(`${app.url}/api/applications`);

    assert.equal(response.status, 401);
    assert.equal(
        response.headers.get('www-authenticate'),
        'Session realm="job-tracker"',
    );
});
