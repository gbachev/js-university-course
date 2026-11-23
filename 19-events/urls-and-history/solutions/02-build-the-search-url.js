export function buildSearchUrl(base, fields) {
    const url = new URL(base);

    for (const [name, value] of Object.entries(fields)) {
        if (value !== '' && value !== null && value !== undefined) {
            url.searchParams.append(name, value);
        }
    }

    return url.href;
}
