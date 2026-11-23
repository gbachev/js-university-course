// Task 2: An id from the URL
// Lecture: Building the API
//
// In GET /api/applications/:id, req.params.id is always text. Write parseId(text)
// that returns the id as a number, or null when the text cannot be an id. The route
// passes null on to the query, where "id = NULL" matches no row, so the client gets a
// 404 for it like for any id that does not exist.
//
// The text is an id only when it is made of the digits 0-9 and nothing else, and the
// number fits in Number.MAX_SAFE_INTEGER (9007199254740991), so that no digit is lost.
// Careful: Number('1e3') is 1000, Number('0x10') is 16, Number(' 7 ') is 7 and
// Number('') is 0, and Number.parseInt('12abc', 10) is 12. None of those are ids.
// Return null, never NaN or undefined.
//
// Examples:
//   parseId('7')                       7
//   parseId('1234')                    1234
//   parseId('abc')                     null
//   parseId('1.5')                     null
//   parseId('1e3')                     null
//   parseId('99999999999999999999')    null
//
// Run the tests: npm test -- 25-our-second-project/building-the-api

export function parseId(text) {
    // Your code here
}
