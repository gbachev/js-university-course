// Without a name of its own, our error still says "Error".
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.field = field;
    }
}

const error = new ValidationError('Email is required', 'email');

console.log(error instanceof ValidationError); // true
console.log(error.name); // Error
console.log(String(error)); // Error: Email is required
