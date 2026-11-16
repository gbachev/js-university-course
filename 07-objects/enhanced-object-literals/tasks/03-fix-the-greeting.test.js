import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createGreeter } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-fix-the-greeting.js'
        : './03-fix-the-greeting.js'
);

test('greet welcomes the user by name', () => {
    assert.equal(createGreeter('Anna').greet(), 'Welcome back, Anna');
});

test('every greeter uses its own name', () => {
    const anna = createGreeter('Anna');
    const ben = createGreeter('Ben');
    assert.equal(ben.greet(), 'Welcome back, Ben');
    assert.equal(anna.greet(), 'Welcome back, Anna');
});

test('greet uses the name the greeter has now', () => {
    const greeter = createGreeter('Anna');
    greeter.name = 'Anna Smith';
    assert.equal(greeter.greet(), 'Welcome back, Anna Smith');
});
