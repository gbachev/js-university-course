import { HttpError } from '../http-error.js';
import { findSessionUser } from './sessions.js';

// Middleware for the routes that need a logged-in user. It puts the user on
// req.user for the routes after it, or answers 401 when there is none.
export function requireUser(db) {
    return (req, res, next) => {
        const user = findSessionUser(db, req);
        if (!user) {
            throw new HttpError(401, 'Log in to continue');
        }
        req.user = user;
        next();
    };
}
