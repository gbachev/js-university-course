import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countByStatus, filterByStatus } = await import(
    process.env.SOLUTIONS ? '../solutions/03-count-and-filter.js' : './03-count-and-filter.js'
);

const applications = [
    { id: 5, company: 'Initech', role: 'Developer', status: 'applied' },
    { id: 4, company: 'Globex', role: 'Frontend Developer', status: 'interview' },
    { id: 3, company: 'Acme', role: 'Developer', status: 'applied' },
    { id: 2, company: 'Umbrella', role: 'Tester', status: 'rejected' },
    { id: 1, company: 'Hooli', role: 'Developer', status: 'wishlist' },
];

test('counts every status, with 0 for the ones nobody has', () => {
    assert.deepEqual(countByStatus(applications), {
        all: 5,
        wishlist: 1,
        applied: 2,
        interview: 1,
        offer: 0,
        rejected: 1,
    });
});

test('an empty list counts 0 everywhere', () => {
    assert.deepEqual(countByStatus([]), {
        all: 0,
        wishlist: 0,
        applied: 0,
        interview: 0,
        offer: 0,
        rejected: 0,
    });
});

test('filters by one status and keeps the order', () => {
    assert.deepEqual(
        filterByStatus(applications, 'applied').map((application) => application.id),
        [5, 3],
    );
    assert.deepEqual(filterByStatus(applications, 'offer'), []);
});

test('the status all gives every application', () => {
    assert.deepEqual(filterByStatus(applications, 'all'), applications);
});

test('changes nothing it receives', () => {
    // A list of its own, newest first, so an earlier test cannot have changed it.
    const list = [
        { id: 3, company: 'Acme', role: 'Developer', status: 'wishlist' },
        { id: 2, company: 'Globex', role: 'Developer', status: 'applied' },
        { id: 1, company: 'Initech', role: 'Developer', status: 'offer' },
    ];
    const copy = structuredClone(list);

    assert.equal(countByStatus(list).all, 3);
    assert.equal(filterByStatus(list, 'applied').length, 1);
    assert.equal(filterByStatus(list, 'all').length, 3);

    assert.deepEqual(list, copy);
});
