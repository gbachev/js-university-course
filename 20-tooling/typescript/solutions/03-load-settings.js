// @ts-check

/**
 * @typedef {object} Settings
 * @property {'light' | 'dark'} theme
 * @property {number} pageSize
 */

/**
 * @param {string | null} saved
 * @returns {Settings}
 */
export function loadSettings(saved) {
    /** @type {Settings} */
    const settings = { theme: 'light', pageSize: 20 };
    if (saved === null) {
        return settings;
    }

    /** @type {unknown} */
    let data;
    try {
        data = JSON.parse(saved);
    } catch {
        return settings;
    }
    if (typeof data !== 'object' || data === null) {
        return settings;
    }

    if ('theme' in data && (data.theme === 'light' || data.theme === 'dark')) {
        settings.theme = data.theme;
    }
    if (
        'pageSize' in data &&
        typeof data.pageSize === 'number' &&
        Number.isInteger(data.pageSize) &&
        data.pageSize >= 1 &&
        data.pageSize <= 100
    ) {
        settings.pageSize = data.pageSize;
    }
    return settings;
}
