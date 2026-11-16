export function settingSource(settings, key) {
    if (settings.hasOwnProperty(key)) {
        return 'custom';
    }
    // in checks the whole chain.
    return key in settings ? 'default' : 'missing';
}
