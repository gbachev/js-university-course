// Task 3: Answer by type
// Lecture: Custom Error Types
//
// respond(action) runs a request handler and turns the result into an answer. It
// sorts the errors with a switch on error.name, so the new EmailTakenError and
// PaymentError get a 500, and a TypeError from a bug is hidden behind a 500 too.
// Rewrite the catch with instanceof: a ValidationError (and every child of it) gives
// { status, field }, any other AppError gives { status, message }, both with the
// statusCode of the error, and every other error is rethrown.
//
// Examples:
//   respond(() => 'ok')
//   // { status: 200, data: 'ok' }
//   respond(() => { throw new EmailTakenError('Taken', 'email'); })
//   // { status: 400, field: 'email' }
//   respond(() => { throw new PaymentError('Card declined'); })
//   // { status: 502, message: 'Card declined' }
//
// Run the tests: npm test -- 16-error-handling-and-debugging/custom-error-types

export class AppError extends Error {
    statusCode = 500;

    constructor(message, options) {
        super(message, options);
        this.name = new.target.name;
    }
}

export class ValidationError extends AppError {
    statusCode = 400;

    constructor(message, field) {
        super(message);
        this.field = field;
    }
}

export class EmailTakenError extends ValidationError {}

export class NotFoundError extends AppError {
    statusCode = 404;
}

export class PaymentError extends AppError {
    statusCode = 502;
}

export function respond(action) {
    try {
        return { status: 200, data: action() };
    } catch (error) {
        switch (error.name) {
            case 'ValidationError':
                return { status: 400, field: error.field };
            case 'NotFoundError':
                return { status: 404, message: error.message };
            default:
                return { status: 500, message: 'Something went wrong' };
        }
    }
}
