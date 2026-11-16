// Task 1: A real error
// Lecture: throw and Error Objects
//
// withdraw(balance, amount) returns the balance left after a withdrawal. When the
// amount is bigger than the balance it throws, but it throws a string, so our handlers
// get no name and no stack. Make it throw a RangeError with the message
// 'Insufficient funds: balance <balance>, amount <amount>'. Taking out the whole
// balance is allowed.
//
// Examples:
//   withdraw(100, 30)   // 70
//   withdraw(50, 80)    // throws RangeError: Insufficient funds: balance 50, amount 80
//
// Run the tests: npm test -- 16-error-handling-and-debugging/throw-and-error-objects

export function withdraw(balance, amount) {
    if (amount > balance) {
        throw 'Insufficient funds';
    }
    return balance - amount;
}
