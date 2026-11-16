// Our own classes take the cause option too, because AppError passes options to super().
class AppError extends Error {
    statusCode = 500;

    constructor(message, options) {
        super(message, options);
        this.name = new.target.name;
    }
}

class PaymentError extends AppError {
    statusCode = 502;
}

function sendToProvider(order) {
    throw new Error('socket hang up');
}

function payOrder(order) {
    try {
        return sendToProvider(order);
    } catch (error) {
        throw new PaymentError(`Could not pay order ${order.id}`, {
            cause: error
        });
    }
}

try {
    payOrder({ id: 1001, total: 59 });
} catch (error) {
    console.log(String(error));
    // PaymentError: Could not pay order 1001
    console.log(error.statusCode); // 502
    console.log(error.cause.message); // socket hang up
}
