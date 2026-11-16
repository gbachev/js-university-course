// A switch on name breaks as soon as we add a child class; instanceof does not.
class AppError extends Error {
    constructor(message, options) {
        super(message, options);
        this.name = new.target.name;
    }
}

class ValidationError extends AppError {}
class EmailTakenError extends ValidationError {}

function statusFor(error) {
    switch (error.name) {
        case 'ValidationError':
            return 400;
        default:
            return 500;
    }
}

const error = new EmailTakenError('Email is already registered');

console.log(error.name); // EmailTakenError
console.log(statusFor(error)); // 500
console.log(error instanceof ValidationError); // true
