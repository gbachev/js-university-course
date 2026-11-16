export function loadFeature(path, fallback) {
    return import(path).catch(() => {
        return fallback;
    });
}
