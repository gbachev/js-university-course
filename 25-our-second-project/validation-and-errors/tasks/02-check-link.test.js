import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { checkLink } = await import(
    process.env.SOLUTIONS ? '../solutions/02-check-link.js' : './02-check-link.js'
);

const ERROR = { error: 'Enter a full link that starts with https://' };

test('an http or https link is kept', () => {
    for (const link of [
        'https://jobs.example.com/42',
        'http://jobs.example.com/42',
        'HTTPS://JOBS.EXAMPLE.COM/42',
        'https://jobs.example.com/apply?id=42&source=gbachev#form',
    ]) {
        assert.deepEqual(checkLink(link), { value: link }, link);
    }
});

test('the spaces around a link are trimmed', () => {
    assert.deepEqual(checkLink('  https://jobs.example.com/42 \n'), {
        value: 'https://jobs.example.com/42',
    });
});

test('no link is null', () => {
    for (const value of [null, undefined, '']) {
        assert.deepEqual(checkLink(value), { value: null }, String(value));
    }
});

test('other schemes fail, in any case', () => {
    for (const link of [
        'javascript:alert(document.cookie)',
        'JavaScript:alert(1)',
        ' javascript:alert(1)',
        'data:text/html,<script>alert(1)</script>',
        'ftp://files.example.com',
        'mailto:jane@example.com',
        'httpx://jobs.example.com',
    ]) {
        assert.deepEqual(checkLink(link), ERROR, link);
    }
});

test('text that is not a full link fails', () => {
    for (const link of ['jobs.example.com', '/jobs/42', 'https://', 'just some text', '   ']) {
        assert.deepEqual(checkLink(link), ERROR, link);
    }
});

test('a link over 2000 characters fails', () => {
    const base = 'https://jobs.example.com/';
    const fits = base + 'x'.repeat(2000 - base.length);
    assert.deepEqual(checkLink(fits), { value: fits });
    assert.deepEqual(checkLink(fits + 'x'), ERROR);
});

test('a value that is not text fails', () => {
    for (const value of [42, true, {}, ['https://jobs.example.com']]) {
        assert.deepEqual(checkLink(value), ERROR, String(value));
    }
});
