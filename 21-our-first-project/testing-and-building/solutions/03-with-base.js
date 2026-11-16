export function withBase(path, base) {
    if (!path.startsWith('/')) {
        return path;
    }
    const folder = base.endsWith('/') ? base.slice(0, -1) : base;
    return `${folder}${path}`;
}
