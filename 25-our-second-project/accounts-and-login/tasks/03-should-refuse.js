// Task 3: Refuse other origins
// Lecture: Accounts and Logging In
//
// Our checkOrigin middleware answers 403 to a request that may change data and
// comes from a page on another origin. Write shouldRefuse(req) that returns true
// when it must refuse the request, and false when the request may go on.
// `req` looks like the parts of Express's request we need:
//   { method: 'POST', protocol: 'http', host: 'localhost:3000',
//     headers: { origin: 'http://localhost:8080' } }
// Express writes header names in lower case, and req.host includes the port.
// - GET, HEAD and OPTIONS change nothing: never refuse them.
// - A request with no Origin header comes from no browser, so it carries nobody's
//   cookie by accident: let it go on.
// - Every other request is refused unless its Origin is exactly our own origin,
//   `${req.protocol}://${req.host}`. The browser sends 'null' when it hides the
//   origin; that is not ours either.
// Careful: compare the whole origin. A check of the hostname alone lets
// http://localhost:8080 in, a check with startsWith() lets
// http://localhost:3000.evil.example in, and https://blog.example.com is the same
// site as https://app.example.com, but not the same origin.
//
// Examples (our server is http://localhost:3000):
//   shouldRefuse({ method: 'POST', ..., headers: { origin: 'http://localhost:3000' } })    false
//   shouldRefuse({ method: 'POST', ..., headers: { origin: 'https://evil.example' } })     true
//   shouldRefuse({ method: 'GET', ..., headers: { origin: 'https://evil.example' } })      false
//   shouldRefuse({ method: 'DELETE', ..., headers: {} })                                    false
//
// Run the tests: npm test -- 25-our-second-project/accounts-and-login

export function shouldRefuse(req) {
    // Your code here
}
