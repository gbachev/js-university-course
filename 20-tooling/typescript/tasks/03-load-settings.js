// @ts-check
// Task 3: Saved settings
// Lecture: TypeScript for JavaScript Developers
//
// The reading list saves its settings in localStorage as JSON. Write
// loadSettings(saved): saved is what localStorage.getItem() returned, a string or
// null. It returns a Settings object with a theme ('light' or 'dark') and a pageSize
// (a whole number from 1 to 100). The parsed data is unknown, so check each value
// before we use it: a value that is missing or wrong falls back to the default,
// { theme: 'light', pageSize: 20 }. null and text that is not valid JSON give the
// defaults too, and the function never throws.
//
// Examples:
//   loadSettings('{"theme":"dark","pageSize":50}')   // { theme: 'dark', pageSize: 50 }
//   loadSettings('{"theme":"blue","pageSize":50}')   // { theme: 'light', pageSize: 50 }
//   loadSettings(null)                               // { theme: 'light', pageSize: 20 }
//   loadSettings('{oops')                            // { theme: 'light', pageSize: 20 }
//
// Run the tests: npm test -- 20-tooling/typescript

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
    // Your code here
    return { theme: 'light', pageSize: 20 };
}
