// Task 2: Our own origin behind the host's proxy
// Lecture: Running the Server in Production
//
// checkOrigin in the Job Application Tracker compares the browser's Origin header
// with our own origin, `${req.protocol}://${req.host}`. On a host, the browser
// talks https to the host's proxy, and the proxy passes the request to us over
// plain http with an X-Forwarded-Proto: https header. Express reads that header
// only when we set 'trust proxy'. Write the same logic for a plain node:http
// request: ownOrigin(req, trustProxy).
// - The protocol of the connection itself is 'https' when req.socket.encrypted is
//   true (a TLS connection) and 'http' otherwise.
// - When trustProxy is true and the request has an X-Forwarded-Proto header
//   (Node gives it as req.headers['x-forwarded-proto']), use that header instead.
//   A request that passed several proxies can carry a list such as 'https, http';
//   take the first value, trimmed, as Express does.
// - When trustProxy is false, ignore X-Forwarded-Proto: any client can send it.
// - The host comes from req.headers.host and keeps its port.
// - Return `${protocol}://${host}`.
//
// Examples (req as node:http gives it -> the result):
//   plain http, Host localhost:3000, no trust                      'http://localhost:3000'
//   plain http, Host app.example.com, X-Forwarded-Proto https, trust    'https://app.example.com'
//   plain http, Host app.example.com, X-Forwarded-Proto https, no trust 'http://app.example.com'
//
// Run the tests: npm test -- 25-our-second-project/running-in-production

export function ownOrigin(req, trustProxy) {
    // Your code here
}
