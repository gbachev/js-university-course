const ERROR = 'Enter a full link that starts with https://';

// URL.parse() gives null instead of throwing, and writes the scheme in lower case,
// so 'JavaScript:' becomes 'javascript:' and fails the check like any other scheme.
export function checkLink(value) {
    if (value === null || value === undefined || value === '') {
        return { value: null };
    }
    const url =
        typeof value === 'string' && value.length <= 2000 ? URL.parse(value.trim()) : null;
    if (url?.protocol !== 'http:' && url?.protocol !== 'https:') {
        return { error: ERROR };
    }
    return { value: value.trim() };
}
