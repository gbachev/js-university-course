// A Response is built inside fetchFn, on every call: a body is a stream that can
// be read only once, so a Response built once up front would fail the second
// time. Object.hasOwn keeps inherited names such as 'constructor' out of the
// lookup.
export function fakeFetch(routes) {
    const calls = [];

    async function fetchFn(url, options) {
        calls.push([url, options]);
        const method = options?.method ?? 'GET';
        const key = `${method} ${url}`;

        if (!Object.hasOwn(routes, key)) {
            return json({ error: `No route for ${key}` }, 404);
        }
        const { status = 200, body } = routes[key];
        return body === undefined ? new Response(null, { status }) : json(body, status);
    }

    fetchFn.calls = calls;
    return fetchFn;
}

const json = (body, status) =>
    new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
