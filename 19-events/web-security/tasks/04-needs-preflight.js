// Task 4: Does this fetch need a preflight?
// Lecture: Web Security Basics
//
// Before a cross-origin fetch() the browser decides whether to ask first with an
// OPTIONS preflight. needsPreflight(options) gets the same options object as fetch()
// and returns true or false. A request goes out at once only when its method is GET,
// HEAD or POST (GET when there is none; fetch() writes post as POST, so we compare in
// capital letters), every header name is Accept, Accept-Language, Content-Language or
// Content-Type in any case, and a Content-Type is application/x-www-form-urlencoded,
// multipart/form-data or text/plain, in any case and with or without a parameter such
// as '; charset=UTF-8'. The method check is done: finish the headers. We leave out the
// rarer rules (very long values, unusual characters, a Range header).
//
// Examples:
//   needsPreflight()                                                     // false
//   needsPreflight({ method: 'POST', headers: { 'Content-Type': 'application/json' } })
//   // true
//   needsPreflight({ headers: { Authorization: 'Bearer 123' } })        // true
//
// Run the tests: npm test -- 19-events/web-security

const SIMPLE_METHODS = ['GET', 'HEAD', 'POST'];
const SAFE_HEADERS = ['accept', 'accept-language', 'content-language', 'content-type'];
const SIMPLE_TYPES = [
    'application/x-www-form-urlencoded',
    'multipart/form-data',
    'text/plain',
];

export function needsPreflight({ method = 'GET', headers = {} } = {}) {
    if (!SIMPLE_METHODS.includes(method.toUpperCase())) {
        return true;
    }
    // Your code here: check the headers.
    return false;
}
