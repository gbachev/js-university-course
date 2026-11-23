// An error that knows which HTTP status to answer with. A route throws it, and the
// error handler in middleware.js turns it into a JSON answer: { error, fields }.
// `fields` is only there for a 400 from validation: one message per form field.
export class HttpError extends Error {
    constructor(status, message, fields) {
        super(message);
        this.name = 'HttpError';
        this.status = status;
        this.fields = fields;
    }
}
