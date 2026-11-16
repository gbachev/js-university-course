class AppError extends Error {
    constructor(message, options) {
        super(message, options);
        this.name = new.target.name;
    }
}

class NotFoundError extends AppError {}

const error = new NotFoundError('No product with id sku-7');

// Considered bad practice: the message used to say
// "not found", now the check fails.
console.log(error.message.includes('not found')); // false

// Better: the type stays when the wording changes.
console.log(error instanceof NotFoundError); // true
console.log(error instanceof AppError); // true
