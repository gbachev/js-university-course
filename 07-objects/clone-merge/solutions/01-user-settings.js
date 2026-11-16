export function getSettings(defaults, userPrefs) {
    return { ...defaults, ...userPrefs };
}
