// Task 3: Frozen settings
// Lecture: Strict Mode (use strict)
//
// Our app keeps its settings in a frozen object. withTheme(settings, theme) should
// return settings with the new theme. Right now it assigns to the frozen object: in
// sloppy mode the assignment would be ignored without a word, and in our strict module
// it throws a TypeError. Fix it: return a new object with all the settings and the new
// theme, and leave the original object as it is.
//
// Examples:
//   const settings = Object.freeze({ theme: 'dark', language: 'en' });
//   withTheme(settings, 'light')   // { theme: 'light', language: 'en' }
//   settings.theme                 // 'dark'
//
// Run the tests: npm test -- 11-scope-and-variables/use-strict

export function withTheme(settings, theme) {
    settings.theme = theme;
    return settings;
}
