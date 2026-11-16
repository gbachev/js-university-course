// One catch decides what to answer by the type of the error, and rethrows the rest.
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

function checkout(order) {
    if (!order.email) {
        throw new ValidationError('Email is required', 'email');
    }
    if (order.sku !== 'sku-42') {
        throw new NotFoundError('Product', order.sku);
    }
    return { status: 200 };
}

function handleCheckout(order) {
    try {
        return checkout(order);
    } catch (error) {
        if (error instanceof ValidationError) {
            return { status: error.statusCode, field: error.field };
        }
        if (error instanceof AppError) {
            return {
                status: error.statusCode,
                message: error.message
            };
        }
        throw error;
    }
}

const email = 'jane@example.com';

console.log(handleCheckout({ email, sku: 'sku-42' }));
// { status: 200 }
console.log(handleCheckout({ sku: 'sku-42' }));
// { status: 400, field: 'email' }
console.log(handleCheckout({ email, sku: 'sku-7' }));
// { status: 404, message: 'Product sku-7 not found' }

try {
    handleCheckout(null);
} catch (error) {
    console.log(error.name); // TypeError
}
