import { createHash, randomBytes } from 'node:crypto';
import { readCookie } from './cookies.js';

const COOKIE_NAME = 'sid';
const SESSION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

// The cookie holds the token; the database holds only its SHA-256 hash. A leaked
// copy of the database then has no token in it that would log anyone in.
const hashToken = (token) => createHash('sha256').update(token).digest('hex');

// Starts a session for the user and gives back the token for the cookie.
// 32 random bytes cannot be guessed, unlike an id that counts up.
export function createSession(db, userId) {
    const token = randomBytes(32).toString('base64url');
    const now = new Date();
    const expiresAt = new Date(now.getTime() + SESSION_MS);

    // While we are writing, remove the sessions that have run out.
    db.prepare('DELETE FROM sessions WHERE expires_at <= ?').run(
        now.toISOString(),
    );
    db.prepare(
        `INSERT INTO sessions (id, user_id, expires_at, created_at)
         VALUES (?, ?, ?, ?)`,
    ).run(hashToken(token), userId, expiresAt.toISOString(), now.toISOString());
    return token;
}

// The user of the session in the request's cookie, or null when there is no
// cookie, no such session, or the session has run out.
export function findSessionUser(db, req) {
    const token = readCookie(req.headers.cookie, COOKIE_NAME);
    if (!token) {
        return null;
    }

    const id = hashToken(token);
    const row = db
        .prepare(
            `SELECT users.id, users.email, sessions.expires_at
             FROM sessions JOIN users ON users.id = sessions.user_id
             WHERE sessions.id = ?`,
        )
        .get(id);
    if (!row) {
        return null;
    }
    // Both are ISO 8601 strings in UTC, so comparing the text compares the times.
    if (row.expires_at <= new Date().toISOString()) {
        db.prepare('DELETE FROM sessions WHERE id = ?').run(id);
        return null;
    }
    return { id: row.id, email: row.email };
}

export function deleteSession(db, req) {
    const token = readCookie(req.headers.cookie, COOKIE_NAME);
    if (token) {
        db.prepare('DELETE FROM sessions WHERE id = ?').run(hashToken(token));
    }
}

// httpOnly: page scripts cannot read it, so an XSS bug cannot steal it.
// secure: the browser sends it only over https (config.cookieSecure).
// sameSite 'lax': other sites' forms and scripts do not get it sent along with
// their POST, PATCH or DELETE requests to us.
function cookieOptions(config) {
    return {
        httpOnly: true,
        secure: config.cookieSecure,
        sameSite: 'lax',
        path: '/',
    };
}

export function setSessionCookie(res, token, config) {
    res.cookie(COOKIE_NAME, token, {
        ...cookieOptions(config),
        maxAge: SESSION_MS,
    });
}

// The browser only removes a cookie when the options match the ones it was set with.
export function clearSessionCookie(res, config) {
    res.clearCookie(COOKIE_NAME, cookieOptions(config));
}
