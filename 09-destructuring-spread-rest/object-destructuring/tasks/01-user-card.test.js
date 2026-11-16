import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getUserCard } = await import(
    process.env.SOLUTIONS ? '../solutions/01-user-card.js' : './01-user-card.js'
);

test('the card shows the name and the email', () => {
    assert.equal(
        getUserCard({ name: 'Jane Doe', email: 'jane@example.com' }),
        'Jane Doe (jane@example.com)'
    );
});

test('a user without an email gets no email on the card', () => {
    assert.equal(getUserCard({ name: 'John Smith' }), 'John Smith (no email)');
});

test('other properties of the user are not on the card', () => {
    const user = { id: 7, name: 'Maria Lopez', age: 35, email: 'maria@example.com' };

    assert.equal(getUserCard(user), 'Maria Lopez (maria@example.com)');
});
