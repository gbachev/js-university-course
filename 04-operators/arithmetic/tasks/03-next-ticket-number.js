// Task 3: The next ticket number
// Lecture: Arithmetic Operators
//
// A support desk gives every new request the number after the last one. The function
// nextTicketNumber(lastNumber) should return the next number, so after ticket 41 comes
// ticket 42. Right now every new ticket gets the same number as the last one. Find
// out why the increment does not show in the result and fix it. The first ticket of
// the day comes after ticket 0.
//
// Examples:
//   nextTicketNumber(41)   // 42
//   nextTicketNumber(0)    // 1
//
// Run the tests: npm test -- 04-operators/arithmetic

export function nextTicketNumber(lastNumber) {
    return lastNumber++;
}
