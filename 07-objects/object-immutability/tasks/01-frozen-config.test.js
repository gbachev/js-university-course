import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createConfig } = await import(
    process.env.SOLUTIONS ? '../solutions/01-frozen-config.js' : './01-frozen-config.js'
);

test('the config has the api url and the retries', () => {
    assert.deepEqual(createConfig('https://api.example.com', 3), {
        apiUrl: 'https://api.example.com',
        retries: 3,
    });
});

test('the config is frozen', () => {
    assert.equal(Object.isFrozen(createConfig('https://api.example.com', 3)), true);
});

test('changing a value throws and keeps the old value', () => {
    const config = createConfig('https://api.example.com', 3);
    assert.throws(() => {
        config.retries = 10;
    }, TypeError);
    assert.equal(config.retries, 3);
});

test('adding or deleting a property throws', () => {
    const config = createConfig('https://api.example.com', 3);
    assert.throws(() => {
        config.timeout = 5000;
    }, TypeError);
    assert.throws(() => {
        delete config.apiUrl;
    }, TypeError);
});
