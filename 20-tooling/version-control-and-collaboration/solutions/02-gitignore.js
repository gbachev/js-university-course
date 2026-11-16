function matchesName(name, pattern) {
    if (pattern.startsWith('*')) {
        return name.endsWith(pattern.slice(1));
    }
    return name === pattern;
}

export function isIgnored(path, patterns) {
    const parts = path.split('/');
    const folders = parts.slice(0, -1);
    return patterns.some((pattern) => {
        if (pattern === '' || pattern.startsWith('#')) {
            return false;
        }
        if (pattern.endsWith('/')) {
            return folders.includes(pattern.slice(0, -1));
        }
        return parts.some((name) => matchesName(name, pattern));
    });
}
