// Task 2: The import error
// Lecture: Custom Error Types
//
// AppError below is the base class of our errors, as in the lecture. Add a child
// class ImportError with a statusCode of 422, and finish importOrders(text): it
// returns the orders from JSON text, and when the text is broken it throws an
// ImportError with the message 'Could not import the orders' and the SyntaxError
// as its cause. Export both.
//
// Examples:
//   importOrders('[{"id":1}]')   // [{ id: 1 }]
//   importOrders('[{id: 1}]')    // throws ImportError: Could not import the orders
//                                // error.statusCode is 422, error.cause a SyntaxError
//
// Run the tests: npm test -- 16-error-handling-and-debugging/custom-error-types

export class AppError extends Error {
    statusCode = 500;

    constructor(message, options) {
        super(message, options);
        this.name = new.target.name;
    }
}

// Your ImportError class here

export function importOrders(text) {
    return JSON.parse(text);
}
