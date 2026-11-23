import { randomBytes, scrypt, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';

const scryptAsync = promisify(scrypt);

// 16 MB of memory per hash, inside the 32 MB Node allows by default (maxmem).
const COST = { N: 16384, r: 8, p: 5 };
const KEY_LENGTH = 64;

// A new random salt for every password, so the same password never gives the
// same text twice. The settings travel with the hash, so we can raise them later.
export async function hashPassword(password) {
    const salt = randomBytes(16);
    const hash = await scryptAsync(password, salt, KEY_LENGTH, COST);
    const { N, r, p } = COST;
    return `scrypt:${N}:${r}:${p}:${salt.toString('hex')}:${hash.toString('hex')}`;
}

// We hash the attempt with the salt and the settings of the stored value, then
// compare every byte: timingSafeEqual() takes as long for a near miss as for a
// wild guess.
export async function verifyPassword(password, stored) {
    const [, N, r, p, salt, hash] = stored.split(':');
    const expected = Buffer.from(hash, 'hex');
    const actual = await scryptAsync(password, Buffer.from(salt, 'hex'), expected.length, {
        N: Number(N),
        r: Number(r),
        p: Number(p),
    });
    return timingSafeEqual(actual, expected);
}
