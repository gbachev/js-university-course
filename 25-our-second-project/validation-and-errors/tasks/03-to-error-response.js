// Task 3: From an error to an answer
// Lecture: Validating Input and Handling Errors
//
// Our error handler gets every error a route throws and must turn it into an answer
// the front end can show. Write toErrorResponse(err) that returns
// { status, body }: the status code to send and the JSON body.
// - Broken JSON: express.json() throws an error with err.type set to
//   'entity.parse.failed' (and err.status 400). Answer
//   { status: 400, body: { error: 'The body is not valid JSON' } }, never the
//   message of the SyntaxError.
// - An error with a status from 400 to 499 (our HttpError, or the 413 of
//   express.json() for a body that is too large): the client did something wrong.
//   Answer that status with { error: err.message }, and add fields: err.fields only
//   when the error has fields. No fields key at all otherwise.
// - Anything else (a TypeError, an error with status 500, a thrown string, or even
//   undefined) is a bug on our side. Answer
//   { status: 500, body: { error: 'Something went wrong' } } and keep the message
//   to ourselves: it can name our files or our database.
//
// Examples:
//   toErrorResponse(new HttpError(404, 'No application with the id 7'))
//   { status: 404, body: { error: 'No application with the id 7' } }
//   toErrorResponse(new HttpError(400, 'Check the highlighted fields', { role: 'Fill in this field' }))
//   { status: 400, body: { error: 'Check the highlighted fields', fields: { role: 'Fill in this field' } } }
//   toErrorResponse(new TypeError("Cannot read properties of undefined (reading 'id')"))
//   { status: 500, body: { error: 'Something went wrong' } }
//
// Run the tests: npm test -- 25-our-second-project/validation-and-errors

// The HttpError of the lecture, for the examples and the tests.
export class HttpError extends Error {
    constructor(status, message, fields) {
        super(message);
        this.name = 'HttpError';
        this.status = status;
        this.fields = fields;
    }
}

export function toErrorResponse(err) {
    // Your code here
}
