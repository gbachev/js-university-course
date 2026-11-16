import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { sendNewsletters } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-newsletter-report.js'
        : './02-newsletter-report.js'
);

// A fake mail service: addresses without @ are rejected, the rest go out.
function send(email) {
    if (!email.includes('@')) {
        return Promise.reject(new Error('Invalid address'));
    }
    if (email.startsWith('full')) {
        return Promise.reject(new Error('Mailbox is full'));
    }
    return Promise.resolve(email);
}

test('every address that went out is in sent', async () => {
    const report = await sendNewsletters(
        ['john.doe@example.com', 'jane.doe@example.com'],
        send
    );
    assert.deepEqual(report, {
        sent: ['john.doe@example.com', 'jane.doe@example.com'],
        failed: [],
    });
});

test('a bad address goes to failed, with the error message', async () => {
    const report = await sendNewsletters(
        ['john.doe@example.com', 'sales.example.com', 'jane.doe@example.com'],
        send
    );
    assert.deepEqual(report, {
        sent: ['john.doe@example.com', 'jane.doe@example.com'],
        failed: [{ email: 'sales.example.com', reason: 'Invalid address' }],
    });
});

test('the report never rejects, even when every email fails', async () => {
    const report = await sendNewsletters(['sales.example.com', 'full@example.com'], send);
    assert.deepEqual(report, {
        sent: [],
        failed: [
            { email: 'sales.example.com', reason: 'Invalid address' },
            { email: 'full@example.com', reason: 'Mailbox is full' },
        ],
    });
});

test('every email is sent, all at once', async () => {
    const started = [];
    const pending = [];
    const slowSend = (email) => {
        started.push(email);
        return new Promise((resolve) => pending.push(() => resolve(email)));
    };
    const result = sendNewsletters(['a@example.com', 'b@example.com'], slowSend);
    // Both emails started before any of them went out.
    assert.deepEqual(started, ['a@example.com', 'b@example.com']);
    pending.forEach((finish) => finish());
    assert.deepEqual((await result).sent, ['a@example.com', 'b@example.com']);
});

test('an empty list gives an empty report', async () => {
    assert.deepEqual(await sendNewsletters([], send), { sent: [], failed: [] });
});
