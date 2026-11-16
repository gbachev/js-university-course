// Task 1: Hide the secrets
// Lecture: JSON
//
// Before we log a user or send it to the browser, the password and the API token
// must go. Write toPublicJson(user), which returns the user as a JSON string
// without any property named password or token. Use a replacer function, so the
// secrets are dropped at every level, also inside nested objects such as
// user.billing. Everything else stays as it is, and the user object we pass in
// must not change.
//
// Examples:
//   toPublicJson({ id: 7, name: 'Jane Doe', password: 's3cret' })
//   // '{"id":7,"name":"Jane Doe"}'
//   toPublicJson({ id: 8, billing: { iban: 'BG80', token: 'tok_1' } })
//   // '{"id":8,"billing":{"iban":"BG80"}}'
//
// Run the tests: npm test -- 15-built-in-objects/json

export function toPublicJson(user) {
    // Your code here
}
