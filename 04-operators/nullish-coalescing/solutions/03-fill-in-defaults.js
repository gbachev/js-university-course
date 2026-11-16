export function applyDefaults(settings) {
    settings.volume ??= 50;
    settings.showTips ??= true;
    // An empty nickname should be replaced too, so here we want ||=.
    settings.nickname ||= 'Guest';
    return settings;
}
