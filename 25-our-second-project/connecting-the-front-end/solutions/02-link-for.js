// We let new URL() read the scheme, so 'JavaScript:' comes back lower-cased as
// 'javascript:', and we allow only http: and https:. new URL() throws for null
// and for text that is not a full URL, which means "no link".
export function linkFor(url) {
    try {
        const { protocol, hostname } = new URL(url);
        if (protocol === 'http:' || protocol === 'https:') {
            return { href: url, text: hostname };
        }
        return null;
    } catch {
        return null;
    }
}
