import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { workflow } = await import(
    process.env.SOLUTIONS ? '../solutions/01-fix-the-workflow.js' : './01-fix-the-workflow.js'
);

const steps = workflow.jobs.check.steps;

test('it runs on a push to main and on pull requests', () => {
    assert.deepEqual(workflow.on.push, { branches: ['main'] });
    assert.ok('pull_request' in workflow.on);
});

test('the token may only read the code', () => {
    assert.deepEqual(workflow.permissions, { contents: 'read' });
});

test('Node comes from .nvmrc, with the npm cache', () => {
    const setupNode = steps.find((step) => step.uses === 'actions/setup-node@v7');
    assert.deepEqual(setupNode.with, { 'node-version-file': '.nvmrc', cache: 'npm' });
});

test('the code is checked out first, then Node is set up', () => {
    assert.deepEqual(steps[0], { uses: 'actions/checkout@v7' });
    assert.equal(steps[1].uses, 'actions/setup-node@v7');
});

test('the commands are npm ci, lint, test and build, in that order', () => {
    const commands = steps.filter((step) => step.run).map((step) => step.run);
    assert.deepEqual(commands, ['npm ci', 'npm run lint', 'npm test', 'npm run build']);
});

test('the job still runs on Ubuntu', () => {
    assert.equal(workflow.jobs.check['runs-on'], 'ubuntu-latest');
});
