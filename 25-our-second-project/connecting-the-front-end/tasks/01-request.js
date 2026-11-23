// Task 1: One helper for every call
// Lecture: Connecting the Front End
//
// Every call in our api.js goes through one request() helper. Write it here, with
// fetch passed in as the last argument so the tests can hand it a fake one.
// request(method, path, body, fetchFn) must:
// - call fetchFn(`/api${path}`, options) with options { method, headers: {} }.
//   When there is a body (body !== undefined), add the header
//   'Content-Type': 'application/json' and send JSON.stringify(body) as the body.
// - when fetchFn rejects (no answer arrived at all), throw
//   new ApiError(0, 'Could not reach the server. Try again.')
// - for a 204, return null without reading the body: there is none.
// - read the body as JSON only when the Content-Type header includes
//   'application/json' (a proxy can answer with a plain-text or HTML page);
//   otherwise use {} as the data.
// - when the status is not OK (outside 200-299), throw new ApiError(status,
//   message, fields), where the message is the body's `error`, or
//   `The server answered ${status}` when there is none, and fields are the body's
//   `fields` (ApiError turns a missing one into {}).
// - otherwise return the data.
//
// Examples:
//   await request('GET', '/applications', undefined, fetchFn)
//       -> { applications: [...] }, after fetchFn('/api/applications', { method: 'GET', headers: {} })
//   await request('DELETE', '/applications/7', undefined, fetchFn)    -> null (a 204)
//   a 400 { error: 'Check the highlighted fields', fields: { company: 'Fill in this field' } }
//       -> throws an ApiError with status 400, that message and those fields
//
// Run the tests: npm test -- 25-our-second-project/connecting-the-front-end

// An answer that was not OK, as in the app's api.js. `status` is the HTTP status
// (0 when the server could not be reached) and `fields` the message for each field.
export class ApiError extends Error {
    constructor(status, message, fields = {}) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.fields = fields;
    }
}

export async function request(method, path, body, fetchFn = fetch) {
    // Your code here
}
