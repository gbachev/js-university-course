// Task 2: One cookie from the header
// Lecture: Accounts and Logging In
//
// The browser sends every cookie of our site in one Cookie header, such as
//   'theme=dark; sid=Kq3x-_9; lang=en'
// Write readCookie(header, name) that returns the value of the cookie called
// `name`, or null when there is no such cookie.
// - Pairs are split by ';'. Spaces around a name or a value do not count.
// - The name must match as a whole: in 'oldsid=abc; sid=xyz' the cookie sid is
//   'xyz', and in 'sid2=abc' there is no sid at all.
// - Only the first '=' of a pair splits the name from the value: 'data=a=b' gives
//   'a=b' for data.
// - A pair with no '=' is skipped. A cookie with an empty value gives ''.
// - The header can be missing (undefined) or '': return null.
// Our session token uses only letters, digits, - and _, so no decoding is needed.
//
// Examples:
//   readCookie('theme=dark; sid=Kq3x-_9', 'sid')    'Kq3x-_9'
//   readCookie('oldsid=abc; sid=xyz', 'sid')        'xyz'
//   readCookie('theme=dark', 'sid')                 null
//   readCookie(undefined, 'sid')                    null
//
// Run the tests: npm test -- 25-our-second-project/accounts-and-login

export function readCookie(header, name) {
    // Your code here
}
