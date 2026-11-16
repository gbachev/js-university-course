import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { finalRules } = await import(
    process.env.SOLUTIONS ? '../solutions/02-final-rules.js' : './02-final-rules.js'
);

test('rules from every entry are collected', () => {
    const configs = [
        { rules: { 'no-undef': 'error' } },
        { rules: { 'no-console': 'warn' } },
    ];
    assert.deepEqual(finalRules(configs), { 'no-undef': 'error', 'no-console': 'warn' });
});

test('a later entry overrides an earlier one', () => {
    const configs = [{ rules: { eqeqeq: 'warn' } }, { rules: { eqeqeq: 'error' } }];
    assert.deepEqual(finalRules(configs), { eqeqeq: 'error' });
});

test('an array setting keeps only its severity', () => {
    const configs = [{ rules: { eqeqeq: ['error', 'always'] } }];
    assert.deepEqual(finalRules(configs), { eqeqeq: 'error' });
});

test('a Prettier-like entry last switches off a layout rule', () => {
    const configs = [
        { ignores: ['dist'] },
        { rules: { indent: ['error', 2], 'prefer-const': 'error' } },
        { languageOptions: { ecmaVersion: 'latest' } },
        { rules: { indent: 'off' } },
    ];
    assert.deepEqual(finalRules(configs), { indent: 'off', 'prefer-const': 'error' });
});

test('no rules give an empty object', () => {
    assert.deepEqual(finalRules([]), {});
    assert.deepEqual(finalRules([{ ignores: ['dist'] }]), {});
});

test('the given configs are not changed', () => {
    const configs = [
        { rules: { eqeqeq: ['error', 'always'] } },
        { rules: { eqeqeq: 'off' } },
    ];
    finalRules(configs);
    assert.deepEqual(configs, [
        { rules: { eqeqeq: ['error', 'always'] } },
        { rules: { eqeqeq: 'off' } },
    ]);
});
