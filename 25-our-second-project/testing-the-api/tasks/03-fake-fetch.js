// Task 3: A fake fetch with routes
// Lecture: Testing the API
//
// The front end's tests never reach a server: they hand the code a fake fetch that
// answers with real Response objects. Write fakeFetch(routes), which takes a map of
// answers and returns an async function fetchFn(url, options) to use in place of
// fetch.
// - Each key of `routes` is 'METHOD path', such as 'GET /api/applications', and its
//   value is { status, body }. status defaults to 200; body is left out for an
//   answer without one, such as a 204.
// - fetchFn(url, options) looks up `${method} ${url}`, where method is
//   options.method, or 'GET' when there are no options or no method.
// - A route with a body answers new Response(JSON.stringify(body), ...) with its
//   status and the header 'Content-Type': 'application/json; charset=utf-8'.
//   A route without a body answers new Response(null, { status }).
// - A key that is not in `routes` answers 404 with the JSON body
//   { error: `No route for ${method} ${url}` }, like the server's own JSON 404.
// - Every call builds a new Response: a body can be read only once.
// - fetchFn.calls is an array of the [url, options] of every call, in order, so a
//   test can check what the code sent.
//
// Examples:
//   const fetchFn = fakeFetch({ 'GET /api/auth/me': { body: { user: { id: 1 } } } });
//   const response = await fetchFn('/api/auth/me');
//   response.status            200
//   await response.json()      { user: { id: 1 } }
//   (await fetchFn('/api/jobs', { method: 'POST' })).status    404
//   fetchFn.calls              [['/api/auth/me', undefined], ['/api/jobs', { method: 'POST' }]]
//
// Run the tests: npm test -- 25-our-second-project/testing-the-api

export function fakeFetch(routes) {
    // Your code here
}
