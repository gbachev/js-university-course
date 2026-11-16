export function proxyTarget(path, proxy) {
    for (const [prefix, backend] of Object.entries(proxy)) {
        if (path.startsWith(prefix)) {
            return backend + path;
        }
    }
    return null;
}
