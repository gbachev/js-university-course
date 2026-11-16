import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { notify } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-send-notification.js'
        : './03-send-notification.js'
);

function createUser() {
    return {
        name: 'Anna',
        settings: {
            notifier: {
                sent: [],
                send(text) {
                    this.sent[this.sent.length] = text;
                    return 'sent: ' + text;
                },
            },
        },
    };
}

test('sends the message and returns what send returns', () => {
    assert.equal(notify(createUser(), 'Your order shipped'), 'sent: Your order shipped');
});

test('send is called with the message', () => {
    const user = createUser();
    notify(user, 'Your order shipped');
    assert.deepEqual(user.settings.notifier.sent, ['Your order shipped']);
});

test('a user without settings gets not sent', () => {
    assert.equal(notify({ name: 'Ben' }, 'Hello'), 'not sent');
});

test('settings without a notifier gives not sent', () => {
    assert.equal(notify({ name: 'Ben', settings: {} }, 'Hello'), 'not sent');
});

test('a notifier without a send method gives not sent', () => {
    assert.equal(notify({ name: 'Ben', settings: { notifier: {} } }, 'Hello'), 'not sent');
});
