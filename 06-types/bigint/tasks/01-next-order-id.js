// Task 1: The next order ID
// Lecture: BigInt
//
// Our order IDs are so large that a number cannot hold them exactly, so the database
// gives them to us as strings, like '9007199254740993'. Write nextOrderId(lastId):
// it takes the last ID as a string and returns the next ID, one bigger, as a BigInt.
// Turning the string into a Number first loses the last digits, so the tests catch
// that.
//
// Examples:
//   nextOrderId('41')                 // 42n
//   nextOrderId('9007199254740993')   // 9007199254740994n
//
// Run the tests: npm test -- 06-types/bigint

export function nextOrderId(lastId) {
    // Your code here
}
