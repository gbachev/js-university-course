export const defaultSettings = {
    theme: 'light',
    language: 'en',
    notifications: true,
};

export function countChangedSettings(settings) {
    let count = 0;

    for (let key in settings) {
        // for...in also visits the inherited defaults, so we skip them.
        if (settings.hasOwnProperty(key)) {
            count++;
        }
    }

    return count;
}
