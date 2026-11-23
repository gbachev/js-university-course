import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { linkFor } = await import(
    process.env.SOLUTIONS ? '../solutions/02-link-for.js' : './02-link-for.js'
);

test('an https or http link gives the href and the hostname', () => {
    assert.deepEqual(linkFor('https://jobs.example.com/42'), {
        href: 'https://jobs.example.com/42',
        text: 'jobs.example.com',
    });
    assert.deepEqual(linkFor('http://careers.example.org/frontend?ref=list'), {
        href: 'http://careers.example.org/frontend?ref=list',
        text: 'careers.example.org',
    });
});

test('the text is the hostname without the port', () => {
    assert.deepEqual(linkFor('http://localhost:5173/jobs'), {
        href: 'http://localhost:5173/jobs',
        text: 'localhost',
    });
});

test('the scheme counts in any case', () => {
    assert.deepEqual(linkFor('HTTPS://Jobs.Example.com/42'), {
        href: 'HTTPS://Jobs.Example.com/42',
        text: 'jobs.example.com',
    });
});

test('other schemes give null', () => {
    assert.equal(linkFor('javascript:alert(1)'), null);
    assert.equal(linkFor('JavaScript:alert(1)'), null);
    assert.equal(linkFor('data:text/html,hi'), null);
    assert.equal(linkFor('ftp://files.example.com'), null);
    assert.equal(linkFor('httpx://jobs.example.com'), null);
});

test('no link, or text that is not a full URL, gives null', () => {
    assert.equal(linkFor(null), null);
    assert.equal(linkFor(undefined), null);
    assert.equal(linkFor(''), null);
    assert.equal(linkFor('jobs.example.com'), null);
});
