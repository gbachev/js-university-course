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

test('a 400 lists a message for every field that is wrong', async () => {
    const { response, body } = await addApplication(app, cookie, {
        company: '   ',
        role: 'x'.repeat(201),
        status: 'ghosted',
        appliedOn: '2026-02-30',
        notes: 42,
    });

    assert.equal(response.status, 400);
    assert.deepEqual(body, {
        error: 'Check the highlighted fields',
        fields: {
            company: 'Fill in this field',
            role: 'Use at most 200 characters',
            status: 'Choose one of: wishlist, applied, interview, offer, rejected',
            appliedOn: 'Use a real date, written YYYY-MM-DD',
            notes: 'Notes must be text',
        },
    });
});

test('only http and https links are allowed', async () => {
    for (const url of [
        'javascript:alert(document.cookie)',
        'JavaScript:alert(1)',
        'data:text/html,<script>alert(1)</script>',
        'ftp://files.example.com',
        'jobs.example.com',
    ]) {
        const { response, body } = await addApplication(app, cookie, { url });
        assert.equal(response.status, 400, url);
        assert.deepEqual(body.fields, {
            url: 'Enter a full link that starts with https://',
        });
    }

    const { response } = await addApplication(app, cookie, {
        url: 'http://jobs.example.com/42',
    });
    assert.equal(response.status, 201);
});

test('notes may be long, but not longer than 5000 characters', async () => {
    const ok = await addApplication(app, cookie, { notes: 'x'.repeat(5000) });
    const tooLong = await addApplication(app, cookie, {
        notes: 'x'.repeat(5001),
    });

    assert.equal(ok.response.status, 201);
    assert.equal(tooLong.response.status, 400);
    assert.deepEqual(tooLong.body.fields, {
        notes: 'Use at most 5000 characters',
    });
});

test('PATCH checks only the fields it sends', async () => {
    await addApplication(app, cookie);
    const response = await send(`${app.url}/api/applications/1`, {
        method: 'PATCH',
        cookie,
        body: { role: '' },
    });

    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), {
        error: 'Check the highlighted fields',
        fields: { role: 'Fill in this field' },
    });
});

test('a body that is not an object answers 400', async () => {
    const response = await send(`${app.url}/api/applications`, {
        method: 'POST',
        cookie,
        body: ['Acme', 'Frontend Developer'],
    });

    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), {
        error: 'The body must be a JSON object',
    });
});
