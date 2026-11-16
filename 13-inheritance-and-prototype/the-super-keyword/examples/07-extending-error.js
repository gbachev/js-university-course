// A ValidationError with its own name and an extra field.
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

const error = new ValidationError('Email is required', 'email');

console.log(error instanceof ValidationError); // true
console.log(error instanceof Error); // true
console.log(error.message); // Email is required
console.log(error.field); // email
console.log(String(error)); // ValidationError: Email is required
