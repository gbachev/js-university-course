const KEYWORDS = ['self', 'none', 'unsafe-inline', 'unsafe-eval', 'strict-dynamic'];

export function buildCsp(policy) {
    if (policy['script-src']?.includes('unsafe-inline')) {
        throw new Error('unsafe-inline in script-src lets injected inline code run');
    }
    return Object.entries(policy)
        .map(([directive, sources]) => {
            const quoted = sources.map((source) =>
                KEYWORDS.includes(source) ? `'${source}'` : source,
            );
            return [directive, ...quoted].join(' ');
        })
        .join('; ');
}
