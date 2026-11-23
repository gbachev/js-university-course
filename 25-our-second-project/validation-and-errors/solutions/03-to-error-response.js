// The HttpError of the lecture, for the examples and the tests.
export class HttpError extends Error {
    constructor(status, message, fields) {
        super(message);
        this.name = 'HttpError';
        this.status = status;
        this.fields = fields;
    }
}

// err?.: a route may throw anything, even undefined or a string, and reading a
// property of undefined would throw again inside our error handler.
export function toErrorResponse(err) {
    if (err?.type === 'entity.parse.failed') {
        return { status: 400, body: { error: 'The body is not valid JSON' } };
    }
    if (err?.status >= 400 && err.status < 500) {
        const body = { error: err.message };
        if (err.fields) {
            body.fields = err.fields;
        }
        return { status: err.status, body };
    }
    return { status: 500, body: { error: 'Something went wrong' } };
}
