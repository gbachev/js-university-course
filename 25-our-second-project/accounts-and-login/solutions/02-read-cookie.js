// We split the header into pairs and each pair at its first '=' only, then compare
// the whole name. A search for 'sid=' in the header text would find 'oldsid=' too.
export function readCookie(header, name) {
    for (const pair of (header ?? '').split(';')) {
        const index = pair.indexOf('=');
        if (index !== -1 && pair.slice(0, index).trim() === name) {
            return pair.slice(index + 1).trim();
        }
    }
    return null;
}
