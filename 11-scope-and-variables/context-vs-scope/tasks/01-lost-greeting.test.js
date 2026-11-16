import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getGreeter } = await import(
    process.env.SOLUTIONS ? '../solutions/01-lost-greeting.js' : './01-lost-greeting.js'
);

function createUser(name) {
    return {
        name,
        greet() {
            return 'Hi, ' + this.name;
        },
    };
}

test('the greeter greets the user when we call it on its own', () => {
    const greet = getGreeter(createUser('Ada'));
    assert.equal(greet(), 'Hi, Ada');
});

test('the greeter keeps its user when another object calls it', () => {
    const greet = getGreeter(createUser('Ada'));
    const other = { name: 'Grace', greet };
    assert.equal(other.greet(), 'Hi, Ada');
});

test('two greeters keep two different users', () => {
    const greetAda = getGreeter(createUser('Ada'));
    const greetAlan = getGreeter(createUser('Alan'));
    assert.equal(greetAda(), 'Hi, Ada');
    assert.equal(greetAlan(), 'Hi, Alan');
});
