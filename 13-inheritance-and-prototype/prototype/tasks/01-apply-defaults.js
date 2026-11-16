// Task 1: Apply the defaults
// Lecture: Prototype
//
// Our app stores only the settings a user changed and takes everything else from the
// app defaults. Write applyDefaults(settings, defaults): it makes defaults the
// prototype of settings with Object.setPrototypeOf() and returns settings. Nothing is
// copied, so Object.keys() of the result still lists only what the user changed, and
// a default we change later shows through straight away.
//
// Examples:
//   const defaults = { theme: 'light', language: 'en' };
//   const settings = applyDefaults({ theme: 'dark' }, defaults);
//   settings.theme          // 'dark'
//   settings.language       // 'en'
//   Object.keys(settings)   // ['theme']
//
// Run the tests: npm test -- 13-inheritance-and-prototype/prototype

export function applyDefaults(settings, defaults) {
    // Your code here
}
