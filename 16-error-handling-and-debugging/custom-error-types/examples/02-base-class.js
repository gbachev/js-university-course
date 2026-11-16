// One base class sets the name for all of its children with new.target.name.
class AppError extends Error {
    statusCode = 500;

    constructor(message, options) {
        super(message, options);
        this.name = new.target.name;
    }
}

class ValidationError extends AppError {
    statusCode = 400;

    constructor(message, field) {
        super(message);
        this.field = field;
    }
}

class NotFoundError extends AppError {
    statusCode = 404;

    constructor(resource, id) {
        super(`${resource} ${id} not found`);
        this.resource = resource;
        this.id = id;
    }
}

const invalid = new ValidationError('Email is required', 'email');
const missing = new NotFoundError('Product', 'sku-7');

console.log(String(invalid)); // ValidationError: Email is required
console.log(invalid.field, invalid.statusCode); // email 400
console.log(String(missing));
// NotFoundError: Product sku-7 not found
console.log(missing.id, missing.statusCode); // sku-7 404
console.log(missing instanceof AppError); // true
console.log(missing instanceof Error); // true
console.log(missing instanceof ValidationError); // false
