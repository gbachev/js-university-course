import { randomBytes, scrypt, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';

// scrypt is slow on purpose, so guessing passwords from a stolen hash is slow too.
// promisify() turns its callback into a promise we can await.
const scryptAsync = promisify(scrypt);

// The cost settings. OWASP's Password Storage Cheat Sheet gives five settings with
// the same minimum strength; N = 2^14, r = 8, p = 5 is the one that needs 16 MB of
// memory per hash, where N = 2^17, p = 1 needs 128 MB and more than Node allows
// by default.
const COST = { N: 16384, r: 8, p: 5 };
const KEY_LENGTH = 64;

// Stored as "scrypt:N:r:p:salt:hash", the numbers in decimal, salt and hash in hex.
// The salt is random for every password, so two users with the same password get
// different hashes. Keeping the cost settings with the hash lets us raise them
// later and still check the passwords hashed before.
export async function hashPassword(password) {
    const salt = randomBytes(16);
    const hash = await scryptAsync(password, salt, KEY_LENGTH, COST);
    const { N, r, p } = COST;
    return `scrypt:${N}:${r}:${p}:${salt.toString('hex')}:${hash.toString('hex')}`;
}

export async function verifyPassword(password, stored) {
    const [, N, r, p, salt, hash] = stored.split(':');
    const expected = Buffer.from(hash, 'hex');
    const actual = await scryptAsync(
        password,
        Buffer.from(salt, 'hex'),
        expected.length,
        { N: Number(N), r: Number(r), p: Number(p) },
    );
    // A normal comparison stops at the first byte that differs, so the time it
    // takes tells an attacker how much was right. timingSafeEqual always compares
    // every byte.
    return timingSafeEqual(actual, expected);
}

// A made-up hash with the same cost. Login checks against it when the email is
// unknown, so a wrong email takes as long as a wrong password and the timing does
// not tell anyone which emails have an account.
export const DUMMY_HASH = `scrypt:${COST.N}:${COST.r}:${COST.p}:${'0'.repeat(32)}:${'0'.repeat(128)}`;
