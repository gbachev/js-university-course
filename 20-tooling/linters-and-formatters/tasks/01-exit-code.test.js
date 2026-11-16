import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { lintExitCode } = await import(
    process.env.SOLUTIONS ? '../solutions/01-exit-code.js' : './01-exit-code.js'
);

const consoleWarning = { line: 12, rule: 'no-console', severity: 'warning' };
const looseEquality = { line: 9, rule: 'eqeqeq', severity: 'error' };

test('no problems exit with 0', () => {
    assert.equal(lintExitCode([]), 0);
});

test('one error exits with 1', () => {
    assert.equal(lintExitCode([consoleWarning, looseEquality]), 1);
});

test('warnings alone exit with 0', () => {
    assert.equal(lintExitCode([consoleWarning, consoleWarning]), 0);
});

test('more warnings than maxWarnings exit with 1', () => {
    assert.equal(lintExitCode([consoleWarning, consoleWarning], 1), 1);
    assert.equal(lintExitCode([consoleWarning], 0), 1);
});

test('as many warnings as maxWarnings still exit with 0', () => {
    assert.equal(lintExitCode([consoleWarning, consoleWarning], 2), 0);
});

test('an error exits with 1 even with room for warnings', () => {
    assert.equal(lintExitCode([looseEquality], 10), 1);
});
