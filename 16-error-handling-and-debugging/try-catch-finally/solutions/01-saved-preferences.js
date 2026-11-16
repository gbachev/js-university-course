export function loadPreferences(text) {
    try {
        return JSON.parse(text);
    } catch {
        return { theme: 'light', fontSize: 16 };
    }
}
