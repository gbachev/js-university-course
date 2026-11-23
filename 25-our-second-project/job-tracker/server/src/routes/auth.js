import express from 'express';
import { DUMMY_HASH, hashPassword, verifyPassword } from '../auth/passwords.js';
import { requireUser } from '../auth/require-user.js';
import {
    clearSessionCookie,
    createSession,
    deleteSession,
    setSessionCookie,
} from '../auth/sessions.js';
import { HttpError } from '../http-error.js';
import { validateCredentials } from '../validate.js';

// Sign up, log in, log out and "who am I". app.js mounts it at /api/auth.
export function authRoutes({ db, config }) {
    const router = express.Router();

    router.post('/signup', async (req, res) => {
        const { email, password } = validateCredentials(req.body);
        const passwordHash = await hashPassword(password);

        let user;
        try {
            user = db
                .prepare(
                    `INSERT INTO users (email, password_hash, created_at)
                     VALUES (?, ?, ?)
                     RETURNING id, email`,
                )
                .get(email, passwordHash, new Date().toISOString());
        } catch (error) {
            // The UNIQUE rule on users.email: the database is the one place that
            // can say for sure, even when two sign-ups arrive at the same moment.
            if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
                throw new HttpError(409, 'An account with this email exists');
            }
            throw error;
        }

        setSessionCookie(res, createSession(db, user.id), config);
        res.status(201).json({ user });
    });

    router.post('/login', async (req, res) => {
        const { email, password } = validateCredentials(req.body);
        const user = db
            .prepare(
                'SELECT id, email, password_hash FROM users WHERE email = ?',
            )
            .get(email);

        // Always run scrypt, against the dummy hash when there is no user, and
        // give the same answer for a wrong email and a wrong password.
        const passwordOk = await verifyPassword(
            password,
            user?.password_hash ?? DUMMY_HASH,
        );
        if (!user || !passwordOk) {
            throw new HttpError(401, 'Wrong email or password');
        }

        setSessionCookie(res, createSession(db, user.id), config);
        res.json({ user: { id: user.id, email: user.email } });
    });

    router.post('/logout', (req, res) => {
        deleteSession(db, req);
        clearSessionCookie(res, config);
        res.status(204).end();
    });

    router.get('/me', requireUser(db), (req, res) => {
        res.json({ user: req.user });
    });

    return router;
}
