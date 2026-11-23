import express from 'express';
import { HttpError } from '../http-error.js';
import {
    STATUSES,
    validateChanges,
    validateNewApplication,
} from '../validate.js';

// A row from the database in the shape the API sends: camelCase names, and no
// user_id, which the client never needs.
const toApplication = (row) => ({
    id: row.id,
    company: row.company,
    role: row.role,
    status: row.status,
    appliedOn: row.applied_on,
    url: row.url,
    notes: row.notes,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
});

// The id in the URL is text. Anything but a whole number cannot be an id, so it
// becomes null, and "id = NULL" matches no row in SQL: the same 404 as an id that
// does not exist.
function parseId(text) {
    const id = Number(text);
    return /^\d+$/.test(text) && Number.isSafeInteger(id) ? id : null;
}

// The applications of the logged-in user. app.js mounts it at /api/applications,
// after requireUser, so req.user is always set here. Every query has
// "user_id = ?": another user's application is "not found", never "forbidden",
// so nobody learns that it exists.
export function applicationRoutes({ db }) {
    const router = express.Router();

    function findApplication(req) {
        const row = db
            .prepare('SELECT * FROM applications WHERE id = ? AND user_id = ?')
            .get(parseId(req.params.id), req.user.id);
        if (!row) {
            throw new HttpError(
                404,
                `No application with the id ${req.params.id}`,
            );
        }
        return row;
    }

    router.get('/', (req, res) => {
        const { status } = req.query;
        if (status !== undefined && !STATUSES.includes(status)) {
            throw new HttpError(
                400,
                `status must be one of: ${STATUSES.join(', ')}`,
            );
        }

        // Newest first. The id breaks a tie between two rows of the same time.
        let rows;
        if (status === undefined) {
            rows = db
                .prepare(
                    `SELECT * FROM applications
                     WHERE user_id = ?
                     ORDER BY created_at DESC, id DESC`,
                )
                .all(req.user.id);
        } else {
            rows = db
                .prepare(
                    `SELECT * FROM applications
                     WHERE user_id = ? AND status = ?
                     ORDER BY created_at DESC, id DESC`,
                )
                .all(req.user.id, status);
        }
        res.json({ applications: rows.map(toApplication) });
    });

    router.post('/', (req, res) => {
        const values = validateNewApplication(req.body);
        const now = new Date().toISOString();

        // Named parameters: @company takes values.company, and so on. The values
        // travel apart from the SQL text, so no value can change the query.
        const row = db
            .prepare(
                `INSERT INTO applications
                     (user_id, company, role, status, applied_on, url, notes,
                      created_at, updated_at)
                 VALUES
                     (@userId, @company, @role, @status, @appliedOn, @url, @notes,
                      @now, @now)
                 RETURNING *`,
            )
            .get({ ...values, userId: req.user.id, now });

        res.status(201)
            .location(`/api/applications/${row.id}`)
            .json({ application: toApplication(row) });
    });

    router.get('/:id', (req, res) => {
        res.json({ application: toApplication(findApplication(req)) });
    });

    // Only the fields in the body change. We read the row, lay the changes over
    // it, and write every column back: one UPDATE, whatever was sent.
    router.patch('/:id', (req, res) => {
        const current = toApplication(findApplication(req));
        const changes = validateChanges(req.body);
        const next = { ...current, ...changes };

        const row = db
            .prepare(
                `UPDATE applications
                 SET company = @company, role = @role, status = @status,
                     applied_on = @appliedOn, url = @url, notes = @notes,
                     updated_at = @updatedAt
                 WHERE id = @id AND user_id = @userId
                 RETURNING *`,
            )
            .get({
                ...next,
                updatedAt: new Date().toISOString(),
                userId: req.user.id,
            });

        res.json({ application: toApplication(row) });
    });

    router.delete('/:id', (req, res) => {
        const result = db
            .prepare('DELETE FROM applications WHERE id = ? AND user_id = ?')
            .run(parseId(req.params.id), req.user.id);
        // changes: how many rows the statement deleted.
        if (result.changes === 0) {
            throw new HttpError(
                404,
                `No application with the id ${req.params.id}`,
            );
        }
        res.status(204).end();
    });

    return router;
}
