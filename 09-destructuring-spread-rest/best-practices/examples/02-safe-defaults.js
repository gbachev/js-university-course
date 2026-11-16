// Good: defaults for missing settings, and {} when there is no config at all.
let config; // the settings did not arrive

const { theme = 'light', layout = 'grid' } = config || {};

console.log(theme, layout); // light grid
