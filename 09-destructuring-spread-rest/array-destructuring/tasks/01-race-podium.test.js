import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getPodium } = await import(
    process.env.SOLUTIONS ? '../solutions/01-race-podium.js' : './01-race-podium.js'
);

test('the first three runners get gold, silver and bronze', () => {
    assert.deepEqual(getPodium(['Ana', 'Ben', 'Chris']), {
        gold: 'Ana',
        silver: 'Ben',
        bronze: 'Chris',
    });
});

test('runners after the third place are not on the podium', () => {
    assert.deepEqual(getPodium(['Ana', 'Ben', 'Chris', 'Dan', 'Eva']), {
        gold: 'Ana',
        silver: 'Ben',
        bronze: 'Chris',
    });
});

test('with only two runners there is no bronze', () => {
    assert.deepEqual(getPodium(['Ana', 'Ben']), {
        gold: 'Ana',
        silver: 'Ben',
        bronze: undefined,
    });
});

test('a race nobody finished has an empty podium', () => {
    assert.deepEqual(getPodium([]), {
        gold: undefined,
        silver: undefined,
        bronze: undefined,
    });
});
