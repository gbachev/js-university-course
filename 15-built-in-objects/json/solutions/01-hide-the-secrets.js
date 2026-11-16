const secretKeys = ['password', 'token'];

export function toPublicJson(user) {
    // Returning undefined from the replacer drops the property.
    return JSON.stringify(user, (key, value) => {
        return secretKeys.includes(key) ? undefined : value;
    });
}
