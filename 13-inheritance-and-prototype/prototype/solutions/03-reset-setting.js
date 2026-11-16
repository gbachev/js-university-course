export function resetSetting(settings, key) {
    // delete removes only the own property, the shadow; the default shows through.
    delete settings[key];
    return settings[key];
}
