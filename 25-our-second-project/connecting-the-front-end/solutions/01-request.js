// The app's request() with fetch passed in. We check the answer ourselves, since
// fetch() fulfills on a 404 or a 500 and rejects only when no answer arrived.
export class ApiError extends Error {
    constructor(status, message, fields = {}) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.fields = fields;
    }
}

export async function request(method, path, body, fetchFn = fetch) {
    const options = { method, headers: {} };
    if (body !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    let response;
    try {
        response = await fetchFn(`/api${path}`, options);
    } catch {
        throw new ApiError(0, 'Could not reach the server. Try again.');
    }

    if (response.status === 204) {
        return null;
    }
    const isJson = response.headers.get('Content-Type')?.includes('application/json');
    const data = isJson ? await response.json() : {};

    if (!response.ok) {
        throw new ApiError(response.status, data.error ?? `The server answered ${response.status}`, data.fields);
    }
    return data;
}
