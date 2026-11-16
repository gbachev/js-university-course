// Task 3: Only what we expect
// Lecture: Try/Catch/Finally
//
// readDiscount(text) reads a coupon saved as JSON text and returns its percent, as in
// '{"coupon":{"percent":15}}'. Broken JSON is a case we plan for: then the discount is
// 0. Right now the catch hides every error, so a missing coupon object, which is a
// bug, also quietly gives 0. Change the catch so only a SyntaxError gives 0, and
// every other error is rethrown to the caller.
//
// Examples:
//   readDiscount('{"coupon":{"percent":15}}')   // 15
//   readDiscount('{broken')                     // 0
//   readDiscount('{"percent":15}')              // throws a TypeError
//
// Run the tests: npm test -- 16-error-handling-and-debugging/try-catch-finally

export function readDiscount(text) {
    try {
        return JSON.parse(text).coupon.percent;
    } catch {
        return 0;
    }
}
