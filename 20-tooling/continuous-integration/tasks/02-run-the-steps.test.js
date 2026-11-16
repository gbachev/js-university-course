import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { runJob } = await import(
    process.env.SOLUTIONS ? '../solutions/02-run-the-steps.js' : './02-run-the-steps.js'
);

const commands = ['npm ci', 'npm run lint', 'npm test', 'npm run build'];

test('when every step exits with 0, the job passes', () => {
    assert.deepEqual(runJob(commands, {}), {
        passed: true,
        ran: commands,
        failed: null,
        skipped: [],
    });
});

test('a failing lint skips the tests and the build', () => {
    assert.deepEqual(runJob(commands, { 'npm run lint': 1 }), {
        passed: false,
        ran: ['npm ci', 'npm run lint'],
        failed: 'npm run lint',
        skipped: ['npm test', 'npm run build'],
    });
});

test('a failing last step skips nothing', () => {
    assert.deepEqual(runJob(commands, { 'npm run build': 2 }), {
        passed: false,
        ran: commands,
        failed: 'npm run build',
        skipped: [],
    });
});

test('only the first failure counts', () => {
    const result = runJob(commands, { 'npm ci': 1, 'npm test': 1 });
    assert.equal(result.failed, 'npm ci');
    assert.deepEqual(result.ran, ['npm ci']);
});

test('an exit code of 0 in the map passes', () => {
    assert.equal(runJob(commands, { 'npm test': 0 }).passed, true);
});

test('a job without steps passes', () => {
    assert.deepEqual(runJob([], {}), { passed: true, ran: [], failed: null, skipped: [] });
});
