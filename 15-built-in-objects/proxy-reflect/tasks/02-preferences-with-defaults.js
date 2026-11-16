// Task 2: Preferences with defaults
// Lecture: Proxy and Reflect
//
// We save only the preferences a user changed and fall back to the defaults for
// the rest. withDefaults(saved, defaults) below has two problems. A saved false or
// 0 is replaced by the default, so a user who turned notifications off gets them
// back on. And the in operator does not see the default keys. Fix the get trap so
// that every key the saved object has wins, whatever its value, and add a has trap:
// a key is in the preferences when the saved object or the defaults have it.
// Object.keys() should still list only the saved keys.
//
// Examples:
//   const defaults = { theme: 'light', notifications: true };
//   const prefs = withDefaults({ notifications: false }, defaults);
//   prefs.notifications     // false
//   prefs.theme             // 'light'
//   'theme' in prefs        // true
//
// Run the tests: npm test -- 15-built-in-objects/proxy-reflect

export function withDefaults(saved, defaults) {
    return new Proxy(saved, {
        get(target, prop, receiver) {
            return Reflect.get(target, prop, receiver) || defaults[prop];
        },
    });
}
