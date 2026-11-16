import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countVisits } = await import(
    process.env.SOLUTIONS ? '../solutions/02-page-visits.js' : './02-page-visits.js'
);

test('the result is a Map', () => {
    assert.equal(countVisits(['/home']) instanceof Map, true);
});

test('every page is counted', () => {
    const visits = countVisits(['/home', '/shop', '/home', '/home']);
    assert.equal(visits.get('/home'), 3);
    assert.equal(visits.get('/shop'), 1);
    assert.equal(visits.size, 2);
});

test('the pages keep the order of their first visit', () => {
    const visits = countVisits(['/shop', '/home', '/shop', '/about']);
    assert.deepEqual([...visits.keys()], ['/shop', '/home', '/about']);
});

test('an empty log gives an empty Map', () => {
    assert.equal(countVisits([]).size, 0);
});
