import { HttpError } from './http-error.js';

export const STATUSES = [
    'wishlist',
    'applied',
    'interview',
    'offer',
    'rejected',
];

// One check per field. Each takes the value from the request body and gives back
// { value }, cleaned up and ready to save, or { error }, the message the form shows
// next to that field. A default parameter fills in a field that was left out.

function requiredText(value, max) {
    if (typeof value !== 'string' || value.trim() === '') {
        return { error: 'Fill in this field' };
    }
    if (value.trim().length > max) {
        return { error: `Use at most ${max} characters` };
    }
    return { value: value.trim() };
}

// new Date('2026-02-30') does not fail: V8 rolls it over to March 2. So we turn the
// date back into text, and only a real day comes back unchanged.
function isRealDate(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return false;
    }
    const date = new Date(`${value}T00:00:00Z`);
    return (
        !Number.isNaN(date.getTime()) && date.toISOString().startsWith(value)
    );
}

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

const applicationChecks = {
    company: (value) => requiredText(value, 200),
    role: (value) => requiredText(value, 200),
    status(value = 'wishlist') {
        if (!STATUSES.includes(value)) {
            return { error: `Choose one of: ${STATUSES.join(', ')}` };
        }
        return { value };
    },
    appliedOn(value = null) {
        if (value === null || value === '') {
            return { value: null };
        }
        if (!isRealDate(value)) {
            return { error: 'Use a real date, written YYYY-MM-DD' };
        }
        return { value };
    },
    // Only web links. A javascript: "link" runs code when someone clicks it.
    url(value = null) {
        if (value === null || value === '') {
            return { value: null };
        }
        // URL.parse() gives null for text that is not a URL at all.
        const url =
            typeof value === 'string' && value.length <= 2000
                ? URL.parse(value.trim())
                : null;
        if (url?.protocol !== 'http:' && url?.protocol !== 'https:') {
            return { error: 'Enter a full link that starts with https://' };
        }
        return { value: value.trim() };
    },
    // Kept as typed, with its spaces and line breaks.
    notes(value = '') {
        if (typeof value !== 'string') {
            return { error: 'Notes must be text' };
        }
        if (value.length > 5000) {
            return { error: 'Use at most 5000 characters' };
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

// Object.hasOwn, not checks[name]: every object inherits keys such as
// "constructor", and a body may send them.
function rejectUnknownFields(body, checks) {
    const unknown = Object.keys(body).filter(
        (name) => !Object.hasOwn(checks, name),
    );
    if (unknown.length > 0) {
        throw new HttpError(400, `Unknown fields: ${unknown.join(', ')}`);
    }
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

// A new application: every field is checked, and the ones left out get defaults.
export function validateNewApplication(body) {
    const input = readObject(body);
    rejectUnknownFields(input, applicationChecks);
    return checkFields(
        input,
        applicationChecks,
        Object.keys(applicationChecks),
    );
}

// A PATCH: only the fields that were sent are checked, and only they change.
export function validateChanges(body) {
    const input = readObject(body);
    rejectUnknownFields(input, applicationChecks);
    return checkFields(input, applicationChecks, Object.keys(input));
}
