import { test, mock } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { ConsoleLogger, Checkout } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-compose-the-logger.js'
        : './03-compose-the-logger.js'
);

function createFakeLogger() {
    return {
        messages: [],
        log(message) {
            this.messages.push(message);
        }
    };
}

test('pay returns paid', () => {
    assert.equal(new Checkout(createFakeLogger()).pay(20), 'paid');
});

test('pay logs the amount to the logger we pass in', () => {
    const logger = createFakeLogger();
    const checkout = new Checkout(logger);
    checkout.pay(20);
    checkout.pay(5.5);
    assert.deepEqual(logger.messages, ['Paid 20.00 EUR', 'Paid 5.50 EUR']);
});

test('the console logger still prints to the console', () => {
    const log = mock.method(console, 'log', () => {});
    try {
        new Checkout(new ConsoleLogger()).pay(12);
        assert.deepEqual(log.mock.calls[0].arguments, ['Paid 12.00 EUR']);
    } finally {
        log.mock.restore();
    }
});

test('a checkout is no longer a logger', () => {
    const checkout = new Checkout(createFakeLogger());
    assert.equal(checkout instanceof ConsoleLogger, false);
    assert.equal(checkout.log, undefined);
});

test('the logger stays private', () => {
    assert.deepEqual(Object.keys(new Checkout(createFakeLogger())), []);
});
