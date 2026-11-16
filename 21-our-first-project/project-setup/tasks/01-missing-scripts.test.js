import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { missingScripts } = await import(
    process.env.SOLUTIONS ? '../solutions/01-missing-scripts.js' : './01-missing-scripts.js'
);

const required = ['dev', 'build', 'preview', 'test', 'lint', 'format'];

test('the package.json of create-vite misses the three scripts we add', () => {
    const pkg = {
        name: 'reading-list',
        scripts: { dev: 'vite', build: 'vite build', preview: 'vite preview' },
    };
    assert.deepEqual(missingScripts(pkg, required), ['test', 'lint', 'format']);
});

test('a package.json with every script misses nothing', () => {
    const pkg = {
        scripts: {
            dev: 'vite',
            build: 'vite build',
            preview: 'vite preview',
            test: 'vitest run',
            lint: 'eslint .',
            format: 'prettier --write .',
        },
    };
    assert.deepEqual(missingScripts(pkg, required), []);
});

test('a package.json without scripts misses all of them', () => {
    assert.deepEqual(missingScripts({ name: 'reading-list' }, ['dev', 'lint']), [
        'dev',
        'lint',
    ]);
});

test('the missing names come in the order of the required list', () => {
    const pkg = { scripts: { build: 'vite build' } };
    assert.deepEqual(missingScripts(pkg, ['test', 'build', 'dev']), ['test', 'dev']);
});

test('the package.json is not changed', () => {
    const pkg = { scripts: { dev: 'vite' } };
    missingScripts(pkg, ['dev', 'test']);
    assert.deepEqual(pkg, { scripts: { dev: 'vite' } });
});
