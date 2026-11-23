// Every call to our API lives in this file. The paths are relative (/api/...):
// in development Vite passes them on to the Express server, in production
// Express sends this page itself, so the browser always talks to one origin.
//
// fetch() sends cookies to its own origin by default (credentials: 'same-origin'),
// so the session cookie goes with every call and we set no option for it. A front
// end on another origin would need credentials: 'include' here, and CORS with
// credentials on the server.

// An answer that was not OK. `status` is the HTTP status (0 when the server could
// not be reached) and `fields` the message for each form field, from a 400.
export class ApiError extends Error {
    constructor(status, message, fields = {}) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.fields = fields;
    }
}

async function request(method, path, body) {
    const options = { method, headers: {} };
    if (body !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    let response;
    try {
        response = await fetch(`/api${path}`, options);
    } catch {
        // fetch() rejects only when no answer arrived at all.
        throw new ApiError(0, 'Could not reach the server. Try again.');
    }

    // 204 No Content: there is no body to read.
    if (response.status === 204) {
        return null;
    }
    // A proxy in between can answer with an HTML error page, so we only parse
    // what says it is JSON.
    const isJson = response.headers
        .get('Content-Type')
        ?.includes('application/json');
    const data = isJson ? await response.json() : {};

    if (!response.ok) {
        throw new ApiError(
            response.status,
            data.error ?? `The server answered ${response.status}`,
            data.fields,
        );
    }
    return data;
}

export async function signUp(email, password) {
    const { user } = await request('POST', '/auth/signup', {
        email,
        password,
    });
    return user;
}

export async function logIn(email, password) {
    const { user } = await request('POST', '/auth/login', { email, password });
    return user;
}

export async function logOut() {
    await request('POST', '/auth/logout');
}

// The logged-in user, or null when nobody is logged in.
export async function currentUser() {
    try {
        const { user } = await request('GET', '/auth/me');
        return user;
    } catch (error) {
        if (error.status === 401) {
            return null;
        }
        throw error;
    }
}

export async function listApplications() {
    const { applications } = await request('GET', '/applications');
    return applications;
}

export async function createApplication(values) {
    const { application } = await request('POST', '/applications', values);
    return application;
}

export async function updateApplication(id, changes) {
    const { application } = await request(
        'PATCH',
        `/applications/${id}`,
        changes,
    );
    return application;
}

export async function deleteApplication(id) {
    await request('DELETE', `/applications/${id}`);
}
