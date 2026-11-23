import { afterEach, describe, expect, it, vi } from 'vitest';
import {
    ApiError,
    createApplication,
    currentUser,
    deleteApplication,
    listApplications,
    logIn,
    logOut,
    signUp,
    updateApplication,
} from '../src/api.js';

// A real Response object, the kind fetch() gives back, with a JSON body.
const jsonResponse = (body, status = 200) =>
    new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });

// Replace the global fetch with a fake that answers with `response`.
function mockFetch(response) {
    const fetch = vi.fn(async () => response);
    vi.stubGlobal('fetch', fetch);
    return fetch;
}

afterEach(() => {
    vi.unstubAllGlobals();
});

const application = {
    id: 1,
    company: 'Acme',
    role: 'Frontend Developer',
    status: 'applied',
    appliedOn: '2026-11-20',
    url: null,
    notes: '',
};

describe('the calls', () => {
    it('signUp posts the email and password as JSON and gives back the user', async () => {
        const fetch = mockFetch(
            jsonResponse({ user: { id: 1, email: 'ada@example.com' } }, 201),
        );

        const user = await signUp('ada@example.com', 'correct horse');

        expect(user).toEqual({ id: 1, email: 'ada@example.com' });
        expect(fetch).toHaveBeenCalledWith('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '{"email":"ada@example.com","password":"correct horse"}',
        });
    });

    it('logIn posts to /api/auth/login', async () => {
        const fetch = mockFetch(
            jsonResponse({ user: { id: 1, email: 'ada@example.com' } }),
        );

        await logIn('ada@example.com', 'correct horse');

        const [path, options] = fetch.mock.calls[0];
        expect(path).toBe('/api/auth/login');
        expect(options.method).toBe('POST');
    });

    it('logOut posts with no body and handles the 204', async () => {
        const fetch = mockFetch(new Response(null, { status: 204 }));

        await expect(logOut()).resolves.toBeUndefined();
        expect(fetch).toHaveBeenCalledWith('/api/auth/logout', {
            method: 'POST',
            headers: {},
        });
    });

    it('listApplications gets /api/applications and unwraps the list', async () => {
        const fetch = mockFetch(jsonResponse({ applications: [application] }));

        expect(await listApplications()).toEqual([application]);
        expect(fetch).toHaveBeenCalledWith('/api/applications', {
            method: 'GET',
            headers: {},
        });
    });

    it('createApplication posts the values', async () => {
        const fetch = mockFetch(jsonResponse({ application }, 201));

        expect(
            await createApplication({ company: 'Acme', role: 'Developer' }),
        ).toEqual(application);
        const [path, options] = fetch.mock.calls[0];
        expect(path).toBe('/api/applications');
        expect(options.method).toBe('POST');
        expect(JSON.parse(options.body)).toEqual({
            company: 'Acme',
            role: 'Developer',
        });
    });

    it('updateApplication patches /api/applications/:id with the changes', async () => {
        const fetch = mockFetch(
            jsonResponse({ application: { ...application, status: 'offer' } }),
        );

        const saved = await updateApplication(1, { status: 'offer' });

        expect(saved.status).toBe('offer');
        const [path, options] = fetch.mock.calls[0];
        expect(path).toBe('/api/applications/1');
        expect(options.method).toBe('PATCH');
        expect(options.body).toBe('{"status":"offer"}');
    });

    it('deleteApplication sends DELETE and handles the 204', async () => {
        const fetch = mockFetch(new Response(null, { status: 204 }));

        await expect(deleteApplication(7)).resolves.toBeUndefined();
        expect(fetch).toHaveBeenCalledWith('/api/applications/7', {
            method: 'DELETE',
            headers: {},
        });
    });
});

describe('errors', () => {
    it('turns an error answer into an ApiError with its status and message', async () => {
        mockFetch(jsonResponse({ error: 'Wrong email or password' }, 401));

        const error = await logIn('ada@example.com', 'wrong').catch((e) => e);

        expect(error).toBeInstanceOf(ApiError);
        expect(error.status).toBe(401);
        expect(error.message).toBe('Wrong email or password');
        expect(error.fields).toEqual({});
    });

    it('keeps the message of each field from a 400', async () => {
        mockFetch(
            jsonResponse(
                {
                    error: 'Check the highlighted fields',
                    fields: { company: 'Fill in this field' },
                },
                400,
            ),
        );

        const error = await createApplication({}).catch((e) => e);

        expect(error.status).toBe(400);
        expect(error.message).toBe('Check the highlighted fields');
        expect(error.fields).toEqual({ company: 'Fill in this field' });
    });

    it('copes with an answer that is not JSON', async () => {
        mockFetch(
            new Response('<h1>Bad Gateway</h1>', {
                status: 502,
                headers: { 'Content-Type': 'text/html' },
            }),
        );

        await expect(listApplications()).rejects.toMatchObject({
            status: 502,
            message: 'The server answered 502',
        });
    });

    it('gives status 0 when the server cannot be reached', async () => {
        vi.stubGlobal(
            'fetch',
            vi.fn(async () => {
                throw new TypeError('Failed to fetch');
            }),
        );

        await expect(listApplications()).rejects.toMatchObject({
            status: 0,
            message: 'Could not reach the server. Try again.',
        });
    });
});

describe('currentUser', () => {
    it('gives the user when the session is good', async () => {
        mockFetch(jsonResponse({ user: { id: 1, email: 'ada@example.com' } }));
        expect(await currentUser()).toEqual({
            id: 1,
            email: 'ada@example.com',
        });
    });

    it('gives null on a 401: nobody is logged in', async () => {
        mockFetch(jsonResponse({ error: 'Log in to continue' }, 401));
        expect(await currentUser()).toBe(null);
    });

    it('still throws other errors', async () => {
        mockFetch(jsonResponse({ error: 'Something went wrong' }, 500));
        await expect(currentUser()).rejects.toThrow('Something went wrong');
    });
});
