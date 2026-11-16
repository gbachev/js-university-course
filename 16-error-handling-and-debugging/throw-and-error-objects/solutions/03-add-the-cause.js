export function loadProfile(text) {
    try {
        return JSON.parse(text);
    } catch (error) {
        throw new Error('Could not load the profile', { cause: error });
    }
}
