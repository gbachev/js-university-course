import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { packageJson } = await import(
    process.env.SOLUTIONS ? '../solutions/01-tidy-package-json.js' : './01-tidy-package-json.js'
);

test('nanoid is the only dependency', () => {
    assert.deepEqual(packageJson.dependencies, { nanoid: '^6.0.2' });
});

test('Vite and Vitest are dev dependencies', () => {
    assert.deepEqual(packageJson.devDependencies, { vite: '^8.3.8', vitest: '^5.1.0' });
});

test('the project is private and uses ES modules', () => {
    assert.equal(packageJson.private, true);
    assert.equal(packageJson.type, 'module');
});

test('the old scripts stay as they were', () => {
    assert.equal(packageJson.scripts.dev, 'vite');
    assert.equal(packageJson.scripts.build, 'vite build');
    assert.equal(packageJson.scripts.test, 'vitest run');
});

test('the check script runs the tests and then the build', () => {
    assert.equal(packageJson.scripts.check, 'npm test && npm run build');
});

test('name and version stay the same', () => {
    assert.equal(packageJson.name, 'reading-list');
    assert.equal(packageJson.version, '1.0.0');
});
