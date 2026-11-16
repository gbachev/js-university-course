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
        // The most specific type first: every ValidationError is also an AppError.
        if (error instanceof ValidationError) {
            return { status: error.statusCode, field: error.field };
        }
        if (error instanceof AppError) {
            return { status: error.statusCode, message: error.message };
        }
        throw error;
    }
}
