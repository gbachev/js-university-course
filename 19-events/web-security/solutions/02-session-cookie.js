export function missingProtections(header) {
    // slice(1) skips name=value, the cookie itself.
    const attributes = header
        .split(';')
        .slice(1)
        .map((part) => part.trim().toLowerCase());
    const missing = [];
    if (!attributes.includes('httponly')) {
        missing.push('HttpOnly');
    }
    if (!attributes.includes('secure')) {
        missing.push('Secure');
    }
    if (!attributes.includes('samesite=lax') && !attributes.includes('samesite=strict')) {
        missing.push('SameSite');
    }
    return missing;
}
