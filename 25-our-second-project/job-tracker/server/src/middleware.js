import { HttpError } from './http-error.js';

const SAFE_METHODS = ['GET', 'HEAD', 'OPTIONS'];

// A second guard against cross-site request forgery, next to the SameSite=Lax
// cookie. Browsers send an Origin header with every POST, PATCH and DELETE. When
// it names another site, the request came from a page that is not ours, so we
// refuse it before it touches any data. SameSite alone does not cover a page on a
// sibling subdomain, which counts as the same site. Clients that send no Origin,
// such as curl, are not browsers and cannot carry a user's cookie by accident.
export function checkOrigin(req, res, next) {
    const origin = req.get('Origin');
    const ownOrigin = `${req.protocol}://${req.host}`;
    if (!SAFE_METHODS.includes(req.method) && origin && origin !== ownOrigin) {
        throw new HttpError(403, 'Requests from other sites are not allowed');
    }
    next();
}

// A request has a body when its Content-Length is over 0, or when it sends the
// body in chunks. A POST with no body, like our logout, still sends
// Content-Length: 0.
const hasBody = (req) =>
    Number(req.get('Content-Length')) > 0 ||
    req.get('Transfer-Encoding') !== undefined;

// A body must be JSON. Without asking first (a CORS preflight), a page on another
// site can only send form data or text/plain, so this closes that door too.
export function requireJsonBody(req, res, next) {
    if (hasBody(req) && !req.is('application/json')) {
        throw new HttpError(415, 'Send the body as JSON (application/json)');
    }
    next();
}

export function notFound(req, res) {
    res.status(404).json({ error: `No route for ${req.method} ${req.path}` });
}

// Express knows this is the error handler because it takes four parameters.
export function errorHandler(config) {
    return (err, req, res, next) => {
        // Part of the answer has already gone out, so we cannot send a JSON one.
        // Express's own handler closes the connection.
        if (res.headersSent) {
            return next(err);
        }
        if (err.type === 'entity.parse.failed') {
            return res
                .status(400)
                .json({ error: 'The body is not valid JSON' });
        }
        // Our HttpErrors, and the 4xx errors of express.json() (such as 413 for a
        // body over the limit): the client did something wrong, and the message
        // tells it what.
        if (err.status >= 400 && err.status < 500) {
            if (err.status === 401) {
                // RFC 9110 says every 401 must name an auth scheme to use. We log
                // in with a session cookie, not HTTP auth, so we name our own.
                res.set('WWW-Authenticate', 'Session realm="job-tracker"');
            }
            const body = { error: err.message };
            if (err.fields) {
                body.fields = err.fields;
            }
            return res.status(err.status).json(body);
        }
        // A bug on our side: log it for us, and send no details to the client.
        if (config.nodeEnv !== 'test') {
            console.error(err);
        }
        res.status(500).json({ error: 'Something went wrong' });
    };
}
