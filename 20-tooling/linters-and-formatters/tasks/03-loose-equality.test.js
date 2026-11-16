import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { findLooseEquality } = await import(
    process.env.SOLUTIONS ? '../solutions/03-loose-equality.js' : './03-loose-equality.js'
);

test('finds == on the first line', () => {
    assert.deepEqual(
        findLooseEquality('if (coupon == "SAVE10") {}'),
        [{ line: 1, column: 12 }],
    );
});

test('finds != too', () => {
    assert.deepEqual(findLooseEquality('if (qty != 0) {}'), [{ line: 1, column: 9 }]);
});

test('=== and !== are not reported', () => {
    assert.deepEqual(findLooseEquality('if (total === 0 || qty !== 1) {}'), []);
});

test('counts lines and columns like ESLint', () => {
    const source = [
        'export function cartTotal(items, coupon) {',
        '    let total = 0;',
        '    if (coupon == "SAVE10") {',
        '        total = total * 0.9;',
        '    }',
        '    return total;',
        '}',
    ].join('\n');
    assert.deepEqual(findLooseEquality(source), [{ line: 3, column: 16 }]);
});

test('reports every loose comparison, in order', () => {
    const source = 'const a = x == 1;\nconst b = y === 2 && z != 3;\nconst c = w == 4;';
    assert.deepEqual(findLooseEquality(source), [
        { line: 1, column: 13 },
        { line: 2, column: 24 },
        { line: 3, column: 13 },
    ]);
});

test('<= and >= are not reported', () => {
    assert.deepEqual(findLooseEquality('if (a <= 1 || b >= 2) {}'), []);
});

test('assignments and arrows are not comparisons', () => {
    assert.deepEqual(findLooseEquality('let total = 0;\nconst add = (a, b) => a + b;'), []);
});
