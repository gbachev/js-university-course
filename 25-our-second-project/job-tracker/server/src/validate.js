import { HttpError } from './http-error.js';

// One check per field. Each takes the value from the request body and gives back
// { value }, cleaned up and ready to save, or { error }, the message the form shows
// next to that field. A default parameter fills in a field that was left out.

const credentialChecks = {
    // Only the shape. The one real test of an address is sending it an email.
    email(value) {
        const email =
            typeof value === 'string' ? value.trim().toLowerCase() : '';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
            return { error: 'Enter an email address, like ada@example.com' };
        }
        return { value: email };
    },
    // Never trimmed: spaces in a password are part of it.
    password(value) {
        if (
            typeof value !== 'string' ||
            value.length < 8 ||
            value.length > 128
        ) {
            return { error: 'Use 8 to 128 characters' };
        }
        return { value };
    },
};

// express.json() leaves req.body undefined when the request has no body, and it
// accepts any JSON object or array. Only an object can hold our fields.
function readObject(body = {}) {
    if (typeof body !== 'object' || body === null || Array.isArray(body)) {
        throw new HttpError(400, 'The body must be a JSON object');
    }
    return body;
}

// Runs the checks of the fields in `names` and throws one 400 that lists every
// problem, so the form can mark all of them at once.
function checkFields(body, checks, names) {
    const values = {};
    const fields = {};
    for (const name of names) {
        const result = checks[name](body[name]);
        if (result.error) {
            fields[name] = result.error;
        } else {
            values[name] = result.value;
        }
    }
    if (Object.keys(fields).length > 0) {
        throw new HttpError(400, 'Check the highlighted fields', fields);
    }
    return values;
}

export function validateCredentials(body) {
    return checkFields(readObject(body), credentialChecks, [
        'email',
        'password',
    ]);
}
