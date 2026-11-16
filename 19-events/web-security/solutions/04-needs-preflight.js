const SIMPLE_METHODS = ['GET', 'HEAD', 'POST'];
const SAFE_HEADERS = ['accept', 'accept-language', 'content-language', 'content-type'];
const SIMPLE_TYPES = [
    'application/x-www-form-urlencoded',
    'multipart/form-data',
    'text/plain',
];

export function needsPreflight({ method = 'GET', headers = {} } = {}) {
    if (!SIMPLE_METHODS.includes(method.toUpperCase())) {
        return true;
    }
    for (const [name, value] of Object.entries(headers)) {
        const header = name.toLowerCase();
        if (!SAFE_HEADERS.includes(header)) {
            return true;
        }
        // 'text/plain; charset=UTF-8' -> 'text/plain'
        const type = value.split(';')[0].trim().toLowerCase();
        if (header === 'content-type' && !SIMPLE_TYPES.includes(type)) {
            return true;
        }
    }
    return false;
}
