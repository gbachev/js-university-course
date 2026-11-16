import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { moduleSystem } = await import(
    process.env.SOLUTIONS ? '../solutions/01-module-system.js' : './01-module-system.js'
);

test('a .mjs file is always an ES module', () => {
    assert.equal(moduleSystem('prices.mjs', 'commonjs'), 'module');
    assert.equal(moduleSystem('prices.mjs', undefined), 'module');
});

test('a .cjs file is always CommonJS', () => {
    assert.equal(moduleSystem('report.cjs', 'module'), 'commonjs');
    assert.equal(moduleSystem('report.cjs', undefined), 'commonjs');
});

test('a .js file follows "type": "module"', () => {
    assert.equal(moduleSystem('app.js', 'module'), 'module');
});

test('a .js file follows "type": "commonjs"', () => {
    assert.equal(moduleSystem('app.js', 'commonjs'), 'commonjs');
});

test('a .js file without a type field is CommonJS', () => {
    assert.equal(moduleSystem('app.js', undefined), 'commonjs');
});

test('only the last extension counts', () => {
    assert.equal(moduleSystem('eslint.config.mjs', 'commonjs'), 'module');
    assert.equal(moduleSystem('jest.config.cjs.js', 'module'), 'module');
});
