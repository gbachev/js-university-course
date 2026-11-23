import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { mergePatch } = await import(
    process.env.SOLUTIONS ? '../solutions/03-merge-patch.js' : './03-merge-patch.js'
);

const current = () => ({
    id: 1,
    company: 'Acme',
    role: 'Developer',
    status: 'applied',
    appliedOn: '2026-11-20',
    url: 'https://jobs.example.com/42',
    notes: 'Ask about the team.',
    createdAt: '2026-11-23T10:00:00.000Z',
    updatedAt: '2026-11-23T10:00:00.000Z',
});

test('only the fields sent change', () => {
    assert.deepEqual(mergePatch(current(), { status: 'interview', notes: 'Tuesday 10:00' }), {
        ...current(),
        status: 'interview',
        notes: 'Tuesday 10:00',
    });
});

test('every editable field can change', () => {
    const changes = {
        company: 'Globex',
        role: 'Front-End Developer',
        status: 'offer',
        appliedOn: '2026-11-21',
        url: 'https://globex.example.com/jobs/7',
        notes: '',
    };

    assert.deepEqual(mergePatch(current(), changes), { ...current(), ...changes });
});

test('null clears a field, and no changes gives a copy', () => {
    const cleared = mergePatch(current(), { appliedOn: null, url: null });
    assert.equal(cleared.appliedOn, null);
    assert.equal(cleared.url, null);
    assert.equal(cleared.company, 'Acme');

    const same = mergePatch(current(), {});
    assert.deepEqual(same, current());
});

test('fields a user cannot edit throw, and the error names them', () => {
    for (const name of ['id', 'userId', 'user_id', 'createdAt', 'updatedAt', 'compnay']) {
        assert.throws(() => mergePatch(current(), { status: 'offer', [name]: 2 }), (error) => {
            assert.ok(error instanceof Error, name);
            assert.match(error.message, new RegExp(name), name);
            return true;
        });
    }
});

test('names every object inherits are not fields either', () => {
    for (const body of ['{"constructor":"x"}', '{"toString":"x"}', '{"__proto__":{"status":"offer"}}']) {
        assert.throws(() => mergePatch(current(), JSON.parse(body)), Error, body);
    }
});

test('current and changes stay as they were, even when it throws', () => {
    const original = current();
    const changes = { status: 'offer' };
    const merged = mergePatch(original, changes);

    assert.notEqual(merged, original);
    assert.deepEqual(original, current());
    assert.deepEqual(changes, { status: 'offer' });

    assert.throws(() => mergePatch(original, { status: 'offer', id: 9 }));
    assert.deepEqual(original, current());
});
