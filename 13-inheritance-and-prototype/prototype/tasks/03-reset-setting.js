// Task 3: Reset to the default
// Lecture: Prototype
//
// The settings screen has a "Reset" button next to every setting. Finish
// resetSetting(settings, key): it removes the user's own value, so the default from
// the prototype shows through again, and returns the value we read now. The defaults
// object must stay as it is. A key the user never changed stays as it is, and a key
// that exists nowhere gives undefined. The half-written version below breaks the
// defaults: find out why and fix it.
//
// Examples:
//   const defaults = { theme: 'light' };
//   const settings = Object.setPrototypeOf({ theme: 'dark' }, defaults);
//   resetSetting(settings, 'theme')   // 'light'
//   defaults.theme                    // 'light'
//
// Run the tests: npm test -- 13-inheritance-and-prototype/prototype

export function resetSetting(settings, key) {
    const defaults = Object.getPrototypeOf(settings);
    delete defaults[key];
    return settings[key];
}
