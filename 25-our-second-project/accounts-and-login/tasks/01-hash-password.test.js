import { mock, test } from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { syncBuiltinESMExports } from 'node:module';

// We watch crypto.timingSafeEqual before our code loads, so the spy is there even
// when the code takes the function at load time (import { timingSafeEqual }, or
// const { timingSafeEqual } = crypto). The spy still calls the real function.
const timingSafeEqualSpy = mock.method(crypto, 'timingSafeEqual');
syncBuiltinESMExports();

// Our code from this folder, or the solution with npm run test:solutions.
const { hashPassword, verifyPassword } = await import(
    process.env.SOLUTIONS ? '../solutions/01-hash-password.js' : './01-hash-password.js'
);

const SHAPE = /^scrypt:16384:8:5:[0-9a-f]{32}:[0-9a-f]{128}$/;

// Changes the last hex digit of one part of the stored text.
function tamper(stored, index) {
    const parts = stored.split(':');
    const part = parts[index];
    parts[index] = part.slice(0, -1) + (part.at(-1) === '0' ? '1' : '0');
    return parts.join(':');
}

test('the stored text has the shape scrypt:16384:8:5:salt:hash', async () => {
    assert.match(await hashPassword('correct horse'), SHAPE);
});

test('the same password gets a different salt and hash every time', async () => {
    const first = await hashPassword('correct horse');
    const second = await hashPassword('correct horse');

    assert.notEqual(first, second);
    assert.notEqual(first.split(':')[4], second.split(':')[4], 'the salt must be random');
});

test('the hash is scrypt of the password and the salt, with N 16384, r 8, p 5', async () => {
    const stored = await hashPassword('correct horse');
    const [, , , , salt, hash] = stored.split(':');
    const expected = crypto.scryptSync('correct horse', Buffer.from(salt, 'hex'), 64, {
        N: 16384,
        r: 8,
        p: 5,
    });

    assert.equal(hash, expected.toString('hex'));
});

test('the stored text never contains the password, as text or in hex', async () => {
    const password = 'correct horse';
    const stored = await hashPassword(password);

    assert.equal(stored.includes(password), false);
    assert.equal(stored.includes(Buffer.from(password).toString('hex')), false);
});

test('verifyPassword accepts the right password and refuses a wrong one', async () => {
    const stored = await hashPassword('correct horse');

    assert.equal(await verifyPassword('correct horse', stored), true);
    assert.equal(await verifyPassword('correct horsE', stored), false);
    assert.equal(await verifyPassword('correct horse ', stored), false);
    assert.equal(await verifyPassword('', stored), false);
});

test('a stored text with a changed hash or salt no longer matches', async () => {
    const stored = await hashPassword('correct horse');

    assert.equal(await verifyPassword('correct horse', tamper(stored, 5)), false, 'hash');
    assert.equal(await verifyPassword('correct horse', tamper(stored, 4)), false, 'salt');
});

test('verifyPassword uses the settings of the stored text, not fixed ones', async () => {
    // A hash from "before we raised the cost": N 1024, r 8, p 1.
    const salt = crypto.randomBytes(16);
    const hash = crypto.scryptSync('correct horse', salt, 64, { N: 1024, r: 8, p: 1 });
    const stored = `scrypt:1024:8:1:${salt.toString('hex')}:${hash.toString('hex')}`;

    assert.equal(await verifyPassword('correct horse', stored), true);
    assert.equal(await verifyPassword('wrong horse', stored), false);
});

test('verifyPassword reads the length of the stored hash, not a fixed 64 bytes', async () => {
    // A hash of 32 bytes (64 hex digits), with the usual settings.
    const salt = crypto.randomBytes(16);
    const hash = crypto.scryptSync('correct horse', salt, 32, { N: 16384, r: 8, p: 5 });
    const stored = `scrypt:16384:8:5:${salt.toString('hex')}:${hash.toString('hex')}`;

    assert.equal(await verifyPassword('correct horse', stored), true);
    assert.equal(await verifyPassword('wrong horse', stored), false);
});

test('verifyPassword compares the hashes with timingSafeEqual', async () => {
    const stored = await hashPassword('correct horse');
    timingSafeEqualSpy.mock.resetCalls();

    assert.equal(await verifyPassword('correct horse', stored), true);
    assert.equal(await verifyPassword('wrong horse', stored), false);
    assert.equal(timingSafeEqualSpy.mock.callCount(), 2);
});
