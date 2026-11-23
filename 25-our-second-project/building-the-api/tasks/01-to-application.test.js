import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { toApplication } = await import(
    process.env.SOLUTIONS ? '../solutions/01-to-application.js' : './01-to-application.js'
);

const row = () => ({
    id: 1,
    user_id: 7,
    company: 'Acme',
    role: 'Developer',
    status: 'applied',
    applied_on: '2026-11-20',
    url: 'https://jobs.example.com/42',
    notes: 'Ask about the team.',
    created_at: '2026-11-23T10:00:00.000Z',
    updated_at: '2026-11-23T11:30:00.000Z',
});

test('the columns become camelCase fields', () => {
    assert.deepEqual(toApplication(row()), {
        id: 1,
        company: 'Acme',
        role: 'Developer',
        status: 'applied',
        appliedOn: '2026-11-20',
        url: 'https://jobs.example.com/42',
        notes: 'Ask about the team.',
        createdAt: '2026-11-23T10:00:00.000Z',
        updatedAt: '2026-11-23T11:30:00.000Z',
    });
});

test('the fields come in the order the API sends them', () => {
    assert.deepEqual(Object.keys(toApplication(row())), [
        'id',
        'company',
        'role',
        'status',
        'appliedOn',
        'url',
        'notes',
        'createdAt',
        'updatedAt',
    ]);
});

test('user_id is left out, under either name', () => {
    const application = toApplication(row());

    assert.equal(Object.hasOwn(application, 'user_id'), false);
    assert.equal(Object.hasOwn(application, 'userId'), false);
});

test('a column we do not know is left out', () => {
    const application = toApplication({ ...row(), salary_note: 'Ask for more' });

    assert.equal(Object.keys(application).length, 9);
    assert.equal(Object.hasOwn(application, 'salary_note'), false);
    assert.equal(Object.hasOwn(application, 'salaryNote'), false);
});

test('null and empty values are kept, not dropped', () => {
    const application = toApplication({ ...row(), applied_on: null, url: null, notes: '' });

    assert.equal(application.appliedOn, null);
    assert.equal(application.url, null);
    assert.equal(application.notes, '');
    assert.equal(Object.keys(application).length, 9);
});

test('the row stays as it was', () => {
    const original = row();
    const application = toApplication(original);

    assert.notEqual(application, original);
    assert.equal(application.appliedOn, '2026-11-20');
    assert.deepEqual(original, row());
});
